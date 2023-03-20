import React from "react";
import { Container } from "./Container";
import { ImageAndText } from "./ImageAndText";

export const OurClient = () => {
  return (
    <section id="our-client">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-[100px]">
          <div className="max-w-[500px]">
            <h2 className="mb-[70px] text-[50px] uppercase leading-[100%] max-sm:text-[35px]">
              We worked with the world's biggest brands.
            </h2>
            <ul className="mb-[50px] flex flex-wrap items-center justify-center gap-[40px]">
              <li className="flex w-1/3 min-w-[110px] items-center justify-center">
                <img src="/images/sponsors/sponsor1.png" alt="sponsor1" />
              </li>
              <li className="flex w-1/3 min-w-[110px] items-center justify-center">
                <img src="/images/sponsors/sponsor2.png" alt="sponsor2" />
              </li>
              <li className="flex w-1/3 min-w-[110px] items-center justify-center">
                <img src="/images/sponsors/sponsor3.png" alt="sponsor3" />
              </li>
              <li className="flex w-1/3 min-w-[110px] items-center justify-center">
                <img src="/images/sponsors/sponsor4.png" alt="sponsor4" />
              </li>
              <li className="flex w-1/3 min-w-[110px] items-center justify-center">
                <img src="/images/sponsors/sponsor5.png" alt="sponsor5" />
              </li>
              <li className="flex w-1/3 min-w-[110px] items-center justify-center">
                <img src="/images/sponsors/sponsor6.png" alt="sponsor6" />
              </li>
            </ul>
            <button className="btn">Enquire Us</button>
          </div>
          <ImageAndText
            text={"our client"}
            src={"/images/content-img/content-img4.jpg"}
            alt={"content-img"}
          />
        </div>
      </Container>
    </section>
  );
};
