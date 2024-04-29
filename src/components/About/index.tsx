import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Index = () => {
  return (
    <section id="about" className="overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-center md:gap-20">
        <div
          className="w-[250px] md:w-[450px] h-[250px] md:h-[750px] mx-auto bg-about bg-top bg-no-repeat bg-cover rounded-full md:rounded-ss-full md:rounded-se-full md:rounded-es-full md:rounded-ee-full"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="500"
        ></div>

        <div
          className="flex flex-1 flex-col pb-10"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <h2 className="text-[40px] uppercase font-title font-thin pt-10 mb-5 text-center md:text-left">
            Adriana Neves
          </h2>
          <p className="mb-6 text-lg font-body font-normal text-[14px] text-white/80 text-center md:text-left">
            Fundadora e líder, é mais do que uma empreendedora. Ela é uma mãe
            dedicada, uma líder empática e uma mulher incrivelmente resiliente.
            Há mais de 6 anos, Adriana lidera e inspira outras mulheres, e seu
            espírito forte é o alicerce da nossa marca. Como cristã, ela
            acredita que a verdadeira essência está no Criador de nossas vidas.
          </p>
          <p className="mb-6 text-lg font-body font-normal text-[14px] text-white/80 text-center md:text-left">
            A Império Neves nasceu de um desejo profundo: inspirar e ajudar as
            pessoas a comunicarem-se com confiança através de suas roupas. A
            roupa que você escolhe comunica muito sobre quem você é e onde
            deseja chegar. Nossa missão é proporcionar uma experiência segura
            para que você viva seus momentos especiais com tranquilidade e
            confiança.
          </p>
          <p className="mb-6 text-lg font-body font-normal text-[14px] text-white/80 text-center md:text-left">
            A voz da Império Neves é a do homem poderoso, próspero, sábio e
            forte que existe dentro de cada um, somos uma empresa que visa a
            manifestação da real identidade masculina a partir do parâmetro
            original da criação de Deus. Adriana Neves, junto com a Império
            Neves, está aqui para ajudá-lo a mostrar ao mundo a sua confiança e
            autenticidade.
          </p>
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
    </section>
  );
};

export default Index;
