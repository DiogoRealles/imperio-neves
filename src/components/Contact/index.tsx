import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Index = () => {
  return (
    <section id="contact" className="py-10 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-0">
        <header
          className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-start pb-20"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="300"
        >
          <h2 className="text-[40px] uppercase text-white font-title font-thin leading-[105%] mb-2">
            Contato
          </h2>
          <p className="font-body font-semibold text-white/65 text-[18px] w-full max-w-[500px]">
            Visite nossa loja ou converse conosco do conforto da sua casa.
          </p>
        </header>

        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-40">
          <div
            className="w-full h-[400px] md:h-auto overflow-hidden rounded-[16px]"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            <iframe
              className="border-none outline-none w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279.5888973438748!2d-46.73599832223751!3d-23.654599872230502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51dd03e19f63%3A0x1ee246a1dceda4c1!2sImp%C3%A9rio%20neves%20trajes%20masculinos!5e0!3m2!1sen!2sbr!4v1713481345563!5m2!1sen!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Império Neves - Trajes a rigor"
            ></iframe>
          </div>

          <div className="flex flex-col text-center justify-center gap-10">
            <div
              className="flex flex-col"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <h3 className="mb-2 text-[24px] text-white font-title font-semibold">
                Endereço
              </h3>
              <p className="text-white/65 font-body font-normal text-base text-center mb-2">
                Av. Maria Coelho Aguiar, 1204 - Jd São Luiz / São Paulo - SP
              </p>
              <p className="text-white/65 font-body font-normal text-base text-center mb-2">
                CEP: 05805-000
              </p>
            </div>

            <div
              className="flex flex-col"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <h3 className="mb-2 text-[24px] text-white font-title font-semibold">
                Horário de atendimento
              </h3>
              <p className="text-white/65 font-body font-normal text-base text-center mb-2">
                Segunda a Sexta: 10h - 19h
              </p>
              <p className="text-white/65 font-body font-normal text-base text-center mb-2">
                Sábado: 10h - 18h
              </p>
            </div>

            <div
              className="flex flex-col"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <h3 className="mb-2 text-[24px] text-white font-title font-semibold">
                Telefones / Email
              </h3>
              <p className="text-white/65 font-body font-normal text-base text-center mb-2">
                (11) 9 8790-9927
              </p>

              <a
                href="mailto:imperionevess@gmail.com"
                className="text-white/65 text-base text-center mb-10 inline-block"
              >
                imperionevess@gmail.com
              </a>

              <Link
                href="https://api.whatsapp.com/send/?phone=5511987909927&text=Ola%21+Vim+pelo+site%2C+gostaria+de+agendar+uma+prova.&type=phone_number&app_absent=0"
                className="text-[18px] text-black font-normal border-black bg-green-500 py-3 px-5 inline-flex mx-auto md:mx-0  w-fit md:w-full ease-linear rounded-[6px] hover:bg-white/80 group text-center justify-center items-center gap-2 transition-all"
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
        </div>
      </div>
    </section>
  );
};

export default Index;
