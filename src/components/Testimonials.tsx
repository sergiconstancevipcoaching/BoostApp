import React, { useEffect, useRef } from 'react';
import { Star, Award, Quote, TrendingUp, Heart } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const testimonialImages = [
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_33.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_31.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_29.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_25.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_21.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_14.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_48_09.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_47_59.jpg",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-19_12_53.png",
    "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/ChatGPT-Image-18-dic-2025-18_51_04.jpg"
  ];

  const textTestimonials = [
    {
      text: "La mejor inversión que he hecho en mi salud. Los resultados hablan por sí solos.",
      author: "Carlos M.",
      rating: 5
    },
    {
      text: "Nunca pensé que podría lograr este físico. Boost cambió mi vida completamente.",
      author: "Ana R.",
      rating: 5
    },
    {
      text: "Los programas son increíbles, la app es súper intuitiva y Sergi es un genio.",
      author: "Miguel S.",
      rating: 5
    },
    {
      text: "Después de años probando mil cosas, finalmente encontré algo que funciona.",
      author: "Laura P.",
      rating: 5
    }
  ];

  return (
    <section id="transformations" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg"></div>
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-gold/6 rounded-full blur-[80px] float-element"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/4 rounded-full blur-[80px] float-element"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3 mb-8 shimmer">
              <Heart className="w-5 h-5 text-gold mr-3" />
              <span className="gradient-text font-black text-sm tracking-widest">30,000+ USUARIOS SATISFECHOS</span>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="text-white">Transformaciones</span>
              <span className="block gradient-text text-glow mt-2">Reales de Personas Reales</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              No son modelos ni actors. Son personas normales como tú que decidieron cambiar su vida.
            </p>
          </div>

          {/* Infinite Scroll Carousel - Row 1 */}
          <div className="mb-8 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[...testimonialImages, ...testimonialImages].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 h-96 rounded-3xl overflow-hidden border-2 border-white/10 hover:border-gold/50 transition-all duration-300 group relative"
                >
                  <img
                    src={image}
                    alt={`Testimonio ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-gold" />
                        <span className="text-white font-bold text-sm">Transformación verificada</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">

            {/* Large Feature Testimonial */}
            <div className="md:col-span-7 bento-card p-12 border-2 border-gold/30 glow-gold neon-border">
              <Quote className="w-12 h-12 text-gold mb-6" />
              <p className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                "En 4 meses pasé de no poder hacer 5 flexiones a estar en la mejor forma de mi vida"
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark"></div>
                <div>
                  <p className="text-white font-black text-xl">Carlos Martínez</p>
                  <p className="text-gray-400 text-sm">Madrid, España</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-gold font-bold">-18kg</span>
                  <span className="text-gray-300 ml-2">grasa</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-gold font-bold">+6kg</span>
                  <span className="text-gray-300 ml-2">músculo</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="md:col-span-5 glass-card p-8 rounded-3xl">
              <div className="text-center mb-6">
                <div className="text-7xl font-black gradient-text mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  4.9
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 font-semibold">Valoración promedio</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-300">5 estrellas</span>
                  <div className="flex items-center gap-2 flex-1 mx-4">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-gold font-bold text-sm">92%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-300">4 estrellas</span>
                  <div className="flex items-center gap-2 flex-1 mx-4">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{width: '6%'}}></div>
                    </div>
                    <span className="text-gray-400 font-bold text-sm">6%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-gray-300">3 estrellas</span>
                  <div className="flex items-center gap-2 flex-1 mx-4">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{width: '2%'}}></div>
                    </div>
                    <span className="text-gray-400 font-bold text-sm">2%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Testimonials Grid */}
            {textTestimonials.map((testimonial, index) => (
              <div key={index} className="md:col-span-6 lg:col-span-3 bento-card p-6 hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-white font-semibold mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-gold font-bold text-sm">{testimonial.author}</p>
              </div>
            ))}

          </div>

          {/* Final CTA */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold/30 glow-gold-intense neon-border">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent"></div>
            <div className="relative p-12 text-center">
              <Award className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="gradient-text">Tu Transformación Empieza Hoy</span>
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                Únete a los miles de personas que ya están transformando sus vidas con Boost
              </p>
              <a
                href="#pricing"
                className="btn-gold-premium inline-flex items-center px-12 py-6 rounded-2xl font-black text-xl tracking-wider group"
              >
                VER PLANES Y PRECIOS
                <TrendingUp className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;