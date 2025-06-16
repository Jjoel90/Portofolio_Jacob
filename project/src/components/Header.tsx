import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Jacob MUYANU</h1>
            <p className="text-sm text-green-600 font-medium">Kinésithérapeute Sportif</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="nav-link">Accueil</button>
            <button onClick={() => scrollToSection('a-propos')} className="nav-link">À propos</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('temoignages')} className="nav-link">Témoignages</button>
            <button onClick={() => scrollToSection('galerie')} className="nav-link">Galerie</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+33123456789" className="flex items-center text-slate-600 hover:text-green-600 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">01 23 45 67 89</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-green-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('accueil')} className="nav-link-mobile">Accueil</button>
              <button onClick={() => scrollToSection('a-propos')} className="nav-link-mobile">À propos</button>
              <button onClick={() => scrollToSection('services')} className="nav-link-mobile">Services</button>
              <button onClick={() => scrollToSection('temoignages')} className="nav-link-mobile">Témoignages</button>
              <button onClick={() => scrollToSection('galerie')} className="nav-link-mobile">Galerie</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link-mobile">Contact</button>
              <div className="pt-4 border-t border-slate-200">
                <a href="tel:+33123456789" className="flex items-center text-slate-600 hover:text-green-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>01 23 45 67 89</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;