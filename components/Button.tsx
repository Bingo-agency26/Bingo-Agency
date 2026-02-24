import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-lg";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-700 shadow-blue-500/30",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    white: "bg-white text-brand-blue hover:bg-gray-100"
  };

  const widthClass = fullWidth ? "w-full" : "";

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};