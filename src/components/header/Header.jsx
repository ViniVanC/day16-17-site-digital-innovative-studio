import React, { useReducer } from "react";
import { Container } from "../Container";
import { Navbar } from "./Navbar";

export const Header = () => {
  const [openNavbar, setOpenNavbar] = useReducer((open) => !open, false);

  if (openNavbar) {
    document.body.classList.add("lock");
  } else {
    document.body.classList.remove("lock");
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b-2 border-b-grey/10 bg-darkGreen">
      <Container>
        <div className="flex items-center justify-between py-[30px] max-sm:py-[15px]">
          <div className="flex items-center gap-[15px]">
            <img
              className="h-[23px] w-[70px] cursor-pointer"
              src="/images/logo.svg"
              alt="logo"
            />
            <div className="h-[15px] w-[1px] bg-greyGreen max-sm:hidden" />
            <div className="flex gap-[5px] text-[13px] uppercase leading-5 tracking-[1px] max-sm:hidden">
              <span className="text-white/50">Enquire Us:</span>
              <a href="#">Hello@aron.com</a>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="flex cursor-pointer items-center gap-[5px]">
              <img src="/images/icons/cart.svg" alt="cart" />
              <span className="flex h-[22px] min-w-[22px] items-center justify-center bg-yellow p-[5px] text-[12px] leading-[18px] text-darkGreen">
                0
              </span>
            </div>
            <div
              className={`menu-icon ${openNavbar ? "open" : ""}`}
              onClick={setOpenNavbar}
            ></div>
          </div>
        </div>
        <Navbar openNavbar={openNavbar} />
      </Container>
    </header>
  );
};
