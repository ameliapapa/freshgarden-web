"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

type Testimonial = {
  quote: string;
  name: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  leftTestimonials: Testimonial[];
  rightTestimonials: Testimonial[];
};

export type Testimonial33Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial33 = (props: Testimonial33Props) => {
  const { heading, description, buttons, leftTestimonials, rightTestimonials } = {
    ...Testimonial33Defaults,
    ...props,
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");

  const leftCards = isMobile
    ? useTransform(scrollYProgress, [0, 1], ["20vh", "-70vh"])
    : useTransform(scrollYProgress, [0, 1], ["-10rem", "5rem"]);
  const rightCards = isMobile
    ? useTransform(scrollYProgress, [0, 1], ["20vh", "-70vh"])
    : useTransform(scrollYProgress, [0, 1], ["10rem", "-5rem"]);

  return (
    <section
      id="relume"
      ref={sectionRef}
      className="overflow-hidden bg-[#1F2B11] px-[5%] py-12 md:py-16 lg:py-20"
    >
      <div className="container grid min-h-svh auto-cols-fr grid-cols-1 overflow-hidden lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className="rb-5 mb-5 text-6xl font-serif font-light text-white md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h2>
            <p className="text-white/90 md:text-md">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button 
                key={index} 
                {...button}
                className={button.variant === 'secondary' ? 'bg-transparent text-white border-white hover:bg-white/10' : 'text-white'}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-white/10 px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pl-0 lg:pr-12">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              {leftTestimonials.map((leftTestimonial, index) => (
                <div key={index} className="relative w-full">
                  <TestimonialCard key={index} {...leftTestimonial} />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              {rightTestimonials.map((rightTestimonial, index) => (
                <div key={index} className="relative w-full">
                  <TestimonialCard key={index} {...rightTestimonial} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = (testimonial: Testimonial) => (
  <div className="flex w-full flex-col items-start justify-between rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
    <div className="rb-5 mb-5 md:mb-6">
      <div className="rb-6 mb-6 flex">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar key={starIndex} className="mr-1 size-6 text-white" />
          ))}
      </div>
      <blockquote className="font-mono text-lg text-white">{testimonial.quote}</blockquote>
    </div>
    <div className="flex w-full flex-col items-start text-left">
      <p className="font-medium text-white">{testimonial.name}</p>
    </div>
  </div>
);

export const Testimonial33Defaults: Props = {
  heading: "Customer testimonials",
  description: "",
  buttons: [
    { title: "Read", variant: "secondary" },
    { title: "Reserve", variant: "link", size: "link", iconRight: <RxChevronRight /> },
  ],
  leftTestimonials: [
    {
      quote: "Great food with creative and delicious vegetarian and vegan options!",
      name: "Cedric van Bommel",
      numberOfStars: 5,
    },
    {
      quote: "Great food, nice environment, excellent service.",
      name: "Giovanni Rocca",
      numberOfStars: 5,
    },
    {
      quote: "Best place we have been to in Tirana.",
      name: "Odder Being",
      numberOfStars: 5,
    },
  ],
  rightTestimonials: [
    {
      quote: "Fresh, high-quality ingredients shine in every dish, and the presentation is impeccable.",
      name: "Domenico Calabrese",
      numberOfStars: 5,
    },
    {
      quote: "Very nice restaurant with delicious food, good wines and great service",
      name: "Adam Zasadzki",
      numberOfStars: 5,
    },
  ],
};

