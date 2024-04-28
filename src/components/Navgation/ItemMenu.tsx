"use client";

import Link from "next/link";

type TProps = {
  link: any;
  label: string;
  event?: (param: boolean) => void;
};

const ItemMenu = ({ link, label, event }: TProps) => {
  if (!event) {
    return (
      <>
        <li className="">
          <Link
            href={link}
            className="text-gray-dark font-body text-title-17 uppercase hover:text-gray-900 transition-all duration-300 py-1 px-2"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            {label}
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="" onClick={() => event(false)}>
          <Link
            href={link}
            className="text-gray-dark font-body text-title-17 uppercase hover:text-gray-900 transition-all duration-300 py-1 px-2"
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
