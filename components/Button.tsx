import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  href?: string;
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  href,
  icon: Icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-lg";
  
  const variants = {
    primary: "bg-[#FF4500] text-white hover:bg-[#E63E00] shadow-[#FF4500]/30",
    outline: "border-2 border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white",
    white: "bg-white text-[#FF4500] hover:bg-[#EFEEEE]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      {children}
      {Icon && <Icon size={20} />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};