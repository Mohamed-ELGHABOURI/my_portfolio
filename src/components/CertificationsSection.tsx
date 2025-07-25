
import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      issuer: "Oracle",
      date: "2025",
      type: "Database",
      description: "Certification sur l’IA générative, l’utilisation des services OCI AI et le déploiement de modèles sur Oracle Cloud",
      skills: ["Oracle Database", "SQL", "PL/SQL", "Database Design"],
      badge: "https://images.unsplash.com/photo-1606125682067-21ab7e6b4651?w=100&h=100&fit=crop",
      verified: true,
      color: "from-red-600 to-orange-600"
    },
    {
  title: "AI Agents and No/Low-Code Automation",
  issuer: "AHDigital Automation",
  date: "2025",
  type: "Automation & AI",
  description: "Certification sur la création d'agents IA et l’automatisation de processus métier avec des outils no/low-code comme Make, n8n et LangChain",
  skills: ["AI Agents", "No-Code", "Make", "n8n", "LangChain", "API Integration"],
  badge: "https://images.unsplash.com/photo-1581091012184-5c8c6c2baf99?w=100&h=100&fit=crop",
  verified: true,
  color: "from-purple-600 to-indigo-600"
}, {
      title: "Infrastructure Cloud Oracle 2024",
      issuer: "Oracle",
      date: "2024",
      type: "Cloud",
      description: "Certification sur l'infrastructure cloud Oracle, services cloud et déploiement d'applications",
      skills: ["Oracle Cloud", "Cloud Infrastructure", "DevOps", "Microservices"],
      badge: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop",
      verified: true,
      color: "from-green-600 to-teal-600"
    }
,
    {
      title: "CCNA V7 - Network Fundamentals",
      issuer: "Cisco",
      date: "2023",
      type: "Networking",
      description: "Certification réseau Cisco couvrant les fondamentaux des réseaux, routing, switching et sécurité",
      skills: ["Networking", "Routing", "Switching", "Network Security"],
      badge: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      verified: true,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Certificat Cryptage",
      issuer: "ISOC (Internet Society)",
      date: "2023",
      type: "Security",
      description: "Formation spécialisée en cryptographie et sécurité des communications numériques",
      skills: ["Cryptography", "Digital Security", "Encryption", "PKI"],
      badge: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=100&h=100&fit=crop",
      verified: true,
      color: "from-purple-600 to-pink-600"
    }
   
  ];

  return (
    <section id="certifications" className="py-20 bg-tech-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-purple mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Des certifications reconnues qui valident mon expertise technique dans 
            différents domaines technologiques
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="tech-card glow-effect group animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Certificate Badge */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}>
                    <Award className="w-10 h-10 text-white" />
                    {cert.verified && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-tech-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-slate-400" />
                        <span className="text-slate-400 text-sm">{cert.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-tech-primary font-medium">{cert.issuer}</span>
                      <span className="text-slate-500">•</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${cert.color} bg-opacity-20 text-white border border-opacity-30`}>
                        {cert.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Compétences validées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-slate-800 text-tech-primary text-xs rounded border border-slate-700 hover:border-tech-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verify Button */}
                  <div className="pt-2">
                    <button className="flex items-center gap-2 text-tech-primary hover:text-white transition-colors text-sm">
                      <ExternalLink size={14} />
                      <span>Vérifier la certification</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "4", label: "Certifications", icon: "🏆" },
            { number: "3", label: "Organismes", icon: "🏢" },
            { number: "2024", label: "Dernière Cert.", icon: "📅" },
            { number: "100%", label: "Vérifiées", icon: "✅" }
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

        {/* Next Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Prochaines <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "AWS Solutions Architect", status: "En cours", progress: 75 },
              { name: "Google Cloud Engineer", status: "Planifiée", progress: 25 },
              { name: "Kubernetes Administrator", status: "Objectif 2025", progress: 10 }
            ].map((future, index) => (
              <div key={index} className="tech-card">
                <h4 className="text-white font-medium mb-2">{future.name}</h4>
                <p className="text-slate-400 text-sm mb-3">{future.status}</p>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-tech-primary to-tech-purple rounded-full transition-all duration-1000"
                    style={{ width: `${future.progress}%` }}
                  ></div>
                </div>
                <p className="text-tech-primary text-xs mt-2">{future.progress}% complété</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
