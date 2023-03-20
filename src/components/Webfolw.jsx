import React from "react";
import { Container } from "./Container";

export const Webfolw = () => {
  return (
    <section id="webflow">
      <Container>
        <div className="flex flex-col items-center justify-center gap-[50px]">
          <div className="relative max-w-[900px] max-sm:hidden">
            <img
              className="w-full"
              src="images/content-img/content-img2.jpg"
              alt="content-img"
            />
            <img
              className="absolute top-1/2 -right-[86px] -translate-y-1/2"
              src="images/content-img/content-img3.jpg"
              alt="content-img"
            />
          </div>
          <h2 className="max-w-[760px] text-center text-[80px] font-bold uppercase leading-[100%] max-sm:text-[50px] max-xs:text-[40px]">
            Build <span className="font-normal italic">sparkling</span> Webflow
            websites.
          </h2>
          <div className="flex items-center gap-[30px]">
            <button className="btn">View on Webflow</button>
            <a className="uppercase" href="#">
              contact Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
