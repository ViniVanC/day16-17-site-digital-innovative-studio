import { motion } from "framer-motion";
import React from "react";
import { Container } from "./Container";

const itemsList = [
  { text: "Pellente dapibus" },
  { text: "Consequat leo" },
  { text: "Auctor bortis" },
  { text: "Integer ante" },
  { text: "Etiam imdiet" },
  { text: "Cras ultricies" },
];

const OurWorkItem = ({ num, text }) => {
  return (
    <motion.li
      className="flex cursor-pointer items-center gap-[20px] whitespace-nowrap text-[86px] leading-[120%] before:relative  before:inline-block before:h-[4px] before:w-0 before:w-0 before:scale-[-1] before:bg-white before:transition-all before:duration-700 max-sm:text-[40px] max-xs:text-[35px] sm:hover:before:w-full"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: `.${num + 1}`, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {text}
    </motion.li>
  );
};

export const OurWork = () => {
  return (
    <section id="ourwork">
      <Container>
        <div className="mb-[100px] flex items-center justify-between uppercase">
          <motion.h2
            className="text-[50px]  leading-[105%] max-sm:text-[30px]"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Our Work
          </motion.h2>
          <motion.a
            className=""
            href="#"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Work with us
          </motion.a>
        </div>
        <ul className="flex flex-col gap-[30px]">
          {itemsList.map((item, i) => (
            <OurWorkItem key={i} num={i} text={item.text} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
