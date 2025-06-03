"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta15() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
              Join Our Fresh Garden Team
            </h1>
          </div>
          <div>
            <p className="text-text-alternative md:text-md">
              Are you passionate about food and hospitality? Join us at Fresh
              Garden and be part of a vibrant team dedicated to delivering
              exceptional dining experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Contact">Contact</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
