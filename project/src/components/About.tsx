import React from 'react';
import { GraduationCap, Award, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7298825/pexels-photo-7298825.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Jacob MUYANU en consultation"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">8+ ans</div>
              <div className="text-sm opacity-90">d'expérience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              À propos de <span className="text-green-600">Jacob MUYANU</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Diplômé en kinésithérapie et rééducation fonctionnelle, je me suis spécialisé dans 
              l'accompagnement des athlètes de haut niveau. Ma passion pour le sport et ma précision 
              clinique me permettent d'offrir un suivi personnalisé à chaque sportif.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Formation</h3>
                  <p className="text-gray-600 text-sm">Diplôme d'État en kinésithérapie et rééducation fonctionnelle</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Expertise</h3>
                  <p className="text-gray-600 text-sm">Spécialisation en médecine sportive et performance athlétique</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Passion</h3>
                  <p className="text-gray-600 text-sm">Dévouement au bien-être corporel et à l'excellence sportive</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Approche</h3>
                  <p className="text-gray-600 text-sm">Méthodes personnalisées et techniques innovantes</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-semibold text-slate-800 mb-3">Sports d'expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Football', 'Basketball', 'MMA', 'Boxe', 'Judo', 'Tennis', 'Athlétisme', 'Rugby'].map((sport) => (
                  <span key={sport} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;