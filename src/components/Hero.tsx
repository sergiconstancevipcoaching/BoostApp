import React, { useRef } from 'react';
import { Star, ArrowRight, CheckCircle, Smartphone, Download, Trophy, Zap } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>

      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sg foto 1.jpeg"
          alt="Sergi Constance"
          className="w-full h-full object-cover object-center scale-110"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      {/* Floating Glow Orbs - Optimized */}
      <div className="absolute top-20 left-10 w-56 h-56 bg-gold/6 rounded-full blur-[30px] float-element"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">

            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">

              {/* Premium Badge */}
              <div className="inline-flex items-center glass-card-light rounded-full px-6 py-3 mb-8 shimmer">
                <Zap className="w-5 h-5 text-gold mr-3" />
                <span className="gradient-text font-black text-sm tracking-widest">APLICACIÓN OFICIAL</span>
              </div>

              {/* Main Headline with Gradient Text */}
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black mb-6 leading-none tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                <span className="block mb-2 gradient-text">BOOST</span>
                <span className="text-white block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  by <span className="gradient-text">Sergi Constance</span>
                </span>
              </h1>

              {/* Professional Subheadline */}
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Transforma tu físico con los programas de entrenamiento y nutrición del{' '}
                <span className="gradient-text font-bold">IFBB Pro</span>
                {' '}que interpretó a Zeus en Justice League
              </p>

              {/* Premium CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start">
                <a
                  href="#pricing"
                  className="btn-gold-premium inline-flex items-center justify-center px-12 py-6 rounded-2xl font-black text-xl tracking-wider group"
                >
                  <Download className="w-6 h-6 mr-3" />
                  <span>EMPEZAR AHORA</span>
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </a>

                <a
                  href="#features"
                  className="glass-card-light inline-flex items-center justify-center px-12 py-6 rounded-2xl font-bold text-xl text-white hover:bg-white/10 transition-all duration-300 group"
                >
                  Ver Programas
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Indicators with Glow */}
              <div className="flex flex-wrap gap-8 text-sm justify-center lg:justify-start">
                <div className="flex items-center glass-card px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-white font-semibold">30K+ Descargas</span>
                </div>
                <div className="flex items-center glass-card px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-white font-semibold">iOS & Android</span>
                </div>
                <div className="flex items-center glass-card px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span className="text-white font-semibold">5 Días Gratis</span>
                </div>
              </div>
            </div>

            {/* Right Column - App Preview with 3D Effect */}
            <div className="text-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-md mx-auto">
                {/* Glow Effect Behind Phone - Optimized */}
                <div className="absolute inset-0 glow-gold opacity-40 rounded-[3rem]"></div>

                <PhoneMockup
                  imageUrl="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/12/Captura-de-pantalla-2025-12-15-a-las-18.27.58.png"
                  alt="Boost App"
                  size="large"
                  className="card-3d"
                />

                {/* App Store Badges with Glassmorphism */}
                <div className="flex justify-center gap-4 mt-10">
                  <div className="glass-card-light px-6 py-3 rounded-2xl hover:bg-white/15 transition-all cursor-pointer card-3d">
                    <div className="flex items-center gap-3">
                      <Download className="w-6 h-6 text-gold" />
                      <div className="text-left">
                        <div className="text-[11px] text-gray-400 font-medium">Download on</div>
                        <div className="text-base font-black text-white tracking-wide">App Store</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card-light px-6 py-3 rounded-2xl hover:bg-white/15 transition-all cursor-pointer card-3d">
                    <div className="flex items-center gap-3">
                      <Download className="w-6 h-6 text-gold" />
                      <div className="text-left">
                        <div className="text-[11px] text-gray-400 font-medium">Get it on</div>
                        <div className="text-base font-black text-white tracking-wide">Google Play</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats with Glass Cards */}
          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="glass-card rounded-3xl p-8 text-center card-3d">
                <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>5K+</div>
                <div className="text-gray-300 font-semibold text-base">Usuarios Activos</div>
              </div>
              <div className="glass-card rounded-3xl p-8 text-center card-3d">
                <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>50+</div>
                <div className="text-gray-300 font-semibold text-base">Programas</div>
              </div>
              <div className="glass-card rounded-3xl p-8 text-center card-3d">
                <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>4.9★</div>
                <div className="text-gray-300 font-semibold text-base">Rating</div>
              </div>
              <div className="glass-card rounded-3xl p-8 text-center card-3d">
                <div className="text-5xl font-black gradient-text mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>24/7</div>
                <div className="text-gray-300 font-semibold text-base">Acceso Total</div>
              </div>
            </div>

            {/* Social Proof with Premium Glass Effect */}
            <div className="flex justify-center">
              <div className="glass-card-light rounded-3xl p-8 max-w-3xl w-full card-3d">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <div className="flex items-center">
                    <div className="flex -space-x-4 mr-5">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-14 h-14 rounded-full border-4 border-black bg-gradient-to-br from-gold-dark to-gold-light"></div>
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-white font-bold text-lg">Miles de transformaciones</p>
                    </div>
                  </div>

                  <div className="h-16 w-px bg-gradient-to-b from-transparent via-gold to-transparent hidden sm:block"></div>

                  <div className="flex items-center gap-4">
                    <Trophy className="w-10 h-10 text-gold" />
                    <div className="text-left">
                      <div className="text-white font-black text-2xl tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>IFBB PRO</div>
                      <div className="text-gray-300 text-sm font-medium">Coach Certificado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
