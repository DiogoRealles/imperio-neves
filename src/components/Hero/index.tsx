import Link from 'next/link';

const Index = () => {
  return (
    <header className="w-full h-[65vh] md:h-[75vh] p-4 bg-hero relative overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-transparent before:to-black before:opacity-90 before:z-[-5]">
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col content-center md:content-start justify-center items-center md:items-start max-w-[550px]">
          <h1 className="text-[40px] md:text-[60px] text-white text-centermd:text-left font-serif mb-2">
            Império Neves
          </h1>
          <p className="text-[18px] md:text-[32px] text-white text-centermd:text-left mb-10">
            Venda e locação de trajes a rigor
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=5511987909927&text=Ola%21+Vim+pelo+Instagram%2C+gostaria+de+agendar+uma+prova.&type=phone_number&app_absent=0"
            className="mx-auto md:mx-0 text-[18px] text-white font-normal border-black bg-black py-3 px-5 inline-block hover:underline ease-linear underline-offset-4"
            target=" _blank"
            title="Chamar no Whatsapp"
          >
            Entre em contato
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Index;
