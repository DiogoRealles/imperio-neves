import { FaInstagram, FaFacebookSquare, FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '../Gallery';

const dateYear = new Date().getFullYear();

const Index = () => {
  return (
    <footer id="follow" className="">
      <div className="container mx-auto px-4 md:px-0">
        <div className="">
          <header
            className="flex items-center justify-between py-10"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            <div className="flex flex-col items-center justify-center text-center gap-1">
              <div className="relative overflow-hidden rounded-full w-[80px] h-[80px]">
                <Image
                  className="w-full h-full"
                  src="/assets/img/logo-white.png"
                  alt=""
                  fill
                  quality={90}
                />
              </div>
              <div className="">
                <p className="text-white text-[24px] font-title font-thin">
                  Império Neves
                </p>
                <span className="text-white/65 text-sm ">@ImperioNevess</span>
              </div>
            </div>

            <Link
              href="https://www.instagram.com/imperionevess/"
              className="text-[18px] text-black font-normal border-black bg-white py-3 px-5 inline-flex md:mx-0 w-fit ease-linear rounded-[6px] hover:bg-white/80 group text-center justify-center items-center gap-2 transition-all whitespace-nowrap"
              target=" _blank"
              title="Ir para Instagram Império Neves - Trajes a rigor"
              aria-label="Ir para Instagram Império Neves - Trajes a rigor"
            >
              <span className="whitespace-nowrap">Seguir</span>
              <FaInstagram
                className=" group-hover:translate-x-2 transition-all ease-linear"
                size={28}
              />{' '}
            </Link>
          </header>
          <Gallery />
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-between py-5">
          <a className="inline-flex gap-2 items-center" href="#hero">
            Voltar ao topo <FaArrowUp />
          </a>

          <p>
            &copy;{' '}
            <strong className=" font-title font-thin text-[24px]">
              Império Neves
            </strong>{' '}
            - {dateYear}
          </p>

          <p className="text-white text-[18px] md:hidden">Siga</p>
          <ul className="flex gap-5 items-center">
            <p className="text-white text-[18px] hidden md:block">Siga</p>

            <li className="p-2">
              <Link
                className=""
                href="https://www.instagram.com/imperionevess/"
                target="_blank"
                title="Ir para Instagram Império Neves - Trajes a rigor"
                aria-label="Ir para Instagram Império Neves - Trajes a rigor"
              >
                <FaInstagram size={40} />
              </Link>
            </li>
            <li className="p-2">
              <Link
                className=""
                href="https://www.facebook.com/imperionevess/"
                target="_blank"
                title="Ir para Facebook Império Neves - Trajes a rigor"
                aria-label="Ir para Facebook Império Neves - Trajes a rigor"
              >
                <FaFacebookSquare size={40} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="group cursor-pointer text-center text-[12px] text-white/65 w-fit mx-auto pb-5">
        Desenvolvido por:{' '}
        <Link
          className="group-hover:underline underline-offset-4"
          href="https://diogorealles.github.io/"
          target="_blank"
        >
          <strong className="text-white">Diogo Realles - Front-end</strong>
        </Link>
      </p>
    </footer>
  );
};

export default Index;
