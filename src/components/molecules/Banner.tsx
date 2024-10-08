import Image from "next/image";
import BaseButton from "../atoms/BaseButton";

const URL_APPLY_NEW_MEMBERS = 'https://forms.gle/ufKn9RsW6Vshgzqo7'

const Banner = () => {

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-14 p-12"  style={{ 
      backgroundImage: "url('/images/fondomain.svg')", 
      backgroundSize: 'cover',
      backgroundPosition: 'left', 
      backgroundRepeat: 'no-repeat' 
    } }>
      <div className="flex flex-col items-center md:items-start md:w-1/2 p-10 pr-50">
        <div className="start-col mb-32 ">
          <span className="lg:text-title text-subtitle font-bold font-bebas">CLUB DE</span>
          <h1 className="lg:text-headline text-bigTitle font-bold text-shadow-cyan-line">SOFTWARE</h1>
          <h2 className="lg:text-subtitle text-small">
            Universidad de las Fuerzas Armadas ESPE
          </h2>
        </div>
        <div className="center lg:flex-row flex-col gap-12 z-10 p-3  w-full">
          <BaseButton text="Aplicar" href={URL_APPLY_NEW_MEMBERS}  />
          <BaseButton text="Conocer a los miembros" className="w-3/4"/>
        </div>
        {/* <p className="text-[#585353] mt-4">
          ¿Ya formas parte del club? <strong className="text-white"><a href="#">Ingresa aqui</a></strong>
        </p> */}
      </div>
      <div className="flex justify-center md:justify-end md:w-1/2">
        <Image src="/images/LoboBlanco.svg" alt="logo" width={442} height={500} />
      </div>
    </div>
  );
};

export default Banner;
