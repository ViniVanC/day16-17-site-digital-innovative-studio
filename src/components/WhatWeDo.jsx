import { motion } from "framer-motion";
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
    <motion.li
      className="relative w-full pl-[70px] sm:w-1/2 sm:max-w-[250px]"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: `.${num + 1}`, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img
        className="absolute top-0 left-0"
        src={`/images/icons/icon${num}.svg`}
        alt={`icon${num}`}
      />
      <h3 className="mb-2 text-[19px] uppercase leading-[126%] tracking-[3px]">
        {title}
      </h3>
      <p className="text-[18px] leading-[133%] text-white/80">{description}</p>
    </motion.li>
  );
};

export const WhatWeDo = ({ WhatWeDoRef }) => {
  return (
    <section ref={WhatWeDoRef} id="what-we-do">
      <Container>
        <div className="flex flex-wrap-reverse items-center justify-center gap-[100px]">
          <ImageAndText
            x={-50}
            text={"What we do"}
            src={"/images/content-img/content-img1.jpg"}
            alt={"content-img"}
          />

          <div className="max-w-[550px]">
            <motion.h2
              className="mb-[70px] text-[47px] font-bold uppercase leading-[100%] max-sm:text-[35px]"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Aron creates <br />
              <span className="font-normal italic">innovation</span> by design,
              not by chance.
            </motion.h2>
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
