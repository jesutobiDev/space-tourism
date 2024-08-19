"use client";
import Link from "next/link";
import logo from "../../public/assets/shared/logo.svg";
import hamburger from "../../public/assets/shared/icon-hamburger.svg";
import close from "../../public/assets/shared/icon-close.svg";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import path from "path";

const Navbar = () => {
  const navLinks = [
    { number: "00", name: "home", route: "/" },
    { number: "01", name: "destination", route: "/destination" },
    { number: "02", name: "crew", route: "/crew" },
    { number: "03", name: "technology", route: "/technology" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex h-28 lg:h-20 w-full justify-between relative font-barlow-condensed text-2xl lg:text-xl tracking-wider lg:tracking-wide ml-5 md:ml-10 ">
      <div className="w-fit md:w-32 lg:w-36 h-full flex items-center">
        <Image src={logo} alt="logo" />
      </div>
      <div
        className={`w-fit md:hidden items-center absolute right-0 top-0 bottom-0 z-10 my-auto ${
          isNavOpen ? "hidden" : "flex"
        }`}
      >
        <Image
          src={hamburger}
          alt="open menu"
          width={40}
          height={40}
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`mr-5`}
        />
      </div>
      <div
        className={`w-[75vw] md:flex-1 relative md:h-full transition-[height] duration-300 ease-in-out flex-col md:flex-row md:justify-end backdrop-blur-md md:backdrop-blur-0 bg-white/5 md:bg-transparent pl-10 md:pl-0 ${
          isNavOpen ? "h-screen" : "h-0"
        }`}
      >
        <div className="h-28 flex items-center ml-auto md:hidden pr-5">
          <Image
            src={close}
            alt="close menu"
            width={40}
            height={40}
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={`${isNavOpen ? "flex ml-auto" : "hidden"}`}
          />
        </div>
        <ul
          className={`text-white gap-10 w-full md:flex lg:w-2/3 md:items-center md:justify-center md:bg-white/10 md:h-full flex-col md:flex-row md:ml-auto ${
            isNavOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`md:h-full flex items-center uppercase ${
                pathname === link.route ? "border-r-4 md:border-r-0 md:border-b-2 border-white" : ""
              }`}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <Link
                href={link.route}
                className="flex gap-2 h-full items-center"
              >
                <span className="font-semibold md:hidden lg:flex">
                  {link.number}
                </span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-[35%] h-[1px] bg-white/20 absolute right-[65%] top-0 bottom-0 my-auto hidden lg:flex"></div>
      </div>
    </div>
  );
};

export default Navbar;
