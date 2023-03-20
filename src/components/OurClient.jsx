import { motion } from "framer-motion";
import React from "react";
import { Container } from "./Container";
import { ImageAndText } from "./ImageAndText";

const Sponsor = ({ num }) => {
  return (
    <motion.li
      className="flex w-1/3 min-w-[110px] items-center justify-center"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: `.${num + 1}`, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img src={`/images/sponsors/sponsor${num}.png`} alt={`sponsor${num}`} />
    </motion.li>
  );
};

export const OurClient = () => {
  const sponsorsList = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
  ];
  return (
    <section id="our-client">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-[100px]">
          <div className="max-w-[500px]">
            <motion.h2
              className="mb-[70px] text-[50px] uppercase leading-[100%] max-sm:text-[35px]"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              We worked with the world's biggest brands.
            </motion.h2>
            <ul className="mb-[50px] flex flex-wrap items-center justify-center gap-[40px]">
              {sponsorsList.map((item, i) => (
                <Sponsor key={i} num={item.num} />
              ))}
            </ul>
            <motion.button
              className="btn"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              Enquire Us
            </motion.button>
          </div>
          <ImageAndText
            x={50}
            text={"our client"}
            src={"/images/content-img/content-img4.jpg"}
            alt={"content-img"}
          />
        </div>
      </Container>
    </section>
  );
};
