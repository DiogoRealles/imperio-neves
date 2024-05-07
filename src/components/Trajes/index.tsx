import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Index = () => {
  return (
    <section id="trajes" className="pt-10 md:pt-20">
      <div className="container mx-auto px-4 md:px-0">
        <header
          className="pb-20"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="300"
        >
          <h2 className="text-[40px] uppercase text-white font-title font-thin leading-[105%] mb-2 text-center">
            Tipos de traje
          </h2>
          <p className="text-white/75 text-[18px] text-center font-body font-normal">
            Veja nossas sugestões de roupas para eventos e festas
          </p>
        </header>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-5"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <div className="cursor-pointe border border-black hover:border-white/50 rounded-[16px] relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product01 p-10 text-center w-full h-[320px]">
            <div className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[32px] text-white font-title font-semibold text-center">
              Roupas para noivo
            </div>
          </div>
          <div className="cursor-pointe border border-black hover:border-white/50 rounded-[16px] relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product02 p-10 text-center w-full h-[320px]">
            <div className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[32px] text-white font-title font-semibold text-center">
              Roupas para padrinhos
            </div>
          </div>
          <div className="cursor-pointe border border-black hover:border-white/50 rounded-[16px] relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product03 p-10 text-center w-full h-[320px]">
            <div className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[32px] text-white font-title font-semibold text-center">
              Roupas para pagem
            </div>
          </div>
          <div className="cursor-pointe border border-black hover:border-white/50 rounded-[16px] relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product04 p-10 text-center w-full h-[320px]">
            <div className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[32px] text-white font-title font-semibold text-center">
              Roupas para formandos
            </div>
          </div>
          <div className="cursor-pointe border border-black hover:border-white/50 rounded-[16px] relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product05 p-10 text-center w-full h-[320px]">
            <div className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[32px] text-white font-title font-semibold text-center">
              Roupas para festas
            </div>
          </div>
          <div className="cursor-pointe border border-black hover:border-white/50 rounded-[16px] relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product06 p-10 text-center w-full h-[320px]">
            <div className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[32px] text-white font-title font-semibold text-center">
              Roupas para reuniões
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <Link
            href="https://api.whatsapp.com/send/?phone=5511987909927&text=Ola%21+Vim+pelo+site%2C+gostaria+de+agendar+uma+prova.&type=phone_number&app_absent=0"
            className=" text-[18px] text-black font-normal border-black bg-white py-3 px-5 inline-flex mx-auto md:mx-0 w-fit ease-linear rounded-[6px] hover:bg-white/80 group text-center justify-center items-center gap-2 transition-all whitespace-nowrap"
            target=" _blank"
            title="Chamar no Whatsapp"
          >
            <span className="whitespace-nowrap">Chame no Whats</span>
            <FaWhatsapp
              className=" group-hover:translate-x-2 transition-all ease-linear"
              size={28}
            />{' '}
          </Link>
        </div>
      </div>

      <div
        className="bg-testimonials bg-center h-[300px] md:h-[550px] overflow-hidden bg-cover bg-no-repeat mt-20"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="300"
      ></div>
    </section>
  );
};

export default Index;
