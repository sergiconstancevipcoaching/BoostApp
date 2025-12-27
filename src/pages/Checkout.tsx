import React, { useState } from 'react';
import { Check, Shield, Lock, CreditCard, ArrowLeft, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual');

  const plans = {
    monthly: {
      name: "Plan Mensual",
      price: "19.99",
      total: "19.99",
      period: "mes",
      savings: null,
      icon: 'boost',
      features: [
        "Acceso completo a todos los programas",
        "200+ entrenamientos on-demand",
        "Planes nutricionales incluidos",
        "Videos en 4K",
        "Seguimiento de progreso",
        "Comunidad global",
        "Cancela cuando quieras"
      ]
    },
    annual: {
      name: "Plan Anual",
      price: "9.99",
      total: "119.99",
      period: "mes",
      savings: "Ahorra €120 al año",
      trial: "7 días gratis",
      icon: Crown,
      features: [
        "Todo del plan mensual",
        "7 días de prueba gratis",
        "Ahorra 50%",
        "Contenido exclusivo anual",
        "Acceso prioritario a nuevos programas",
        "Challenges premium",
        "Badge exclusivo en la comunidad",
        "Soporte premium 24/7"
      ]
    }
  };

  const currentPlan = plans[selectedPlan];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al inicio
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Left Column - Plan Selection */}
              <div>
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                    Elige tu Plan
                  </h1>
                  <p className="text-xl text-gray-600">
                    Acceso instantáneo a Boost by Sergi Constance
                  </p>
                </div>

                {/* Plan Toggle */}
                <div className="space-y-4 mb-8">
                  {/* Annual Plan */}
                  <div
                    onClick={() => setSelectedPlan('annual')}
                    className={`relative cursor-pointer rounded-3xl p-6 border-2 transition-all ${
                      selectedPlan === 'annual'
                        ? 'border-gold bg-gold/5 shadow-xl'
                        : 'border-gray-200 hover:border-gold/50'
                    }`}
                  >
                    {selectedPlan === 'annual' && (
                      <div className="absolute -top-3 left-6">
                        <div className="bg-gold text-black px-4 py-1 rounded-full font-black text-xs">
                          AHORRA 50%
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === 'annual' ? 'border-gold bg-gold' : 'border-gray-300'
                        }`}>
                          {selectedPlan === 'annual' && (
                            <Check className="w-4 h-4 text-black" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Crown className="w-5 h-5 text-gold" />
                            <h3 className="text-xl font-black text-gray-900">Plan Anual</h3>
                            <span className="bg-gold/20 text-gold text-xs font-black px-2 py-1 rounded-full">
                              MEJOR VALOR
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 font-semibold">
                            7 días gratis, luego €119.99/año
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-gray-900">€9.99</div>
                        <div className="text-sm text-gray-500">por mes</div>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Plan */}
                  <div
                    onClick={() => setSelectedPlan('monthly')}
                    className={`relative cursor-pointer rounded-3xl p-6 border-2 transition-all ${
                      selectedPlan === 'monthly'
                        ? 'border-gold bg-gold/5 shadow-xl'
                        : 'border-gray-200 hover:border-gold/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === 'monthly' ? 'border-gold bg-gold' : 'border-gray-300'
                        }`}>
                          {selectedPlan === 'monthly' && (
                            <Check className="w-4 h-4 text-black" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <img src="/boost_favicon.png" alt="Boost" className="w-5 h-5" />
                            <h3 className="text-xl font-black text-gray-900">Plan Mensual</h3>
                          </div>
                          <p className="text-sm text-gray-600 font-semibold">
                            Facturado mensualmente
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-gray-900">€19.99</div>
                        <div className="text-sm text-gray-500">por mes</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                    <Check className="w-6 h-6 text-gold" />
                    Incluido en tu plan
                  </h3>

                  <ul className="space-y-4">
                    {currentPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-gold" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-semibold">Pago Seguro</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-semibold">4.9/5 Rating</p>
                  </div>
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-xs text-gray-600 font-semibold">Garantía 30d</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Payment Form */}
              <div>
                <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl sticky top-24">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    Información de Pago
                  </h2>

                  {/* Payment Form */}
                  <form className="space-y-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Card Information */}
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Información de Tarjeta
                      </label>
                      <div className="space-y-3">
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold outline-none transition-colors"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold outline-none transition-colors"
                            required
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold outline-none transition-colors"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gold outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                      <h3 className="font-black text-gray-900 mb-4">Resumen del Pedido</h3>

                      <div className="flex justify-between text-gray-700">
                        <span>{currentPlan.name}</span>
                        <span className="font-bold">€{currentPlan.total}</span>
                      </div>

                      {selectedPlan === 'annual' && (
                        <>
                          <div className="flex justify-between text-gold text-sm font-bold">
                            <span>7 días gratis</span>
                            <span>€0.00</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Ahorras</span>
                            <span className="text-gold font-bold">€120.00</span>
                          </div>
                        </>
                      )}

                      <div className="border-t-2 border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-black text-gray-900">Total</span>
                          <span className="text-2xl font-black text-gray-900">
                            €{selectedPlan === 'annual' ? '0.00' : currentPlan.total}
                          </span>
                        </div>
                        {selectedPlan === 'annual' && (
                          <p className="text-xs text-gray-500 mt-2">
                            Luego €119.99 cobrado anualmente
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-yellow-400 text-black font-black text-lg py-4 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                    >
                      <Lock className="w-5 h-5" />
                      {selectedPlan === 'annual' ? 'EMPEZAR PRUEBA GRATIS' : 'COMPLETAR PAGO'}
                    </button>

                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      Al continuar, aceptas nuestros{' '}
                      <Link to="/terminos-condiciones" className="text-gold font-semibold">
                        Términos de Servicio
                      </Link>{' '}
                      y{' '}
                      <Link to="/politica-privacidad" className="text-gold font-semibold">
                        Política de Privacidad
                      </Link>
                      . Garantía de devolución de dinero de 30 días.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
