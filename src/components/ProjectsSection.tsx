
import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Monitor, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "KooraZone",
      type: "mobile",
      description: "Application mobile complète pour la gestion et réservation de terrains sportifs avec système de paiement intégré",
      technologies: ["Flutter", "Laravel", "REST API", "MySQL", "UML"],
      features: [
        "Géolocalisation des terrains",
        "Système de réservation en temps réel", 
        "Paiement sécurisé intégré",
        "Gestion des utilisateurs et propriétaires",
        "Notifications push"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      category: "Mobile App",
      status: "Terminé",
      icon: Smartphone
    },
    {
      title: "Eventure Blog",
      type: "web",
      description: "Plateforme web moderne de gestion d'événements avec interface utilisateur responsive et système d'administration",
      technologies: ["Java", "Spring Boot", "Thymeleaf", "TailwindCSS", "MySQL"],
      features: [
        "Création et gestion d'événements",
        "Système d'inscription utilisateur",
        "Interface d'administration",
        "Design responsive moderne",
        "Recherche et filtres avancés"
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      category: "Web App",
      status: "Terminé",
      icon: Globe
    },
    {
      title: "E-recrute",
      type: "desktop",
      description: "Application desktop sophistiquée pour la gestion complète des processus de recrutement en entreprise",
      technologies: ["Java", "JavaFX", "FXML", "CSS", "MySQL"],
      features: [
        "Gestion des candidatures",
        "Planification d'entretiens",
        "Suivi des processus de recrutement",
        "Génération de rapports",
        "Interface moderne JavaFX"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      category: "Desktop App",
      status: "Terminé",
      icon: Monitor
    },
    {
      title: "E-Boutique",
      type: "web",
      description: "Solution e-commerce complète avec gestion des produits, commandes et système d'administration intégré",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      features: [
        "Catalogue produits dynamique",
        "Panier et gestion commandes",
        "Système de paiement",
        "Panel d'administration",
        "Gestion des stocks"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "E-commerce",
      status: "Terminé",
      icon: ShoppingCart
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' },
    { id: 'desktop', label: 'Desktop' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 bg-tech-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Mes Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-purple mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Une sélection de projets qui démontrent ma polyvalence et mon expertise 
            dans différentes technologies et domaines
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-tech-primary to-tech-purple text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="tech-card glow-effect group animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <project.icon size={16} className="text-tech-primary" />
                  <span className="text-white text-sm font-medium">{project.category}</span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tech-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Fonctionnalités clés :</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-slate-400 text-xs">
                        <div className="w-1 h-1 bg-tech-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Technologies :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-800 text-tech-primary text-xs rounded border border-slate-700 hover:border-tech-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-black transition-all duration-300"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Démo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-300"
                  >
                    <Github size={14} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "4+", label: "Projets Terminés" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Taux de Réussite" },
            { number: "3", label: "Domaines" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 tech-card group">
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

export default ProjectsSection;
