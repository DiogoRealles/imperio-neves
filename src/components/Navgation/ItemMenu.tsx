'use client';

import Link from 'next/link';

type TProps = {
  link: any;
  label: string;
  event?: (param: boolean) => void;
};

const ItemMenu = ({ link, label, event }: TProps) => {
  if (!event) {
    return (
      <>
        <li
          className=""
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <Link
            href={link}
            className="text-white font-body text-[17px] uppercase hover:text-white/70 hover:underline underline-offset-8 transition-all duration-300 py-1 px-2"
          >
            {label}
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="mb-[40px]" onClick={() => event(false)}>
          <Link
            href={link}
            className="text-white font-body text-[17px] uppercase hover:text-white/70 hover:underline underline-offset-8 transition-all duration-300 py-2 px-2"
          >
            {label}
          </Link>
        </li>
      </>
    );
  }
  return;
};

export default ItemMenu;
