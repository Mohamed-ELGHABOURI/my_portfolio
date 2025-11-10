
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Cycle d'Ingénieur Génie Informatique",
      institution: "FST Settat",
      location: "Settat, Maroc",
      period: "2023 - Présent",
      status: "En cours",
      description: "Spécialisation en développement et qualité logiciel, IA et Cloud",
      color: "from-tech-primary to-tech-purple"
    },
    {
      degree: "DUT Génie Informatique",
      institution: "EST Safi",
      location: "Safi, Maroc", 
      period: "2021 - 2023",
      status: "Diplômé",
      description: "Administration systèmes et réseaux • Mention Trés Bien",
      color: "from-blue-500 to-purple-500"
    },
    {
      degree: "Baccalauréat Sciences Mathématiques B",
      institution: "Lycée Hassan 2",
      location: "Oulad Teima, Maroc",
      period: "2021",
      status: "Diplômé",
      description: "Option Sciences Mathématiques • Mention Bien",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-tech-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Formation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-purple mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Un parcours académique solide en génie informatique avec une spécialisation 
            en technologies émergentes
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-tech-primary via-tech-purple to-tech-primary"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-tech-primary to-tech-purple rounded-full border-4 border-background z-10 animate-pulse"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="tech-card glow-effect group animate-slideInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-primary transition-colors">
                          {item.degree}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-tech-primary font-medium mb-1">
                          <GraduationCap size={16} />
                          <span>{item.institution}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar size={14} />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === 'En cours' 
                          ? 'bg-tech-primary/20 text-tech-primary border border-tech-primary/30' 
                          : 'bg-green-500/20 text-green-400 border border-green-500/30'
                      }`}>
                        {item.status}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Gradient Bar */}
                    <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-tech-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 tech-card">
            <div className="text-3xl font-bold gradient-text mb-2">5</div>
            <div className="text-slate-300">Années d'Études Supérieures</div>
          </div>
          
          <div className="text-center p-6 tech-card">
            <div className="text-3xl font-bold gradient-text mb-2">85%</div>
            <div className="text-slate-300">Moyenne Académique</div>
          </div>
          
          <div className="text-center p-6 tech-card">
            <div className="text-3xl font-bold gradient-text mb-2">8</div>
            <div className="text-slate-300">Certifications Professionnelles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
