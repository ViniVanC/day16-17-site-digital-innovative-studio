import { motion } from "framer-motion";
import React from "react";
import { Container } from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const usersReviewsList = [
  {
    stars: 5,
    text: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    avatarSrc: "/images/user-img/user-img1.jpg",
    author: "Caitlin Ward",
    authorInfo: "Aron Designer",
  },
  {
    stars: 5,
    text: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    avatarSrc: "/images/user-img/user-img2.jpg",
    author: "Matthew Webster",
    authorInfo: "Aron Designer",
  },
  {
    stars: 3,
    text: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.",
    avatarSrc: "/images/user-img/user-img1.jpg",
    author: "Caitlin Ward",
    authorInfo: "Aron Designer",
  },
  {
    stars: 1,
    text: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    avatarSrc: "/images/user-img/user-img2.jpg",
    author: "Matthew Webster",
    authorInfo: "Aron Designer",
  },
];

const ReviewsItem = ({ text, avatarSrc, author, authorInfo, stars }) => {
  return (
    <>
      <ul className="flex items-center gap-[5px]">
        {new Array(stars).fill().map((item, i) => (
          <li key={i}>
            <img src="/images/icons/star.svg" alt="star" />
          </li>
        ))}
      </ul>
      <p className="text-[20px] leading-[120%]">"{text}"</p>
      <div className="relative flex min-h-[70px] flex-col justify-center pl-[85px]">
        <h3 className="mb-[5px] text-[18px] leading-[111%]">{author}</h3>
        <p className="text-[17px] leading-[118%] text-[#6F776F]">
          {authorInfo}
        </p>
        <img
          className="absolute top-0 left-0 h-[70px] w-[70px]"
          src={avatarSrc}
          alt={`${author}-avatar`}
        />
      </div>
    </>
  );
};

export const Reviews = () => {
  return (
    <section id="reviews">
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
            What they think
          </motion.h2>

          <div className="flex items-center gap-[10px]">
            <button
              id="prevBtn"
              className="flex h-[50px] w-[50px] items-center justify-center border border-solid border-[#6F776F] transition duration-300"
              // onClick={() => swiper.slidePrev()}
            >
              <img
                className="rotate-90"
                src="/images/icons/arrow.svg"
                alt="arrow-prev"
              />
            </button>

            <button
              id="nextBtn"
              className="flex h-[50px] w-[50px] items-center justify-center border border-solid border-[#6F776F] transition duration-300"
              // onClick={() => swiper.slideNext()}
            >
              <img
                className="-rotate-90"
                src="/images/icons/arrow.svg"
                alt="arrow-next"
              />
            </button>
          </div>
        </div>
      </Container>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        pagination
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {usersReviewsList.map((item, i) => (
          <SwiperSlide
            key={i}
            className="flex min-h-[320px] w-full max-w-[460px] flex-col gap-[35px] border border-solid border-[rgba(111,119,111,.44)] py-[40px] pl-[47px] pr-[70px]"
          >
            <ReviewsItem
              text={item.text}
              avatarSrc={item.avatarSrc}
              author={item.author}
              authorInfo={item.authorInfo}
              stars={item.stars}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
