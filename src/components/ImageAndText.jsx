import React from "react";

export const ImageAndText = ({ text, src, alt }) => {
  return (
    <div className="relative z-0 flex h-[627px] w-max items-center">
      <span className="relative z-[2]  whitespace-nowrap text-[100px] uppercase leading-[74px] tracking-[1px] text-yellow">
        {text}
      </span>
      <img
        className="absolute top-0 left-1/2 z-0 -translate-x-1/2"
        src={src}
        alt={alt}
      />
    </div>
  );
};
