
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-up' 
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const animationClass = {
    'fade-up': 'fade-in-up',
    'fade-left': 'fade-in-left', 
    'fade-right': 'fade-in-right'
  }[animation];

  return (
    <section 
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'} transition-all duration-300`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
