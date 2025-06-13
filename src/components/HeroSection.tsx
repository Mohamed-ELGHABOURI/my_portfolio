
import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Développeur Full-Stack';
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
        setDisplayText('');
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden code-bg">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-tech-primary to-tech-purple p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text">
                ME
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Mohamed</span>
              <br />
              <span className="text-white">ELGHABOURI</span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-tech-primary font-code">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Étudiant Ingénieur passionné par le développement Full-Stack, 
              spécialisé en IA et Cybersécurité
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-400">
              <div className="w-2 h-2 bg-tech-primary rounded-full animate-pulse"></div>
              <span>Settat, Maroc</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-tech-primary to-tech-purple hover:from-tech-purple hover:to-tech-primary text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              Découvrir mes projets
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-black px-8 py-3 rounded-full transition-all duration-300"
            >
              Me contacter
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-400">
            <a 
              href="mailto:elghabouri.moh.fst@uhp.ac.ma"
              className="flex items-center gap-2 hover:text-tech-primary transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">elghabouri.moh.fst@uhp.ac.ma</span>
            </a>
            <a 
              href="tel:0659773403"
              className="flex items-center gap-2 hover:text-tech-primary transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">0659773403</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-tech-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
