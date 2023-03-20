import React from "react";
import { Container } from "./Container";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Title = ({ children }) => {
  return (
    <motion.div
      className="max-[533px]:text text-[173px] uppercase leading-[100%] max-md:text-[130px] max-sm:mb-[30px] max-sm:text-[100px] max-sm:leading-[120%] max-[550px]:text-[50px]"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const Intro = ({ scrollToNextSection }) => {
  const isAbove768Screens = useMediaQuery("(min-width:768px)");

  return (
    <section id="intro" className="mt-[100px]">
      <Container>
        {isAbove768Screens ? (
          <div className="">
            <div className="flex items-end gap-[80px] py-[30px] max-md:gap-[40px]">
              <Title>Digital</Title>
              <motion.p
                className="mb-[30px] text-[22px] uppercase leading-[120%] text-grey"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                We are an award-winning branding{" "}
                <span className="font-PlayFair text-yellow">&</span> web studio
                committed to excellence since forever.
              </motion.p>
            </div>
            <div className="flex items-center justify-center gap-[80px] py-[30px] max-md:gap-[40px]">
              <Title>Innovative</Title>
              <motion.button
                className="relative flex h-[100px] w-[100px] items-center justify-center bg-yellow max-md:h-[70px] max-md:w-[70px] max-sm:hidden"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src="/images/icons/arrow1.svg" alt="arrow" />
              </motion.button>
            </div>
            <div className="relative flex items-end justify-end gap-[80px] py-[30px] max-md:gap-[40px]">
              <motion.button
                className="relative flex h-[127px] w-[127px] items-center justify-center"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                onClick={scrollToNextSection}
              >
                <img src="/images/icons/arrow.svg" alt="arrow" />
                <img
                  className="sm:hover:pause absolute top-0 left-0 animate-spinCircularText"
                  src="/images/icons/circularText.svg"
                  alt="circular text"
                />
              </motion.button>
              <Title>Studio</Title>
            </div>
          </div>
        ) : (
          <div className="">
            <Title>Digital</Title>
            <Title>Innovative</Title>
            <Title>Studio</Title>
            <motion.p
              className="mb-[30px] text-[22px] uppercase leading-[120%] text-grey"
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              We are an award-winning branding{" "}
              <span className="font-PlayFair text-yellow">&</span> web studio
              committed to excellence since forever.
            </motion.p>
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
