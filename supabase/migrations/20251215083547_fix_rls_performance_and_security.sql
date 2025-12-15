/*
  # Fix RLS Performance and Security Issues

  ## Summary
  Optimizes Row Level Security policies to prevent re-evaluation of auth functions
  for each row and fixes function security issues.

  ## Changes
  
  1. **RLS Performance Optimization**
     - Updates all RLS policies to use `(select auth.uid())` instead of `auth.uid()`
     - This ensures the function is evaluated once per query instead of once per row
  
  2. **Function Security**
     - Adds SECURITY DEFINER and explicit search_path to update_updated_at_column function
     - Prevents search_path manipulation attacks

  ## Security Notes
  - All policies maintain the same access control logic
  - Performance improvements for queries at scale
  - Function now has immutable search_path
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Users can insert own subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Users can update own subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Users can view own payments" ON payments;

-- Recreate profiles policies with optimized auth.uid() calls
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

-- Recreate subscriptions policies with optimized auth.uid() calls
CREATE POLICY "Users can view own subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own subscriptions"
  ON subscriptions FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

-- Recreate payments policy with optimized auth.uid() call
CREATE POLICY "Users can view own payments"
  ON payments FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM subscriptions
      WHERE subscriptions.id = payments.subscription_id
      AND subscriptions.user_id = (select auth.uid())
    )
  );

-- Fix function security by adding SECURITY DEFINER and explicit search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public, pg_temp
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
