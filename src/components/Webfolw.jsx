import { motion } from "framer-motion";
import React from "react";
import { Container } from "./Container";

export const Webfolw = () => {
  return (
    <section id="webflow">
      <Container>
        <div className="flex flex-col items-center justify-center gap-[50px]">
          <div className="relative max-w-[900px] max-sm:hidden">
            <motion.img
              className="w-full"
              src="images/content-img/content-img2.jpg"
              alt="content-img"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            />
            <motion.img
              className="absolute top-1/2 -right-[86px] -translate-y-1/2"
              src="images/content-img/content-img3.jpg"
              alt="content-img"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            />
          </div>
          <motion.h2
            className="max-w-[760px] text-center text-[80px] font-bold uppercase leading-[100%] max-sm:text-[50px] max-xs:text-[40px]"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Build <span className="font-normal italic">sparkling</span> Webflow
            websites.
          </motion.h2>
          <motion.div
            className="flex items-center gap-[30px]"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <button className="btn">View on Webflow</button>
            <a className="uppercase" href="#">
              contact Us
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
