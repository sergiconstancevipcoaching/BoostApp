import React from 'react';
import { Dumbbell, Flame, Zap, Target, Award, TrendingUp, Repeat, Calendar, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Flame,
      name: "Mass Builder",
      duration: "12 semanas",
      level: "Intermedio-Avanzado",
      description: "Programa intensivo para máxima hipertrofia",
      popular: true
    },
    {
      icon: Zap,
      name: "Shredded",
      duration: "8 semanas",
      level: "Todos los niveles",
      description: "Definición extrema manteniendo músculo",
      popular: false
    },
    {
      icon: Target,
      name: "Push Pull Legs",
      duration: "Continuo",
      level: "Intermedio",
      description: "El clásico split optimizado",
      popular: true
    },
    {
      icon: Award,
      name: "Olympia Prep",
      duration: "16 semanas",
      level: "Avanzado",
      description: "Preparación de competición profesional",
      popular: false
    },
    {
      icon: Dumbbell,
      name: "Bro Split",
      duration: "Continuo",
      level: "Principiante-Intermedio",
      description: "Un músculo por día, volumen alto",
      popular: false
    },
    {
      icon: TrendingUp,
      name: "Beginner Gains",
      duration: "10 semanas",
      level: "Principiante",
      description: "Fundamentos para novatos totales",
      popular: false
    },
    {
      icon: Repeat,
      name: "Upper Lower",
      duration: "Continuo",
      level: "Todos los niveles",
      description: "Frecuencia 2x para cada grupo muscular",
      popular: true
    },
    {
      icon: Calendar,
      name: "Arnold Split",
      duration: "Continuo",
      level: "Intermedio-Avanzado",
      description: "El legendario split del campeón",
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3 mb-8 shimmer">
              <Dumbbell className="w-5 h-5 text-gold mr-3" />
              <span className="gradient-text font-black text-sm tracking-widest">PROGRAMAS DE ÉLITE</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Elige tu
              <span className="block gradient-text mt-2">Programa</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada programa está diseñado con la experiencia de 15+ años compitiendo al máximo nivel. Selecciona según tu objetivo y nivel.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative group rounded-3xl p-8 transition-all duration-500 card-3d ${
                  program.popular
                    ? 'glass-card-light border-2 border-gold shadow-2xl glow-gold'
                    : 'glass-card border border-white/10 hover:border-gold/30'
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="btn-gold-premium px-6 py-2 rounded-full font-black text-xs tracking-wider">
                      MÁS POPULAR
                    </div>
                  </div>
                )}

                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  program.popular ? 'bg-gold/20 glow-gold' : 'glass-card-light'
                }`}>
                  <program.icon className="w-10 h-10 text-gold" />
                </div>

                <h3 className="text-3xl font-black mb-4 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {program.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <div className="text-sm font-bold gradient-text">
                      {program.duration}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <div className="text-sm font-semibold text-gray-300">
                      {program.level}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex items-center text-gold font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Ver detalles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          {/* On-Demand Workouts */}
          <div className="glass-card-light rounded-3xl p-12 border-2 border-gold/30 glow-gold mb-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center glass-card rounded-full px-6 py-3 mb-8 shimmer">
                <Zap className="w-5 h-5 text-gold mr-3" />
                <span className="gradient-text font-black text-sm tracking-widest">ENTRENAMIENTOS ON-DEMAND</span>
              </div>

              <h3 className="text-5xl md:text-6xl font-black mb-8 leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="gradient-text">200+</span>
                <span className="text-white"> Entrenamientos</span>
              </h3>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                ¿No quieres seguir un programa completo? Accede a cientos de entrenamientos individuales organizados por músculo, tiempo y equipo disponible.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Pecho', 'Espalda', 'Piernas', 'Hombros', 'Brazos', 'Core', 'Full Body', 'Cardio'].map((muscle, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 card-3d group"
                  >
                    <div className="font-black text-white text-lg mb-2 group-hover:text-gold transition-colors" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {muscle}
                    </div>
                    <div className="text-sm text-gray-400">25+ workouts</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-300 text-xl mb-8 font-medium">
              Todos los programas incluidos con tu suscripción
            </p>
            <a
              href="#pricing"
              className="btn-gold-premium inline-flex items-center px-12 py-6 rounded-2xl font-black text-xl tracking-wider group"
            >
              Ver Planes
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
