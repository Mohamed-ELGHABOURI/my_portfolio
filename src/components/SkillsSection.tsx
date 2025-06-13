
import React from 'react';
import { Code, Database, Server, Smartphone, Brain, Shield } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Laravel", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "PHP", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 75 },
        { name: "C#/.NET", level: 70 }
      ]
    },
    {
      title: "Bases de Données",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQL Server", level: 80 },
        { name: "Oracle", level: 70 }
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Flutter", level: 85 },
        { name: "Dart", level: 85 },
        { name: "REST API", level: 80 },
        { name: "Firebase", level: 70 }
      ]
    },
    {
      title: "IA & Machine Learning",
      icon: Brain,
      color: "from-tech-primary to-tech-purple",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "Keras", level: 80 },
        { name: "CNN/RNN", level: 75 },
        { name: "Python ML", level: 80 },
        { name: "NLP", level: 70 }
      ]
    },
    {
      title: "DevOps & Système",
      icon: Shield,
      color: "from-gray-500 to-slate-600",
      skills: [
        { name: "Linux", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "Windows Server", level: 75 }
      ]
    }
  ];

  const methodologies = [
    "Scrum", "DSDM", "UML", "Merise", "Agile", "Design Patterns"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-tech-darker to-tech-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-purple mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Une expertise technique polyvalente couvrant l'ensemble de la stack de développement moderne
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="tech-card glow-effect group animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-tech-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-tech-primary text-sm font-medium">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Méthodologies & <span className="gradient-text">Pratiques</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {methodologies.map((methodology, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full border border-slate-600 hover:border-tech-primary hover:from-tech-primary/10 hover:to-tech-purple/10 transition-all duration-300 group"
              >
                <span className="text-slate-300 group-hover:text-white font-medium">
                  {methodology}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "15+", label: "Technologies", icon: "⚡" },
            { number: "6", label: "Domaines", icon: "🎯" },
            { number: "3+", label: "Années Pratique", icon: "📈" },
            { number: "100%", label: "Passion", icon: "❤️" }
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

export default SkillsSection;
