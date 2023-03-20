import React from "react";
import { Container } from "./Container";
import { ImageAndText } from "./ImageAndText";

export const OurVision = () => {
  return (
    <section id="our-vision">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-[100px]">
          <ImageAndText
            text={"our vision"}
            src={"/images/content-img/content-img5.png"}
            alt={"content-img"}
          />
          <div className="flex max-w-[500px] flex-col items-start gap-[50px]">
            <h2 className="text-[50px] uppercase leading-[100%] max-sm:text-[35px]">
              We worry about the details so you don't have to.
            </h2>
            <p className="text-[24px] leading-[125%] text-grey">
              What makes Aron Studio unique is our vision. When we first started
              as a design agency, we made a promise to ourselves to honor our
              creative impulses.
            </p>
            <button className="btn bg-white text-darkGreen">
              More About Us
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
