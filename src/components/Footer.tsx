
import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-tech-darker border-t border-slate-200 dark:border-slate-800/50 py-8 transition-colors duration-300 relative z-10">
      <div className="container-custom">
        <div className="text-center space-y-4">
          {/* Main Footer Text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
            <span>Développé avec</span>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <Code className="w-4 h-4 text-tech-primary" />
              <Coffee className="w-4 h-4 text-orange-500" />
            </div>
            <span>par Mohamed ELGHABOURI</span>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} Mohamed ELGHABOURI. Tous droits réservés.
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500 dark:text-slate-500">
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded transition-colors duration-300">React</span>
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded transition-colors duration-300">TypeScript</span>
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded transition-colors duration-300">Tailwind CSS</span>
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded transition-colors duration-300">Vite</span>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/50">
            <blockquote className="text-slate-600 dark:text-slate-400 italic text-sm">
              "Le code est de la poésie écrite dans un langage logique"
            </blockquote>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
