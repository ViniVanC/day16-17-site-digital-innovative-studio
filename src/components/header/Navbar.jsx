import React from "react";

const NavbarItem = ({ children }) => {
  return (
    <li className="flex items-center gap-[20px] before:relative before:top-1/2 before:inline-block before:h-[2px] before:w-0 before:w-0 before:bg-darkGreen before:transition-all before:duration-300 sm:justify-between sm:hover:before:w-full">
      <a className=" before:hidden" href="#">
        {children}
      </a>
    </li>
  );
};

export const Navbar = ({ openNavbar }) => {
  return (
    <nav
      className={`fixed ${
        openNavbar ? "top-0" : "top-[-120%]"
      } right-0 h-full w-1/4 bg-yellow pr-[30px] pt-[90px] pb-[50px] text-darkGreen transition-all duration-300
      max-md:w-2/3 max-[375px]:w-full
      `}
    >
      <ul className="flex flex-col justify-between gap-[50px] text-[50px] font-bold max-sm:text-[30px]">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Pricing</NavbarItem>
        <NavbarItem>News</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </ul>
    </nav>
  );
};
