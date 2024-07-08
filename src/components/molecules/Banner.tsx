import Image from "next/image";
import BaseButton from "../atoms/BaseButton";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-12rem)] center-col md:mt-0 gap-8">
      <Image src="/images/LoboBlanco.svg" alt="logo" width={152} height={172} />
      <div className="center-col">
        <span className="lg:text-title text-subtitle">Club de</span>
        <h1 className="lg:text-headline text-bigTitle font-bold">Software</h1>
        <h2 className="lg:text-subtitle text-small">
          Universidad de las Fuerzas Armadas ESPE
        </h2>
      </div>
      <div className="center lg:flex-row flex-col gap-14 z-10">
        <BaseButton text="Aplicar" />
        <BaseButton text="Conocer a los miembros" />
      </div>
      <p className="text-[#585353]">¿Ya formas parte del club? <strong className="text-white">Ingresa aqui</strong></p>
    </div>
  );
};

export default Banner;
