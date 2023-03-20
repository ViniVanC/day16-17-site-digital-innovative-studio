import React from "react";
import { Container } from "../Container";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b-2 border-b-grey/10">
      <Container>
        <div className="flex items-center justify-between py-[30px]">
          <div className="flex items-center gap-[15px]">
            <img
              className="h-[23px] w-[70px]"
              src="/images/logo.svg"
              alt="logo"
            />
            <div className="h-[15px] w-[1px] bg-greyGreen" />
            <div className="flex gap-[5px] text-[13px] uppercase leading-5 tracking-[1px]">
              <span className="text-white/50">Enquire Us:</span>
              <a href="#">Hello@aron.com</a>
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="flex items-center gap-[5px]">
              <img src="/images/icons/cart.svg" alt="cart" />
              <span className="flex h-[22px] min-w-[22px] items-center justify-center bg-yellow p-[5px] text-[12px] leading-[18px] text-darkGreen">
                0
              </span>
            </div>
            <div className="menu-icon"></div>
          </div>
        </div>
      </Container>
    </header>
  );
};
