import Link from 'next/link';

const Index = () => {
  return (
    <section id="new-arrivals" className="py-10 md:p-20">
      <div className="container mx-auto px-4 md:px-0">
        <header className="pb-20">
          <h2 className="text-white text-[40px] font-semibold text-center font-serif">
            Tipos de traje
          </h2>
          <p className="text-white/75 text-[18px] md:text-[24px] text-center">
            Veja nossas sugestões de roupas para eventos e festas
          </p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-5">
          <div className="relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product01 p-40 rounded text-center">
            <Link
              href=""
              className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[24px] text-white font-serif text-center"
            >
              Roupas de noivo
            </Link>
          </div>
          <div className="relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product02 p-40 rounded text-center">
            <Link
              href=""
              className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[24px] text-white font-serif text-center"
            >
              Roupas para padrinho
            </Link>
          </div>
          <div className="relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product03 p-40 rounded text-center">
            <Link
              href=""
              className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[24px] text-white font-serif text-center"
            >
              Roupas para pagem
            </Link>
          </div>
          <div className="relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product04 p-40 rounded text-center">
            <Link
              href=""
              className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[24px] text-white font-serif text-center"
            >
              Roupas para formandos
            </Link>
          </div>
          <div className="relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product05 p-40 rounded text-center">
            <Link
              href=""
              className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[24px] text-white font-serif text-center"
            >
              Roupas paara festas
            </Link>
          </div>
          <div className="relative hover:opacity-80 ease-linear overflow-hidden block z-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-b before:from-black before:to-black before:opacity-30 before:z-[-5] bg-product06 p-40 rounded text-center">
            <Link
              href=""
              className="absolute top-1/3 right-0 bottom-0 left-0 w-full h-full text-[24px] text-white font-serif text-center"
            >
              Roupas para reuniões
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
