import React, { useEffect, useRef, useState } from 'react';
import { Star, Check, Award, ArrowRight, Sparkles, Crown, Zap } from 'lucide-react';

const Memberships = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Mensual",
      subtitle: "Flexible",
      price: "19.99",
      priceDetail: "€19.99/mes",
      totalPrice: null,
      period: "/mes",
      popular: false,
      icon: Zap,
      badge: null,
      features: [
        "Acceso completo a todos los programas",
        "200+ entrenamientos on-demand",
        "Planes nutricionales incluidos",
        "Videos en 4K de cada ejercicio",
        "Seguimiento de progreso",
        "Comunidad global",
        "Actualizaciones mensuales",
        "Cancela cuando quieras"
      ]
    },
    {
      name: "Anual",
      subtitle: "Mejor Valor",
      price: "9.99",
      priceDetail: "€119.99 al año",
      totalPrice: "€119.99",
      period: "/mes",
      popular: true,
      icon: Crown,
      badge: "AHORRA 50%",
      trial: "7 DÍAS GRATIS",
      features: [
        "Todo del plan mensual",
        "Ahorra €120 al año",
        "7 días de prueba gratis",
        "Contenido exclusivo anual",
        "Acceso prioritario a nuevos programas",
        "Challenges premium con premios",
        "Badge exclusivo en la comunidad",
        "Soporte premium 24/7"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg"></div>
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      <div className="absolute top-20 left-10 w-56 h-56 bg-gold/6 rounded-full blur-[30px] float-element"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-24 reveal">
            <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3 mb-8 shimmer">
              <Sparkles className="w-5 h-5 text-gold mr-3" />
              <span className="gradient-text font-black text-sm tracking-widest">PRECIOS SIMPLES</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="text-white">Empieza tu</span>
              <span className="block gradient-text text-glow mt-2">Transformación Hoy</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Acceso instantáneo a todos los programas, entrenamientos y contenido premium. Cancela cuando quieras.
            </p>
          </div>

          {/* Plans Grid - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div key={index} className="relative reveal-scale">
                {/* Badges */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="btn-gold-premium px-5 py-2 rounded-full font-black text-sm shimmer">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {plan.popular && (
                  <div className="absolute -top-4 right-4 z-20">
                    <div className="btn-gold-premium px-4 py-2 rounded-full font-black text-xs flex items-center gap-2 shimmer">
                      <Star className="w-4 h-4 fill-current" />
                      MEJOR VALOR
                    </div>
                  </div>
                )}

                {plan.trial && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="glass-card-light px-3 py-1 rounded-lg font-black text-xs text-gold border-2 border-gold">
                      {plan.trial}
                    </div>
                  </div>
                )}

                <div className={`relative h-full flex flex-col rounded-3xl p-10 transition-all duration-500 ${
                  plan.popular
                    ? 'bento-card border-4 border-gold glow-gold-intense transform lg:scale-110 z-10 neon-border'
                    : 'bento-card border-2 border-white/10 hover:border-gold/50 hover-lift'
                }`}>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                    plan.popular ? 'bg-gold/20 glow-gold' : 'glass-card-light'
                  }`}>
                    <plan.icon className="w-10 h-10 text-gold" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-4xl font-black mb-2 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {plan.name}
                  </h3>
                  <p className="text-sm font-bold mb-6 gradient-text">
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline mb-2">
                      <span className="text-7xl font-black gradient-text text-glow" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        €{plan.price}
                      </span>
                      <span className="text-xl ml-2 text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-300">
                      {plan.priceDetail}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gold/20 glow-gold">
                          <Check className="w-4 h-4 text-gold" />
                        </div>
                        <span className="font-semibold text-gray-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/checkout"
                    className="btn-gold-premium w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 group"
                  >
                    <span>EMPEZAR AHORA</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="bento-card p-12 text-center border-2 border-gold/30 glow-gold neon-border reveal">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gold/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-gold">
                <Award className="w-10 h-10 text-gold" />
              </div>

              <h3 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="gradient-text">Garantía de Satisfacción</span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Si no estás satisfecho en los primeros 30 días, te devolvemos el{' '}
                <span className="gradient-text font-black text-2xl">100%</span> de tu dinero. Sin preguntas.
              </p>

              <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3 border-2 border-gold/30 shimmer">
                <Check className="w-5 h-5 text-gold mr-3" />
                <span className="text-white font-bold">30 días de garantía</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;