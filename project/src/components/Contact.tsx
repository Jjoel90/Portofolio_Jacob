import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Linkedin, MessageCircle, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    message: '',
    appointmentType: 'consultation'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Prendre <span className="text-green-600">rendez-vous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contactez-moi pour une consultation personnalisée ou un suivi de performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Demande de rendez-vous</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="01 23 45 67 89"
                  />
                </div>
                <div>
                  <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-2">
                    Sport pratiqué
                  </label>
                  <input
                    type="text"
                    id="sport"
                    name="sport"
                    value={formData.sport}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Football, Basketball..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de consultation
                </label>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="consultation">Consultation initiale</option>
                  <option value="reeducation">Rééducation</option>
                  <option value="preparation">Préparation physique</option>
                  <option value="massage">Massage thérapeutique</option>
                  <option value="prevention">Prévention blessures</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez brièvement votre demande, vos objectifs ou votre problématique..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer la demande</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                    <a href="tel:+33123456789" className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Appeler maintenant
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">WhatsApp</h4>
                    <p className="text-gray-600">Consultation rapide</p>
                    <a href="https://wa.me/33123456789" className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Contacter sur WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-gray-600">jacob.muyanu@kinepro.fr</p>
                    <a href="mailto:jacob.muyanu@kinepro.fr" className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Envoyer un email
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Adresse</h4>
                    <p className="text-gray-600">123 Avenue des Sports<br />75016 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Horaires</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Lun - Ven: 8h00 - 19h00</p>
                      <p>Samedi: 9h00 - 15h00</p>
                      <p>Dimanche: Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Réseaux sociaux</h3>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <Instagram className="w-6 h-6 text-pink-600 group-hover:text-pink-700" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Instagram Pro</h4>
                    <p className="text-gray-600 text-sm">Suivez mes actualités et conseils</p>
                  </div>
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <Facebook className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Facebook</h4>
                    <p className="text-gray-600 text-sm">Page professionnelle et communauté</p>
                  </div>
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">TikTok</h4>
                    <p className="text-gray-600 text-sm">Conseils et exercices en vidéo</p>
                  </div>
                </a>

                <a href="#" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group">
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-slate-800">LinkedIn</h4>
                    <p className="text-gray-600 text-sm">Réseau professionnel et expertise</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;