
import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Stage AI & Cyber-Security",
      company: "3D Smart Factory",
      location: "Casablanca, Maroc",
      period: "Juillet - Août 2024",
      type: "Stage",
      description: "Développement d'un modèle CNN pour la détection de malwares avec une précision de 86%",
      technologies: ["Python", "TensorFlow", "Keras", "Kaggle", "Deep Learning"],
      achievements: [
        "Conception et entraînement d'un modèle CNN avec 86% de précision",
        "Analyse de datasets de malwares complexes",
        "Optimisation des performances du modèle",
        "Documentation technique complète"
      ],
      badge: "Deep Learning",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Développeur Application MedCab",
      company: "Cabinet Médical",
      location: "Settat, Maroc", 
      period: "Avril - Mai 2023",
      type: "Stage",
      description: "Développement d'une application desktop distribuée pour la gestion médicale",
      technologies: ["C#", ".NET Framework", "WPF", "SQL Server"],
      achievements: [
        "Architecture distribuée robuste",
        "Interface utilisateur intuitive",
        "Gestion sécurisée des données médicales",
        "Tests et déploiement réussis"
      ],
      badge: "Desktop Development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Développeur Web",
      company: "Coopérative DIAF",
      location: "Oulad Teima, Maroc",
      period: "Juillet 2022",
      type: "Stage",
      description: "Création d'un site intranet pour la gestion de stock et l'administration",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      achievements: [
        "Système de gestion de stock complet",
        "Interface d'administration",
        "Base de données optimisée",
        "Formation des utilisateurs"
      ],
      badge: "Web Development",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-tech-dark to-tech-darker">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Expériences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-purple mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Des stages enrichissants qui m'ont permis d'acquérir une expérience pratique 
            dans différents domaines du développement
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="tech-card glow-effect group">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Company Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-primary transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-tech-primary font-medium mb-2">
                        <div className="w-2 h-2 bg-tech-primary rounded-full"></div>
                        <span>{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>

                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        <Award size={12} />
                        {exp.badge}
                      </div>
                    </div>
                  </div>

                  {/* Center Column - Description & Achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="flex items-center gap-2 text-white font-medium mb-3">
                        <TrendingUp size={16} className="text-tech-primary" />
                        Réalisations clés
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-tech-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-slate-800 text-tech-primary text-xs rounded-full border border-slate-700 hover:border-tech-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "3", label: "Stages Réalisés", icon: "🎯" },
            { number: "86%", label: "Précision IA", icon: "🧠" },
            { number: "15+", label: "Technologies", icon: "⚡" },
            { number: "100%", label: "Projets Livrés", icon: "✅" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 tech-card group">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
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

export default ExperienceSection;
