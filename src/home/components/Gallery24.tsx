"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import yuzu from "../../assets/yuzu_cheesecake.jpg";
import fiorentina from "../../assets/fiorentina_steak.jpg";
import interior from "../../assets/interior_freshgarden.jpg";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery24Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery24Defaults: Props = {
  heading: "Photo Showcase",
  description: "Experience the ambiance and culinary delights of Fresh Garden Restaurant",
  images: [
    {
      src: yuzu,
      alt: "Yuzu cheesecake at Fresh Garden",
    },
    {
      src: fiorentina,
      alt: "Fiorentina steak at Fresh Garden",
    },
    {
      src: interior,
      alt: "Fresh Garden Restaurant interior",
    },
  ],
};

export const Gallery24 = (props: Gallery24Props) => {
  const { heading, description, images, className, ...rest } = {
    ...Gallery24Defaults,
    ...props,
  };

  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: transformRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section 
      id="gallery-showcase" 
      ref={transformRef} 
      className={`bg-[#3E5622] ${className || ''}`}
      {...rest}
    >
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container mx-auto text-center">
          <h2 className="mb-5 text-5xl font-bold font-serif text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-text-alternative md:text-lg">{description}</p>
        </div>
      </div>
      <div className="h-[300vh]">
        <div className="sticky top-0 mt-[-10vh] flex h-screen w-screen max-w-[100vw] flex-col items-start justify-center overflow-hidden px-[5%] md:mt-0">
          <motion.div
            style={{ x }}
            className="flex w-[150vh] items-center gap-x-6 sm:w-[200vh] md:gap-x-8 lg:w-[300vh] xl:w-[350vh]"
          >
            {images.map((image, index) => (
              <a 
                key={index} 
                className="inline-block max-w-full"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={`View ${image.alt}`}
              >
                <div className="relative size-full max-w-full overflow-hidden">
                  <img
                    loading="lazy"
                    className="h-[80vh] max-h-[25rem] rounded-[2rem] object-cover sm:max-h-[30rem] sm:w-[90vw] md:max-h-[40rem] md:w-[80vw] lg:max-h-none"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
