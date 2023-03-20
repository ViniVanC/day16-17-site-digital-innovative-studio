import React from "react";
import { Container } from "./Container";
import { ImageAndText } from "./ImageAndText";

const contentItems = [
  {
    title: "Strategy",
    description: "Strategic masterplans and business/concept strategy",
  },
  {
    title: "Ecommerce",
    description: "High quality products that offer an all-in solution",
  },
  {
    title: "Design",
    description: "Standard of own film production that delivers",
  },
  {
    title: "Concept",
    description: "Award winning concepts and ideas from best team",
  },
];

const Item = ({ num, title, description }) => {
  return (
    <li className="relative w-full pl-[70px] sm:w-1/2 sm:max-w-[250px]">
      <img
        className="absolute top-0 left-0"
        src={`/images/icons/icon${num}.svg`}
        alt={`icon${num}`}
      />
      <h3 className="mb-2 text-[19px] uppercase leading-[126%] tracking-[3px]">
        {title}
      </h3>
      <p className="text-[18px] leading-[133%] text-white/80">{description}</p>
    </li>
  );
};

export const WhatWeDo = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-wrap-reverse items-center justify-center gap-[100px]">
          <ImageAndText
            text={"What we do"}
            src={"/images/content-img/content-img1.jpg"}
            alt={"content-img"}
          />

          <div className="max-w-[550px]">
            <h2 className="mb-[70px] text-[47px] font-bold uppercase leading-[100%] max-sm:text-[35px]">
              Aron creates <br />
              <span className="font-normal italic">innovation</span> by design,
              not by chance.
            </h2>
            <ul className="flex flex-wrap gap-x-[25px] gap-y-[40px]">
              {contentItems.map((item, i) => (
                <Item
                  key={i}
                  num={i + 1}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
