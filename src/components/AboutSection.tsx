
import React from 'react';
import { Code, Brain, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Brain,
      title: "Curiosité",
      description: "Toujours en quête de nouvelles technologies et méthodologies"
    },
    {
      icon: Target,
      title: "Autonomie", 
      description: "Capable de mener des projets de bout en bout avec initiative"
    },
    {
      icon: Heart,
      title: "Motivation",
      description: "Passion sincère pour le développement et l'innovation tech"
    },
    {
      icon: Code,
      title: "Excellence",
      description: "Engagement constant vers la qualité et les bonnes pratiques"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-tech-darker to-tech-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">À Propos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-purple mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-tech-primary to-tech-purple rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-white mb-4">Mon Histoire</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Je suis étudiant en dernière année du cycle ingénieur en Génie Logiciel,
                    spécialisé en conception et développement logiciel. Mon parcours est
                    soutenu par plusieurs certifications qui attestent de mon intérêt et de
                    ma pratique en Intelligence Artificielle et Cloud.
                  </p>

                  <p>
                    J'ai développé des applications desktop, web et mobiles, ainsi que des
                    solutions IA de bout en bout — de la conception d'architecture à la mise
                    en production.
                  </p>

                  <p>
                    Actuellement à la recherche d'un stage PFE, je souhaite rejoindre une
                    équipe technique pour contribuer à un projet ambitieux. J'apporte
                    rigueur, autonomie et une forte capacité d'apprentissage ; 
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-tech-primary/10 to-tech-purple/10 rounded-xl p-6 border border-tech-primary/20">
              <h4 className="text-xl font-semibold text-white mb-2">Étudiant Ingénieur</h4>
              <p className="text-tech-primary font-medium">5ème année FST Settat</p>
              <p className="text-slate-300 mt-2">Génie Logiciel • Spécialisation Développement full-stack</p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slideInRight">
            {values.map((value, index) => (
              <div key={index} className="tech-card glow-effect group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-tech-primary to-tech-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
           
            { number: "10+", label: "Projets Réalisés" },
            { number: "5+", label: "Technologies Maîtrisées" },
            { number: "8", label: "Certifications" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
