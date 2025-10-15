import React, { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode; 
  className?: string; 
}

export default function PageSection({ children, className = '' }: PageSectionProps) {
  const baseClasses = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const finalClasses = `${baseClasses} ${className}`;

  return (
    <section className={finalClasses}>
      {children}
    </section>
  );
}