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

const OurWorkItem = ({ text }) => {
  return (
    <li className="flex cursor-pointer items-center gap-[20px] whitespace-nowrap text-[86px] leading-[120%] before:relative  before:inline-block before:h-[4px] before:w-0 before:w-0 before:scale-[-1] before:bg-white before:transition-all before:duration-700 max-sm:text-[40px] max-xs:text-[35px] sm:hover:before:w-full">
      {text}
    </li>
  );
};

export const OurWork = () => {
  return (
    <section id="ourwork">
      <Container>
        <div className="mb-[100px] flex items-center justify-between uppercase">
          <h2 className="text-[50px]  leading-[105%] max-sm:text-[30px]">
            Our Work
          </h2>
          <a className="" href="#">
            Work with us
          </a>
        </div>
        <ul className="flex flex-col gap-[30px]">
          {itemsList.map((item, i) => (
            <OurWorkItem key={i} text={item.text} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
