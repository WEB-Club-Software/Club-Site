'use client'
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  href?: string;
}

const BaseButton = ({ text, className, href, ...buttonProps }: Props) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(href){
      e.preventDefault();
      window.open(href, '_blank'); // Abre un enlace en una nueva pestaña
    }
    if(buttonProps.onClick){
      buttonProps.onClick(e); // Maneja alguna accion del boton en caso de hacer click 
    }
  }

  return (
    <button
      {...buttonProps}
      onClick={handleClick}
      className={`block border-2 border-white px-8 py-3 hover:bg-white hover:text-gray hover:font-bold hover:shadow-blur transition-all ease-in-out rounded-xl disabled:opacity-20 disabled:pointer-events-none ${className}`}
    >
      {text}
    </button>
  );
};

export default BaseButton;
