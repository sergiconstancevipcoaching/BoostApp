import React from 'react';
import { Star, TrendingUp, Award } from 'lucide-react';

const Testimonials = () => {
  const transformations = [
    {
      name: "Carlos M.",
      age: 34,
      location: "Madrid",
      duration: "12 semanas",
      weightLost: "16kg",
      muscleBuild: "+5kg músculo",
      quote: "De pensar que no podía cambiar a tener el físico que siempre soñé. Boost lo hizo posible.",
      beforeImage: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      afterImage: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 5
    },
    {
      name: "Ana R.",
      age: 29,
      location: "Barcelona",
      duration: "16 semanas",
      weightLost: "12kg",
      muscleBuild: "Definición total",
      quote: "Los programas de la app son increíbles. Finalmente encontré algo que funciona y que puedo seguir.",
      beforeImage: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      afterImage: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 5
    },
    {
      name: "Miguel S.",
      age: 41,
      location: "Valencia",
      duration: "20 semanas",
      weightLost: "22kg",
      muscleBuild: "+7kg músculo",
      quote: "A mis 41 años conseguí el mejor físico de mi vida. Nunca pensé que sería posible.",
      beforeImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      afterImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 5
    },
    {
      name: "David L.",
      age: 27,
      location: "Sevilla",
      duration: "14 semanas",
      weightLost: "18kg",
      muscleBuild: "+6kg músculo",
      quote: "La app es adictiva. Cada entrenamiento te deja con ganas de más. Resultados increíbles.",
      beforeImage: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      afterImage: "https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 5
    },
    {
      name: "Laura P.",
      age: 32,
      location: "Bilbao",
      duration: "18 semanas",
      weightLost: "14kg",
      muscleBuild: "Tonificación completa",
      quote: "Sergi sabe lo que hace. Sus programas son desafiantes pero te mantienen motivada cada día.",
      beforeImage: "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      afterImage: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 5
    },
    {
      name: "Roberto F.",
      age: 38,
      location: "Málaga",
      duration: "16 semanas",
      weightLost: "19kg",
      muscleBuild: "+8kg músculo",
      quote: "Después de probar mil cosas, Boost es lo único que realmente funcionó. Sin excusas.",
      beforeImage: "https://images.pexels.com/photos/1310032/pexels-photo-1310032.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      afterImage: "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      rating: 5
    }
  ];

  return (
    <section id="transformations" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-25"></div>

      <div className="absolute top-10 left-20 w-56 h-56 bg-gold/5 rounded-full blur-[30px] float-element"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-gold mr-3" />
              <span className="text-gold font-bold text-sm tracking-wider">TRANSFORMACIONES REALES</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white">
              100,000+ Usuarios
              <span className="block text-gold mt-2">Transformados</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Resultados reales de personas reales usando la app Boost. Sin trucajes, sin filtros.
            </p>
          </div>

          {/* Transformations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {transformations.map((transformation, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-3xl overflow-hidden border-2 border-gray-700 hover:border-gold/50 transition-all duration-300 group"
              >
                {/* Before/After Images */}
                <div className="relative h-96">
                  <div className="absolute inset-0 grid grid-cols-2">
                    {/* Before */}
                    <div className="relative">
                      <img
                        src={transformation.beforeImage}
                        alt={`${transformation.name} antes`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg font-black text-xs">
                        ANTES
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative">
                      <img
                        src={transformation.afterImage}
                        alt={`${transformation.name} después`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-lg font-black text-xs">
                        DESPUÉS
                      </div>
                    </div>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-gold" />
                        <span className="font-black text-lg">{transformation.weightLost}</span>
                      </div>
                      <div className="text-gold font-bold text-sm">{transformation.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">{transformation.name}</h3>
                      <p className="text-gray-400 text-sm">{transformation.age} años • {transformation.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(transformation.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 italic mb-4 leading-relaxed">
                    "{transformation.quote}"
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400">
                      {transformation.muscleBuild}
                    </div>
                    <div className="text-gold font-bold text-xs bg-gold/10 px-3 py-1 rounded-full">
                      VERIFICADO
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-300 text-xl mb-6">
              Únete a miles de personas transformándose con Boost
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center bg-gold text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all duration-300 shadow-2xl"
            >
              EMPEZAR MI TRANSFORMACIÓN
            </a>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-500 text-sm max-w-4xl mx-auto leading-relaxed">
              Los resultados pueden variar según el individuo. Estas transformaciones son el resultado de seguir los programas de Boost, mantener la disciplina nutricional y realizar el entrenamiento según las indicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;