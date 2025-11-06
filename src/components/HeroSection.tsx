
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
<section className="relative min-h-screen flex items-center justify-center overflow-hidden code-bg pt-20">
  {/* Background Image with Low Opacity */}
  <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("./est.png")', backgroundRepeat: 'repeat', opacity: 0.30 }}>
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Animated Particles */}
  <div className="absolute inset-0 z-5">
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
  <div className="container mx-auto px-6 relative z-10 max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      
      {/* Left Side - Profile Image */}
      <div className="flex justify-center lg:justify-center">
        <div className="relative">
          <img
            src="./assets/me.jpg"
            alt="Mohamed ELGHABOURI - Profile Picture"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-r from-tech-primary to-tech-purple p-2 animate-glow shadow-2xl object-cover"
          />
          {/* Decorative elements around image */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-primary rounded-full animate-pulse opacity-60"></div>
          <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-tech-purple rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-1/2 -left-8 w-4 h-4 bg-tech-primary rounded-full animate-bounce opacity-50"></div>
        </div>
      </div>

      {/* Right Side - Description */}
      <div className="space-y-8 text-center lg:text-left">
        {/* Name and Title */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="gradient-text block">Mohamed</span>
            <span className="text-white block">ELGHABOURI</span>
          </h1>
          
          {/* Animated Role */}
          <div className="h-16 flex items-center justify-center lg:justify-start">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-tech-primary font-code">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl lg:max-w-none leading-relaxed">
            Étudiant Ingénieur passionné par le développement Full-Stack, 
            spécialisé en IA et Cybersécurité
          </p>

          {/* Location */}
         
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-tech-primary to-tech-purple hover:from-tech-purple hover:to-tech-primary text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-effect text-lg font-semibold"
          >
            Découvrir mes projets
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-2 border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-black px-8 py-4 rounded-full transition-all duration-300 text-lg font-semibold"
          >
            Me contacter
          </Button>
        </div>

        {/* Contact Info */}
       
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ArrowDown className="w-6 h-6 text-tech-primary" />
  </div>
</section>
  );
};

export default HeroSection;
