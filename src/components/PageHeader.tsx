import React from 'react';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  isSticky?: boolean;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  children, 
  isSticky = false
}: PageHeaderProps) {
  
  let headerClasses = "mb-8";

  if (isSticky) {
    headerClasses = "py-6 bg-white shadow-md mb-6 sticky top-0 z-10";
  }

  return (
    <header className={headerClasses}>
     
      <div className={isSticky ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : ""}>
        
               
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-gray-600 text-center mt-1">
            {subtitle}
          </p>
        )}

        {children}

      </div>
    </header>
  );
}