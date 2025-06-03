"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import balcony from "../../assets/balcony_closeup.jpg";
import shrimpPasta from "../../assets/shrimp_pasta.jpg";
import pastaRagu from "../../assets/pasta_ragu.jpg";
import garden from "../../assets/restaurant_garden.jpg";
import cocktail from "../../assets/cocktail_espresso_martini.jpg";
import tiramisu from "../../assets/tiramisu.jpg";
import couple from "../../assets/laughing_couple_restaurant.jpg";
import entry from "../../assets/restaurant_entry.jpg";
import tagliatelle from "../../assets/tagliatelle.jpg";

const images = [
  { src: balcony, alt: "Fresh Garden Restaurant balcony" },
  { src: shrimpPasta, alt: "Delicious shrimp pasta" },
  { src: pastaRagu, alt: "Classic pasta ragu" },
  { src: garden, alt: "Beautiful restaurant garden" },
  { src: cocktail, alt: "Espresso martini cocktail" },
  { src: tiramisu, alt: "Homemade tiramisu" },
  { src: couple, alt: "Happy couple at Fresh Garden" },
  { src: entry, alt: "Restaurant entrance" },
];

const useCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index: number) => {
    return clsx("relative mx-[3px] inline-block size-2 rounded-full", {
      "bg-text-alternative": current === index + 1,
      "bg-text-alternative/40": current !== index + 1,
    });
  };

  return { api, setApi, handleDotClick, dotClassName };
};

export function Gallery19() {
  const carouselState = useCarousel();
  return (
    <section id="relume" className="bg-[#3E5622]">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold font-serif text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              Follow us @freshgardenrestaurant
            </h2>
          </div>
          <Carousel
            setApi={carouselState.setApi}
            opts={{ loop: true, align: "start" }}
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/2 px-3 md:basis-1/4 md:px-4">
                    <div className="w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-square size-full rounded-[2rem] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <button
                  key={index}
                  onClick={carouselState.handleDotClick(index)}
                  className={carouselState.dotClassName(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
