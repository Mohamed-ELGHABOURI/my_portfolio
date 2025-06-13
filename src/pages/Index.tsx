
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
        <AnimatedBackground />
        <Navigation />
        
        <main className="relative z-10">
          <div id="hero">
            <HeroSection />
          </div>
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="education">
            <EducationSection />
          </div>
          
          <div id="experience">
            <ExperienceSection />
          </div>
          
          <div id="projects">
            <ProjectsSection />
          </div>
          
          <div id="skills">
            <SkillsSection />
          </div>
          
          <div id="certifications">
            <CertificationsSection />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
