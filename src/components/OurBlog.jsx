import { motion } from "framer-motion";
import React from "react";
import { Container } from "./Container";

const blogItemList = [
  {
    imgSrc: "/images/blog-img/blog-img1.jpg",
    tag: ["Marketing", "#00663F"],
    title: "Curating a workplace that inspires all of us",
    href: "#",
  },

  {
    imgSrc: "/images/blog-img/blog-img2.jpg",
    tag: ["Design", "#000DFF"],
    title: "Designers who changed the web with Webflow",
    href: "#",
  },
  {
    imgSrc: "/images/blog-img/blog-img3.jpg",
    tag: ["Code", "#FF3A1B"],
    title: "Communication between departments",
    href: "#",
  },
];

const BlogCard = ({ num, imgSrc, tag, title, href }) => {
  return (
    <motion.div
      className="w-full max-w-[373px] overflow-hidden rounded bg-greyGreen"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: `.${num + 1}`, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img className="object-cover" src={imgSrc} alt={title} />
      <div className="p-[30px]">
        <span
          className="mb-[16px] inline-block rounded-[3px] px-[9px] py-[3px] text-[12px] uppercase leading-[167%] text-[#fff]"
          style={{
            backgroundColor: tag[1],
          }}
        >
          {tag[0]}
        </span>
        <h2 className="mb-[36px] h-fit max-w-[256px] text-[28px] uppercase leading-[100%]">
          {title}
        </h2>
        <a className="uppercase" href={href}>
          read more
        </a>
      </div>
    </motion.div>
  );
};

export const OurBlog = () => {
  return (
    <section
      id="our-blog"
      className="border-t-[2px] border-solid border-grey/10"
    >
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
            Our Blog
          </motion.h2>

          <motion.a
            className="flex items-center gap-[10px]"
            href="#"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            view all Posts
          </motion.a>
        </div>
        <div className="flex flex-wrap justify-center gap-[40px]">
          {blogItemList.map((item, i) => (
            <BlogCard
              key={i}
              num={i}
              imgSrc={item.imgSrc}
              tag={item.tag}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
