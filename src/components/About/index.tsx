import Link from 'next/link';

const Index = () => {
  return (
    <section id="about" className="">
      <div className="container mx-auto flex flex-col md:justify-center md:flex-row px-3 md:gap-20">
        <div className="w-full md:max-w-[450px] h-[450px] md:h-[750px] bg-about bg-top bg-no-repeat bg-cover"></div>
        <div className="w-full max-w-[500px] flex flex-col pb-10">
          <h2 className="text-[40px] uppercase font-bold font-serif pt-10 mb-5 text-center md:text-left">
            Adriana Neves
          </h2>
          <p className="mb-6 text-lg font-thin text-white text-center md:text-left">
            Fundadora e líder, é mais do que uma empreendedora. Ela é uma mãe
            dedicada, uma líder empática e uma mulher incrivelmente resiliente.
            Há mais de 6 anos, Adriana lidera e inspira outras mulheres, e seu
            espírito forte é o alicerce da nossa marca. Como cristã, ela
            acredita que a verdadeira essência está no Criador de nossas vidas.
          </p>
          <p className="mb-6 text-lg font-thin text-white text-center md:text-left">
            A Império Neves nasceu de um desejo profundo: inspirar e ajudar as
            pessoas a comunicarem-se com confiança através de suas roupas. A
            roupa que você escolhe comunica muito sobre quem você é e onde
            deseja chegar. Nossa missão é proporcionar uma experiência segura
            para que você viva seus momentos especiais com tranquilidade e
            confiança.
          </p>
          <p className="mb-6 text-lg font-thin text-white text-center md:text-left">
            A voz da Império Neves é a do homem poderoso, próspero, sábio e
            forte que existe dentro de cada um, somos uma empresa que visa a
            manifestação da real identidade masculina a partir do parâmetro
            original da criação de Deus. Adriana Neves, junto com a Império
            Neves, está aqui para ajudá-lo a mostrar ao mundo a sua confiança e
            autenticidade.
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=5511987909927&text=Ola%21+Vim+pelo+site%2C+gostaria+de+agendar+uma+prova.&type=phone_number&app_absent=0"
            className="text-[18px] text-black font-normal border-black bg-white py-3 px-5 inline-block mx-auto md:mx-0 w-fit hover:underline underline-offset-4 ease-linear"
            target=" _blank"
            title="Chamar no Whatsapp"
          >
            Entre em contato
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
