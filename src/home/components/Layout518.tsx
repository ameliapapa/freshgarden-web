"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import menuEnglish from "../../assets/menu_english.pdf";
import menuAlbanian from "../../assets/menu_albanian.pdf";
import balconyCloseup from "../../assets/balcony_closeup.jpg";
import backgroundTexture from "../../assets/background_texture.png";

export type ImageProps = {
  src: string;
  alt?: string;
};

export type CardProps = {
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  cards: CardProps[];
};

export type Layout518Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout518 = (props: Layout518Props) => {
  const { image, tagline, heading, description, buttons, cards } = {
    ...Layout518Defaults,
    ...props,
  };

  const isMobile = useMediaQuery("(max-width: 991px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);

  const motionHeroStyles = {
    width: heroWidth,
    height: scaleHeight,
    y: position,
    x: position,
  };

  const motionCardsStyles = {
    width: cardsWidth,
    height: scaleHeight,
    y: position,
    x: cardsXPosition,
  };

  if (isMobile) {
    return (
      <section id="relume" className="relative px-[5%] py-16 bg-background-primary md:py-24">
        <div className="relative mb-6 flex items-center justify-center rounded-[2rem] overflow-hidden px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <HeroContent
            tagline={tagline}
            heading={heading}
            description={description}
            buttons={buttons}
            image={image}
          />
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`flex p-8 text-center rounded-[2rem] ${
                index === 0 
                  ? 'bg-[#F5F5F0]' 
                  : 'border border-border-primary/20 bg-[#0C1F0C]'
              }`}
              style={index === 0 ? {
                backgroundImage: `url(${backgroundTexture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : undefined}
            >
              <CardContent card={card} variant="mobile" isMenuCard={index === 0} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="relume"
      ref={containerRef}
      className="relative py-16 bg-background-primary md:py-24 lg:h-[250vh] lg:py-0"
    >
      <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
          <motion.div
            style={motionHeroStyles}
            className="relative flex items-center justify-center rounded-[2rem] overflow-hidden px-6 py-16 md:px-8 md:py-24 lg:p-3"
          >
            <HeroContent
              tagline={tagline}
              heading={heading}
              description={description}
              buttons={buttons}
              image={image}
            />
          </motion.div>
          <motion.div
            style={motionCardsStyles}
            className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
          >
            {cards.map((card, index) => (
              <AnimatedCard
                key={index}
                card={card}
                index={index}
                scrollYProgress={scrollYProgress}
                isMenuCard={index === 0}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HeroContent = ({
  tagline,
  heading,
  description,
  buttons,
  image,
}: Pick<Props, "tagline" | "heading" | "description" | "buttons" | "image">) => (
  <>
    <div className="relative z-10 max-w-md text-center">
      <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
      <h2 className="mb-5 text-5xl font-bold text-text-alternative font-serif md:mb-6 md:text-7xl lg:text-8xl">
        {heading}
      </h2>
      <p className="text-text-alternative md:text-md">{description}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
        {buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
    <div className="absolute inset-0 z-0">
      <img src={image.src} className="size-full object-cover" alt={image.alt} />
      <div className="absolute inset-0 bg-background-primary/60" />
    </div>
  </>
);

const CardContent = ({
  card,
  variant = "mobile",
  isMenuCard = false,
}: {
  card: CardProps;
  variant?: "mobile" | "desktop";
  isMenuCard?: boolean;
}) => (
  <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
    <div className="mb-3 md:mb-4">
      <img src={card.image.src} className="size-12 object-cover" alt={card.image.alt} />
    </div>
    <h3
      className={`mb-3 text-4xl font-bold font-serif leading-[1.2] ${
        isMenuCard ? 'text-background-primary' : 'text-text-alternative'
      } md:mb-4 ${variant === 'desktop' ? 'md:text-5xl lg:text-6xl' : 'md:text-5xl'}`}
    >
      {card.heading}
    </h3>
    <p className={isMenuCard ? 'text-background-primary' : 'text-text-alternative'}>
      {card.description}
    </p>
    <div className="mt-6 flex items-center gap-4 md:mt-8">
      {isMenuCard ? (
        <>
          <Button {...card.button} className="text-background-primary hover:text-background-primary/80">
            Shqip <RxChevronRight className="ml-1" />
          </Button>
          <Button {...card.button} className="text-background-primary hover:text-background-primary/80">
            English <RxChevronRight className="ml-1" />
          </Button>
        </>
      ) : (
        <Button {...card.button} className="text-text-alternative hover:text-text-alternative/80">
          {card.button.title} <RxChevronRight className="ml-1" />
        </Button>
      )}
    </div>
  </div>
);

const AnimatedCard = ({
  card,
  index,
  scrollYProgress,
  isMenuCard = false,
}: {
  card: CardProps;
  index: number;
  scrollYProgress: MotionValue<number>;
  isMenuCard?: boolean;
}) => {
  const x = useTransform(
    scrollYProgress,
    [0, index * 0.01, 0.2 + index * 0.5, 1],
    ["100%", "100%", "0%", "0%"],
  );
  return (
    <motion.div
      style={{ 
        x,
        ...(isMenuCard ? {
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : {})
      }}
      className={`flex p-8 text-center rounded-[2rem] lg:max-w-[640px] ${
        isMenuCard 
          ? 'bg-[#F5F5F0]' 
          : 'border border-border-primary/20 bg-[#0C1F0C]'
      }`}
    >
      <CardContent card={card} variant="desktop" isMenuCard={isMenuCard} />
    </motion.div>
  );
};

export const Layout518Defaults: Props = {
  image: {
    src: balconyCloseup,
    alt: "Fresh Garden Restaurant Balcony",
  },
  tagline: "Welcome to Fresh Garden",
  heading: "Mediterranean cuisine meets fusion",
  description:
    "Experience the vibrant flavors of the Mediterranean at Fresh Garden. Join us for a delightful meal that celebrates fresh ingredients and culinary artistry.",
  buttons: [
    { 
      title: "Reserve a Table",
      className: "bg-button-primary text-text-alternative hover:bg-accent-primary rounded-full px-8 py-3"
    }
  ],
  cards: [
    {
      image: {
        src: menuEnglish,
        alt: "Menu Icon",
      },
      heading: "Our Menu",
      description:
        "Discover our diverse selection of Mediterranean dishes crafted with love and fresh ingredients.",
      button: {
        title: "View Menu",
        className: "text-background-primary hover:text-background-primary/80",
      },
    },
    {
      image: {
        src: menuAlbanian,
        alt: "Wine List Icon",
      },
      heading: "Wine Selection",
      description:
        "Pair your meal with our exquisite selection of European and local wines.",
      button: {
        title: "Wine List",
        className: "text-text-alternative hover:text-text-alternative/80",
      },
    },
  ],
};
