import { motion } from "framer-motion";
import React from "react";
import { Container } from "./Container";
import { ImageAndText } from "./ImageAndText";

export const OurVision = () => {
  return (
    <section id="our-vision">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-[100px]">
          <ImageAndText
            x={-50}
            text={"our vision"}
            src={"/images/content-img/content-img5.png"}
            alt={"content-img"}
          />
          <div className="flex max-w-[500px] flex-col items-start gap-[50px]">
            <motion.h2
              className="text-[50px] uppercase leading-[100%] max-sm:text-[35px]"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              We worry about the details so you don't have to.
            </motion.h2>
            <motion.p
              className="text-[24px] leading-[125%] text-grey"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              What makes Aron Studio unique is our vision. When we first started
              as a design agency, we made a promise to ourselves to honor our
              creative impulses.
            </motion.p>
            <motion.button
              className="btn bg-white text-darkGreen"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              More About Us
            </motion.button>
          </div>
        </div>
      </Container>
    </section>
  );
};
