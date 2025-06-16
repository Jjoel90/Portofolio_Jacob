import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Footballeur professionnel",
      team: "FC Barcelona",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: "Jacob m'a accompagné après ma blessure au genou. Grâce à son expertise et son approche personnalisée, j'ai pu revenir au plus haut niveau en un temps record.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Entraîneuse",
      team: "Équipe nationale de basketball",
      image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: "Le travail de Jacob avec notre équipe est exceptionnel. Sa capacité à prévenir les blessures et optimiser la récupération de nos joueuses fait la différence.",
      rating: 5
    },
    {
      name: "Antoine Rodriguez",
      role: "Fighter MMA",
      team: "UFC",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: "Jacob comprend les exigences du MMA. Son approche holistique m'a permis d'améliorer ma condition physique et ma résistance aux blessures.",
      rating: 5
    },
    {
      name: "Claire Martin",
      role: "Judoka",
      team: "Équipe de France",
      image: "https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: "Un professionnel d'exception ! Jacob a su adapter son traitement à mes besoins spécifiques en judo. Je recommande vivement ses services.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Directeur sportif",
      team: "Racing Club Paris",
      image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: "Jacob fait partie intégrante de notre staff médical. Son professionnalisme et ses résultats parlent d'eux-mêmes. Un atout majeur pour notre club.",
      rating: 5
    },
    {
      name: "Elena Kozlov",
      role: "Boxeuse professionnelle",
      team: "Championne du monde WBA",
      image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      text: "Jacob m'a aidée à atteindre le sommet de ma carrière. Sa compréhension des sports de combat et son expertise technique sont remarquables.",
      rating: 5
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Ce que disent mes <span className="text-green-600">athlètes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confiance de sportifs de haut niveau et d'équipes professionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{testimonial.name}</h3>
                  <p className="text-green-600 font-medium text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.team}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-green-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
            <div className="flex -space-x-2 mr-4">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-800">500+ athlètes satisfaits</div>
              <div className="text-xs text-gray-600">Rejoignez-les aujourd'hui</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;