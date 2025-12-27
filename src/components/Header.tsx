import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-card-light backdrop-blur-2xl border-b border-gold/30 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="bg-gold p-3 rounded-xl group-hover:bg-gold-light transition-all duration-300 group-hover:scale-110 shimmer flex items-center justify-center">
              <img src="/boost_favicon.png" alt="Boost" className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-black gradient-text tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                BOOST
              </div>
              <div className="text-[10px] text-gold font-bold tracking-widest">
                SERGI CONSTANCE
              </div>
            </div>
          </a>

          {/* CTA */}
          <a
            href="#pricing"
            className="btn-gold-premium px-8 py-3 rounded-xl text-sm tracking-wider font-black"
          >
            <span className="hidden sm:inline">EMPEZAR AHORA</span>
            <span className="sm:hidden">EMPEZAR</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
