import React from 'react';
import { Dumbbell, Apple, Video, TrendingUp, Users, Trophy, Target, Clock } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const AppFeatures = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Programas de Entrenamiento",
      description: "Más de 50 programas diseñados por Sergi, desde principiante hasta avanzado"
    },
    {
      icon: Apple,
      title: "Planes Nutricionales",
      description: "Guías de nutrición completas con recetas y lista de compras incluidas"
    },
    {
      icon: Video,
      title: "Videos HD",
      description: "Todos los ejercicios explicados en video 4K con técnica perfecta"
    },
    {
      icon: TrendingUp,
      title: "Seguimiento de Progreso",
      description: "Registra tus entrenamientos, peso y medidas para ver tu evolución"
    },
    {
      icon: Users,
      title: "Comunidad Global",
      description: "Únete a miles de usuarios transformándose juntos"
    },
    {
      icon: Trophy,
      title: "Challenges & Rewards",
      description: "Completa desafíos mensuales y gana recompensas exclusivas"
    },
    {
      icon: Target,
      title: "Objetivos Personalizados",
      description: "La app se adapta a tu nivel y objetivos específicos"
    },
    {
      icon: Clock,
      title: "Entrena Cuando Quieras",
      description: "Acceso 24/7 a todos los programas, entrenamientos y contenido"
    }
  ];

  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg"></div>
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>

      <div className="absolute top-40 right-20 w-56 h-56 bg-gold/6 rounded-full blur-[30px] float-element"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3 mb-8 shimmer">
              <Trophy className="w-5 h-5 text-gold mr-3" />
              <span className="gradient-text font-black text-sm tracking-widest">CARACTERÍSTICAS PREMIUM</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="text-white">Todo lo que</span>
              <span className="block gradient-text text-glow mt-2">Necesitas</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Boost no es solo una app de entrenamientos. Es tu entrenador personal, nutricionista y comunidad de apoyo, todo en tu bolsillo.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bento-card p-8 hover-lift stagger-animation neon-border"
              >
                <div className="bg-gold/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 glow-gold transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="text-xl font-black text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* App Preview Section */}
          <div className="glass-card-light rounded-3xl p-8 md:p-16 border-2 border-gold/30 glow-gold-intense">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left - Text */}
              <div className="text-white">
                <h3 className="text-5xl md:text-6xl font-black mb-8 leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  <span className="text-white">Diseñada para</span>
                  <span className="block gradient-text text-glow mt-2">Resultados Reales</span>
                </h3>

                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Cada detalle de Boost ha sido creado pensando en maximizar tus resultados. Interfaz intuitiva, contenido premium y tecnología que te mantiene motivado.
                </p>

                <div className="space-y-5">
                  {[
                    "Sincronización en todos tus dispositivos",
                    "Modo offline para entrenar sin conexión",
                    "Actualizaciones mensuales con nuevo contenido",
                    "Soporte premium 24/7"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 stagger-animation">
                      <div className="w-3 h-3 rounded-full bg-gold glow-gold"></div>
                      <span className="text-gray-200 font-semibold text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Phone Preview */}
              <div className="relative">
                <PhoneMockup
                  imageUrl="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/Captura-de-pantalla-2025-12-15-a-las-18.27.58.png"
                  alt="Boost App Interface"
                  size="small"
                  showOverlay={true}
                  overlayContent={
                    <div className="px-6 pb-6">
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-bold text-sm">Chest & Triceps</span>
                          <span className="text-gold font-black text-sm">45 min</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gold rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gold text-black px-4 py-2 rounded-full font-black text-sm shadow-xl">
                  NUEVO
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-gold" />
                  4.9 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
