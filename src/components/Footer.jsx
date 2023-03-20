import React from "react";
import { Container } from "./Container";

export const Footer = () => {
  const footerBottomTitle =
    "text-[15px] uppercase leading-[133%] text-greyGreen mb-[20px]";

  return (
    <footer className="bg-white pt-[117px] pb-[60px] text-darkGreen">
      <Container>
        <div className="mb-[100px] flex flex-col items-center justify-center gap-[60px]">
          <h2 className="text-center text-[80px] uppercase leading-[100%] max-sm:text-[50px] max-xs:text-[35px]">
            FEEL FREE TO WRITE US. <br /> Ready to talk
          </h2>
          <div className="flex items-center gap-[30px]">
            <button className="btn">Contact Us</button>
            <a href="#">make a call</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-[50px]">
          <div className="w-1/3 min-w-[300px] px-[25px]">
            <ul className="flex flex-col justify-between gap-[8px] text-[26px] uppercase leading-[115%]">
              <li>
                <a className="before:hidden" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="before:hidden" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="before:hidden" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="before:hidden" href="#">
                  News
                </a>
              </li>
              <li>
                <a className="before:hidden" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/3 min-w-[300px] px-[25px]">
            <div className="">
              <h3 className={`${footerBottomTitle}`}>HQ Address</h3>
              <p className="mb-[50px] text-[18px] leading-[133%] text-greyGreen">
                741 New South Head Rd, Triple Bay SWFW 3148, New York
              </p>
            </div>
            <div className="flex flex-col items-start gap-[15px] uppercase">
              <h3 className={`${footerBottomTitle}`}>Contact</h3>
              <a href="#">Hello@aron.com</a>
              <a href="#">+1 317 711 105</a>
            </div>
          </div>
          <div className="w-1/3 min-w-[300px] px-[25px]">
            <div className="">
              <h3 className={`${footerBottomTitle}`}>Follow us</h3>
              <ul className="mb-[30px] flex items-center gap-[20px]">
                <li>
                  <a className="before:hidden" href="#">
                    <img src="/images/icons/inst.svg" alt="icon-inst" />
                  </a>
                </li>
                <li>
                  <a className="before:hidden" href="#">
                    <img src="/images/icons/linkedin.svg" alt="icon-linkedin" />
                  </a>
                </li>
                <li>
                  <a className="before:hidden" href="#">
                    <img src="/images/icons/fb.svg" alt="icon-fb" />
                  </a>
                </li>
                <li>
                  <a className="before:hidden" href="#">
                    <img src="/images/icons/tvi.svg" alt="icon-tvi" />
                  </a>
                </li>
                <li>
                  <a className="before:hidden" href="#">
                    <img src="/images/icons/dribble.svg" alt="icon-dribble" />
                  </a>
                </li>
              </ul>
              <div className="mb-[30px] flex flex-col items-start gap-[15px] uppercase">
                <a href="#">Style Guide</a>
                <a href="#">Image Licesing</a>
              </div>
              <p className="text-[15px] leading-[133%] text-greyGreen">
                © This is a Deni Bozo template powered by Webflow
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
