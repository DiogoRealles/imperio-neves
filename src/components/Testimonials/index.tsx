import { FaStar } from 'react-icons/fa';

const Index = () => {
  return (
    <section className="bg-white">
      <div className="relative container mx-auto py-20 px-4 md:px-0">
        <header className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-start pb-20">
          <h2 className="uppercase text-[40px] text-black font-title font-thin leading-[105%] mb-2">
            Depoimentos de meus clientes
          </h2>
          <p className="font-body font-normal text-black/75 text-[18px] w-full max-w-[500px]">
            Produtos originais, costura personalizada, trajes sob medida...
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-5 mb-[24px]">
          <div className="p-4 rounded-[6px] bg-white shadow-md w-full flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <FaStar className="text-yellow-600" size={20} key={index} />
                ))}
            </div>

            <p className=" font-body font-normal text-sm text-black/65 mb-5 grow">
              Atendimento nota 1.000. Às roupas impecáveis, limpas e
              higienizados. Vale muito a pena, recomendo.
            </p>

            <h4 className="text-xl text-black/80  font-body font-semibold mb-2">
              Akira Tattoo
            </h4>
            <span className="inline-block font-body font-normal text-sm text-black/65">
              alguns dias atrás
            </span>
          </div>

          <div className="p-4 rounded-[6px] bg-white shadow-md w-full flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <FaStar className="text-yellow-600" size={20} key={index} />
                ))}
            </div>

            <p className=" font-body font-normal text-sm text-black/65 mb-5 grow">
              Aluguei o traje pro meu filho de 8 anos, para um casamento e
              adorei tudo, atendimento preço vale muito super encomendo
            </p>

            <h4 className="text-xl text-black/80  font-body font-semibold mb-2">
              Daniele Viana
            </h4>
            <span className="inline-block font-body font-normal text-sm text-black/65">
              Alguns dias atrás
            </span>
          </div>

          <div className="p-4 rounded-[6px] bg-white shadow-md w-full flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <FaStar className="text-yellow-600" size={20} key={index} />
                ))}
            </div>

            <p className=" font-body font-normal text-sm text-black/65 mb-5 grow">
              Excelente atendimento, trages perfeitos e ótimos preços.
              Recomendo!
            </p>

            <h4 className="text-xl text-black/80  font-body font-semibold mb-2">
              Henrique Alan Santos
            </h4>
            <span className="inline-block font-body font-normal text-sm text-black/65">
              Uma semana atrás
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <p className="text-black text-[40px] font-semibold">100+</p>
          <p className="text-[16px] font-semibold text-black/60 lowercase mb-[8px]">
            clientes satisfeitos
          </p>
          <div className="w-[170px] h-[48px] bg-customers bg-no-repeat bg-cover bg-center"></div>
        </div>
      </div>

      <div className="bg-testimonials bg-center h-[300px] md:h-[550px] overflow-hidden bg-cover bg-no-repeat"></div>
    </section>
  );
};

export default Index;
