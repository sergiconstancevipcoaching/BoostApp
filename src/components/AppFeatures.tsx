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
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <Trophy className="w-5 h-5 text-gold mr-3" />
              <span className="text-gold font-bold text-sm tracking-wider">CARACTERÍSTICAS</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900">
              Todo lo que necesitas
              <span className="block text-gold mt-2">en una app</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Boost no es solo una app de entrenamientos. Es tu entrenador personal, nutricionista y comunidad de apoyo, todo en tu bolsillo.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gold/30 hover:-translate-y-2"
              >
                <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* App Preview Section */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-16 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left - Text */}
              <div className="text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  Diseñada para
                  <span className="block text-gold">Resultados Reales</span>
                </h3>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Cada detalle de Boost ha sido creado pensando en maximizar tus resultados. Interfaz intuitiva, contenido premium y tecnología que te mantiene motivado.
                </p>

                <div className="space-y-4">
                  {[
                    "Sincronización en todos tus dispositivos",
                    "Modo offline para entrenar sin conexión",
                    "Actualizaciones mensuales con nuevo contenido",
                    "Soporte premium 24/7"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                      <span className="text-gray-300 font-medium">{item}</span>
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
