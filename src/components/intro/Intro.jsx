import React from "react";
import { Container } from "../Container";
import useMediaQuery from "../../hooks/useMediaQuery";

const Title = ({ children }) => {
  return (
    <div className="text-[173px] uppercase leading-[100%] max-md:text-[130px] max-sm:mb-[30px] max-sm:text-[100px] max-sm:leading-[120%] max-[533px]:text">
      {children}
    </div>
  );
};

function scrollToNextSection() {}

export const Intro = () => {
  const isAbove768Screens = useMediaQuery("(min-width:768px)");

  return (
    <section className="mt-[100px]">
      <Container>
        {isAbove768Screens ? (
          <div className="">
            <div className="flex items-end gap-[80px] py-[30px] max-md:gap-[40px]">
              <Title>Digital</Title>
              <p className="mb-[30px] text-[22px] uppercase leading-[120%] text-grey">
                We are an award-winning branding{" "}
                <span className="font-PlayFair text-yellow">&</span> web studio
                committed to excellence since forever.
              </p>
            </div>
            <div className="flex items-center justify-center gap-[80px] py-[30px] max-md:gap-[40px]">
              <Title>Innovative</Title>
              <button className="relative flex h-[100px] w-[100px] items-center justify-center bg-yellow max-md:h-[70px] max-md:w-[70px] max-sm:hidden">
                <img src="/images/icons/arrow1.svg" alt="arrow" />
              </button>
            </div>
            <div className="relative flex items-end justify-end gap-[80px] py-[30px] max-md:gap-[40px]">
              <button
                className="relative flex h-[127px] w-[127px] items-center justify-center"
                onClick={scrollToNextSection}
              >
                <img src="/images/icons/arrow.svg" alt="arrow" />
                <img
                  className="sm:hover:pause absolute top-0 left-0 animate-spinCircularText"
                  src="/images/icons/circularText.svg"
                  alt="circular text"
                />
              </button>
              <Title>Studio</Title>
            </div>
          </div>
        ) : (
          <div className="">
            <Title>Digital Innovative Studio</Title>
            <p className="mb-[30px] text-[22px] uppercase leading-[120%] text-grey">
              We are an award-winning branding{" "}
              <span className="font-PlayFair text-yellow">&</span> web studio
              committed to excellence since forever.
            </p>
            <div className="relative flex items-end justify-center gap-[80px] py-[30px] max-md:gap-[40px]">
              <button
                className="relative flex h-[90px] w-[90px] items-center justify-center"
                onClick={scrollToNextSection}
              >
                <img src="/images/icons/arrow.svg" alt="arrow" />
                <img
                  className="sm:hover:pause absolute top-0 left-0 animate-spinCircularText"
                  src="/images/icons/circularText.svg"
                  alt="circular text"
                />
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
