import { motion } from "framer-motion";
import React from "react";

export const ImageAndText = ({ x, text, src, alt }) => {
  return (
    <motion.div
      className="relative z-0 flex h-[627px] w-max items-center max-sm:hidden"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: x },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <span className="relative z-[2]  whitespace-nowrap text-[100px] uppercase leading-[74px] tracking-[1px] text-yellow">
        {text}
      </span>
      <img
        className="absolute top-0 left-1/2 z-0 -translate-x-1/2"
        src={src}
        alt={alt}
      />
    </motion.div>
  );
};
