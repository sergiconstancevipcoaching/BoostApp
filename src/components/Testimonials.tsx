import React from 'react';
import { Star, Award, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_33.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_31.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_29.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_25.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_21.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_14.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_09.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_47_59.jpg"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_12_53.png"
    },
    {
      image: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-18_51_04.jpg"
    }
  ];

  return (
    <section id="transformations" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg"></div>
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>

      <div className="absolute top-20 right-20 w-56 h-56 bg-gold/6 rounded-full blur-[30px] float-element"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3 mb-8 shimmer">
              <Award className="w-5 h-5 text-gold mr-3" />
              <span className="gradient-text font-black text-sm tracking-widest">TESTIMONIOS REALES</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="text-white">Lo que dicen</span>
              <span className="block gradient-text text-glow mt-2">Nuestros Usuarios</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Miles de personas están logrando sus objetivos con Boost. Lee sus historias y opiniones reales.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="glass-card rounded-3xl p-8 text-center card-3d hover-lift">
              <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>4.9</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              <div className="text-gray-300 font-semibold text-sm">Rating Promedio</div>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center card-3d hover-lift">
              <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>30K+</div>
              <div className="text-gray-300 font-semibold text-sm">Usuarios Activos</div>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center card-3d hover-lift">
              <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>98%</div>
              <div className="text-gray-300 font-semibold text-sm">Satisfacción</div>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center card-3d hover-lift">
              <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>500+</div>
              <div className="text-gray-300 font-semibold text-sm">Transformaciones</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bento-card rounded-3xl overflow-hidden border-2 border-white/10 hover:border-gold/50 transition-all duration-300 group hover-lift stagger-animation"
              >
                <div className="relative aspect-square">
                  <img
                    src={testimonial.image}
                    alt={`Testimonio ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-gold/20 backdrop-blur-xl border border-gold/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Quote className="w-4 h-4 text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bento-card p-12 text-center border-2 border-gold/30 glow-gold neon-border">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-5xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="gradient-text">Únete a la Comunidad</span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Sé parte de miles de personas que están transformando sus vidas con Boost
              </p>
              <a
                href="#pricing"
                className="btn-gold-premium inline-flex items-center px-12 py-6 rounded-2xl font-black text-xl tracking-wider"
              >
                EMPEZAR AHORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;