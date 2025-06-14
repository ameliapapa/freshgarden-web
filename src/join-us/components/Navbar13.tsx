"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import logo from "../../assets/fresh_garden_logo_256.png";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: ButtonProps;
};

export type Navbar13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar13 = (props: Navbar13Props) => {
  const { logo, navLinks, button } = {
    ...Navbar13Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery("(max-width: 991px)");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScroll = latest;
    if (currentScroll <= 0) {
      setIsVisible(true);
      return;
    }
    
    if (Math.abs(currentScroll - lastScrollY.current) < 50) {
      return;
    }

    setIsVisible(currentScroll < lastScrollY.current);
    lastScrollY.current = currentScroll;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="relume"
      className="relative z-[999] mx-auto mt-5 flex w-full items-start justify-center bg-[#3E5622] px-[5%] md:mt-6 lg:mx-[5%] lg:w-auto lg:px-0"
    >
      <div className="flex min-h-16 w-full items-center justify-between gap-4 rounded-[2rem] border border-border-primary/20 bg-background-dark px-5 md:min-h-18 md:px-8 lg:w-auto">
        <a href={logo.url}>
          <img src={logo.src} alt={logo.alt} className="w-16" />
        </a>
        <motion.div
          variants={{
            open: { height: "var(--height, 100vh)" },
            close: { height: "auto" },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:static lg:left-auto lg:right-auto lg:top-auto lg:w-auto lg:overflow-visible lg:[--height:auto]"
        >
          <motion.div
            variants={{
              open: { y: 0 },
              close: { y: "var(--translate-y, -100%)" },
            }}
            animate={isMobileMenuOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-0 mx-auto min-w-[200px] justify-self-center bg-background-dark px-[5%] text-center lg:static lg:inset-auto lg:mx-0 lg:px-0 lg:text-left lg:[--translate-y:0%]"
          >
            <div
              ref={menuRef}
              className="flex w-full flex-col border-t border-border-primary/20 bg-background-dark p-5 md:p-8 lg:w-auto lg:flex-row lg:border-none lg:bg-transparent lg:p-0"
            >
              {navLinks.map((navLink, index) =>
                navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                  <SubMenu key={index} navLink={navLink} isMobile={isMobile} />
                ) : (
                  <a
                    key={index}
                    href={navLink.url}
                    className="relative block py-3 text-center text-md text-text-alternative hover:text-text-alternative/80 lg:px-4 lg:py-2 lg:text-left lg:text-base"
                  >
                    {navLink.title}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-[#4A6429] text-text-alternative hover:bg-[#567530] rounded-full px-6 py-2 text-sm font-medium">
            {button.title}
          </Button>
          <button
            ref={buttonRef}
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-text-alternative"
              animate={isMobileMenuOpen ? "open" : "close"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-text-alternative"
              animate={isMobileMenuOpen ? "open" : "close"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-text-alternative"
              animate={isMobileMenuOpen ? "open" : "close"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

const SubMenu = ({ navLink, isMobile }: { navLink: NavLink; isMobile: boolean }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="relative flex w-full items-center justify-center gap-4 whitespace-nowrap py-3 text-center text-md text-text-alternative hover:text-text-alternative/80 lg:gap-2 lg:px-4 lg:py-2 lg:text-left lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          variants={{
            rotate: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotate" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown className="text-text-alternative" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            variants={{
              open: {
                opacity: "var(--opacity-open, 100%)",
                y: "var(--translate-y-open, 0%)",
                visibility: "visible",
                height: "auto",
              },
              close: {
                opacity: "var(--opacity-close, 100%)",
                y: "var(--translate-y-close, 0%)",
                visibility: "hidden",
                height: "var(--height, 0)",
              },
            }}
            transition={{ duration: 0.2 }}
            className="static flex w-full min-w-full flex-col overflow-hidden whitespace-nowrap border-0 bg-[#3E5622] p-0 lg:absolute lg:mt-2 lg:overflow-visible lg:rounded-xl lg:border lg:border-border-primary/20 lg:p-2 lg:[--height:auto] lg:[--opacity-close:0%] lg:[--opacity-open:100%] lg:[--translate-y-close:25%] lg:[--translate-y-open:0%]"
          >
            {navLink.subMenuLinks?.map((subMenuLink, subIndex) => (
              <a
                key={subIndex}
                href={subMenuLink.url}
                className="px-0 py-3 text-center text-text-alternative hover:text-text-alternative/80 lg:px-4 lg:py-2 lg:text-left"
              >
                {subMenuLink.title}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar13Defaults: Props = {
  logo: {
    url: "/",
    src: logo,
    alt: "Fresh Garden Restaurant",
  },
  navLinks: [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/contact",
      title: "Contact",
    },
    {
      url: "/wine-list",
      title: "Wine List",
    },
    {
      url: "#",
      title: "Menu",
      subMenuLinks: [
        {
          url: "/menu?lang=en",
          title: "English",
        },
        {
          url: "/menu?lang=al",
          title: "Albanian",
        },
      ],
    },
  ],
  button: {
    title: "Reserve",
    size: "sm",
  },
};

const topLineVariants = {
  open: {
    translateY: 8,
    rotate: 45,
    transition: { duration: 0.3 },
  },
  close: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  close: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    rotate: -45,
    transition: { duration: 0.3 },
  },
  close: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
