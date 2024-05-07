'use client';

import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import ItemMenu from './ItemMenu';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }
  const handleClick = (key: string) => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav id="hero" className="py-8">
      <div className="container mx-auto flex items-center justify-between text-center px-4 md:px-0">
        <Link
          className="gap-1 flex-col items-center flex justify-center"
          href="/"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="300"
        >
          <span className="text-white font-title font-thin text-[24px]">
            Império Neves
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="flex justify-end items-center py-2">
          <ul className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map(({ link, label }, index) => (
              <ItemMenu key={index} link={link} label={label} />
            ))}
          </ul>
        </div>

        {/* MENU MOBILE */}
        <div
          className="md:hidden cursor-pointer flex items-center gap-2 bg-[#101010] rounded-es-3xl py-3 px-5"
          onClick={toggleMenu}
        >
          <span className="text-body text-white text-body-18 lowercase">
            menu
          </span>
          <BsList className="w-8 h-8 text-white" />
        </div>
        <div
          className={
            openMenu
              ? 'fixed z-10 top-0 right-0 md:hidden bg-[#101010] h-screen w-full p-0 ease-in-out duration-500'
              : 'fixed top-0 right-[-100%] h-screen p-0 ease-in-out duration-500'
          }
        >
          <div className="flex w-full items-center justify-end pt-[30px]">
            <div
              className="cursor-pointer flex items-center gap-2 bg-gray-dark rounded-es-3xl py-3 px-5"
              onClick={toggleMenu}
            >
              <span className="text-body text-white text-body-18 lowercase">
                menu
              </span>
              <BsX className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* MENU MOBILE LINKS */}
          <div className="relative flex-col gap-4 mt-8 p-10">
            <ul className="flex flex-col items-end gap-4">
              {NAV_LINKS.map(({ link, label }, index) => (
                <ItemMenu
                  key={index}
                  link={link}
                  label={label}
                  event={setOpenMenu}
                />
              ))}
            </ul>

            <ul className="flex gap-4 justify-end">
              <li className="text-[32px] text-white hover:text-white/60 ease-linear">
                <Link
                  href="https://www.instagram.com/imperionevess/"
                  title="Ir para Instagram Império Neves - Trajes a rigor"
                  aria-label="Ir para Instagram Império Neves - Trajes a rigor"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="text-[32px] text-white hover:text-white/60 ease-linear">
                <Link
                  href="https://www.facebook.com/imperionevess/"
                  title="Ir para Facebook Império Neves - Trajes a rigor"
                  aria-label="Ir para Facebook Império Neves - Trajes a rigor"
                >
                  <FaFacebookSquare />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
