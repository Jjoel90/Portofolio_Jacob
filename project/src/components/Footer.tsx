import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Heart, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Jacob MUYANU</h3>
              <p className="text-green-400 font-medium mb-4">Kinésithérapeute Sportif Professionnel</p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Diplômé en kinésithérapie et rééducation fonctionnelle, spécialisé dans l'accompagnement 
                des athlètes de haut niveau pour optimiser leurs performances et leur récupération.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-black hover:bg-gray-800 p-3 rounded-lg transition-colors">
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('a-propos')} className="text-gray-300 hover:text-green-400 transition-colors">
                  À propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('temoignages')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Témoignages
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('galerie')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Galerie
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-green-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:jacob.muyanu@kinepro.fr" className="text-gray-300 hover:text-green-400 transition-colors">
                  jacob.muyanu@kinepro.fr
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <div className="text-gray-300">
                  <p>123 Avenue des Sports</p>
                  <p>75016 Paris, France</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <p>&copy; 2025 Jjoel. Tous droits réservés.</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;