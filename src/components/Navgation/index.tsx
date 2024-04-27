import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  return (
    <nav id="hero" className="py-4">
      <div className="container mx-auto flex items-center justify-between text-center px-4 md:px-0">
        <Link
          className="gap-1 flex-col items-center flex justify-center"
          href="/"
        >
          {/* <Image
            className="w-[60px] h-[60px]"
            src="/assets/img/logo.png"
            alt=""
            width={100}
            height={100}
            quality={90}
          /> */}
          <span className="text-white font-title font-thin text-[24px]">
            Império Neves
          </span>
        </Link>

        <FiMenu className="text-white inline-block md:hidden" size={24} />

        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link className="font-body font-normal py-1 px-2" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-body font-normal py-1 px-2" href="#about">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="font-body font-normal py-1 px-2" href="#trajes">
              Trajes
            </Link>
          </li>
          <li>
            <Link className="font-body font-normal py-1 px-2" href="#contact">
              Contato
            </Link>
          </li>
          <li>
            <Link className="font-body font-normal py-1 px-2" href="#follow">
              Siga-nos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
