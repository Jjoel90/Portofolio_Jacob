import React from 'react';
import { Activity, Shield, Zap, Users, Heart, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Rééducation post-blessure",
      description: "Accompagnement personnalisé pour un retour optimal à la pratique sportive après blessure.",
      features: ["Évaluation complète", "Plan de rééducation sur-mesure", "Suivi de progression"]
    },
    {
      icon: Zap,
      title: "Suivi et préparation physique",
      description: "Optimisation des performances et préparation spécifique aux exigences de chaque discipline.",
      features: ["Analyse biomécanique", "Renforcement ciblé", "Préparation pré-compétition"]
    },
    {
      icon: Heart,
      title: "Thérapies manuelles et massages",
      description: "Techniques manuelles spécialisées pour la récupération et la performance musculaire.",
      features: ["Massages thérapeutiques", "Mobilisations articulaires", "Techniques ostéopathiques"]
    },
    {
      icon: Shield,
      title: "Prévention des blessures",
      description: "Stratégies préventives pour maintenir l'intégrité physique des athlètes.",
      features: ["Screening fonctionnel", "Programmes préventifs", "Éducation gestuelle"]
    },
    {
      icon: Users,
      title: "Accompagnement d'équipes",
      description: "Suivi médical et préparation physique pour clubs et équipes professionnelles.",
      features: ["Suivi collectif", "Gestion des blessures", "Protocols de récupération"]
    },
    {
      icon: Target,
      title: "Coaching en compétition",
      description: "Présence et accompagnement lors des événements sportifs majeurs.",
      features: ["Assistance terrain", "Soins d'urgence", "Récupération immédiate"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Domaines d'<span className="text-green-600">intervention</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète au service de votre performance et de votre bien-être physique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-green-100 group-hover:bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Consultation personnalisée</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Chaque athlète est unique. Je propose des consultations sur-mesure pour répondre 
            précisément à vos besoins et objectifs sportifs.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;