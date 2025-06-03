"use client";

import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import logo from "../../assets/fresh_garden_logo_256.png";

export function Footer3() {
  return (
    <footer id="relume" className="text-text-alternative px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="/">
                <img
                  src={logo}
                  alt="Fresh Garden Restaurant"
                  className="inline-block w-16"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Address:</p>
              <p className="mb-5 text-sm md:mb-6">
                Rruga Brigada VIII Ndertesa 8, H16, Ap1 Tiranë 1019, Albania
              </p>
              <p className="mb-1 text-sm font-semibold">Contact:</p>
              <a
                href="tel:+355672040737"
                className="block text-sm underline decoration-text-alternative underline-offset-1 hover:text-text-alternative/80"
              >
                +355 672040737
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="https://www.instagram.com/freshgarden.al/" target="_blank" rel="noopener noreferrer" className="hover:text-text-alternative/80">
                <BiLogoInstagram className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="/menu?lang=en" className="hover:text-text-alternative/80">Menu Overview</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/wine-list" className="hover:text-text-alternative/80">Wine List</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/#reservation" className="hover:text-text-alternative/80">Reservation Info</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="/contact-us" className="hover:text-text-alternative/80">Contact Us</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/catering" className="hover:text-text-alternative/80">Catering Services</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/join-us" className="hover:text-text-alternative/80">Join Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-text-alternative/20" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 Fresh Garden Restaurant. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li>
              <a href="/privacy" className="underline decoration-text-alternative underline-offset-1 hover:text-text-alternative/80">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="underline decoration-text-alternative underline-offset-1 hover:text-text-alternative/80">Terms of Service</a>
            </li>
            <li>
              <a href="/cookies" className="underline decoration-text-alternative underline-offset-1 hover:text-text-alternative/80">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
