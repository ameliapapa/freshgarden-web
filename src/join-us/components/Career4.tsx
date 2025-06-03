"use client";

import React from "react";
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type JobProps = {
  title: string;
  location: string;
  description: string;
  button: ButtonProps;
  url: string;
};

type JobDepartmentProps = {
  title: string;
  jobs: JobProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  jobDepartments: JobDepartmentProps[];
};

export type Career4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Career4 = (props: Career4Props) => {
  const { tagline, heading, description, jobDepartments } = {
    ...Career4Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Accordion type="multiple">
          {jobDepartments.map((jobDepartment, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="first:border-t-0">
              <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {jobDepartment.title}
              </AccordionTrigger>
              <AccordionContent className="mb-6 flex flex-col gap-6 pb-0 md:mb-8 md:gap-8">
                {jobDepartment.jobs.map((job, index) => (
                  <div key={index} className="border border-border-primary/20 bg-background-dark p-6 md:p-8">
                    <div className="mb-5 sm:flex sm:items-start sm:justify-between md:mb-6">
                      <div className="mb-5 sm:mb-0">
                        <h3 className="text-xl font-bold md:text-2xl">{job.title}</h3>
                        <p className="md:text-md">{job.location}</p>
                      </div>
                      <div>
                        <Button {...job.button} asChild>
                          <a href={job.url}>{job.button.title}</a>
                        </Button>
                      </div>
                    </div>
                    <p>{job.description}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const defaultJobButton: ButtonProps = {
  title: "Apply Now",
  variant: "secondary",
  size: "sm",
};

const kitchenJobs: JobProps[] = [
  {
    title: "Head Chef",
    location: "Tirana, Albania",
    description: "We're looking for an experienced Head Chef to lead our kitchen team and maintain our high standards of Italian cuisine. Must have 5+ years of experience in Italian restaurants.",
    url: "/join-us/head-chef",
    button: defaultJobButton,
  },
  {
    title: "Sous Chef",
    location: "Tirana, Albania",
    description: "Join our team as a Sous Chef and help create exceptional Italian dishes. Must have 3+ years of experience in a similar role.",
    url: "/join-us/sous-chef",
    button: defaultJobButton,
  },
  {
    title: "Line Cook",
    location: "Tirana, Albania",
    description: "Join our culinary team as a Line Cook, preparing delicious Mediterranean dishes. You will work closely with the Head Chef and other kitchen staff to ensure high-quality food.",
    url: "/join-us/line-cook",
    button: defaultJobButton,
  },
  {
    title: "Prep Cook",
    location: "Tirana, Albania",
    description: "We are seeking a Prep Cook to assist in food preparation and ensure the kitchen runs smoothly. You will help with chopping, measuring, and organizing ingredients.",
    url: "/join-us/prep-cook",
    button: defaultJobButton,
  },
  {
    title: "Dishwasher",
    location: "Tirana, Albania",
    description: "We are looking for a reliable Dishwasher to support our kitchen team. You will ensure all dishes and kitchen equipment are cleaned and sanitized.",
    url: "/join-us/dishwasher",
    button: defaultJobButton,
  },
];

const serviceJobs: JobProps[] = [
  {
    title: "Server",
    location: "Tirana, Albania",
    description: "Looking for passionate servers with excellent customer service skills. Experience in fine dining is preferred.",
    url: "/join-us/server",
    button: defaultJobButton,
  },
  {
    title: "Bartender",
    location: "Tirana, Albania",
    description: "Seeking experienced bartenders with knowledge of cocktails and wines. Must have 2+ years of experience.",
    url: "/join-us/bartender",
    button: defaultJobButton,
  },
  {
    title: "Host/Hostess",
    location: "Tirana, Albania",
    description: "Join our team as a Host/Hostess to welcome and seat guests, manage reservations, and ensure a great first impression.",
    url: "/join-us/host",
    button: defaultJobButton,
  },
];

const supportJobs: JobProps[] = [
  {
    title: "Cleaning Staff",
    location: "Tirana, Albania",
    description: "We are seeking detail-oriented cleaning staff to maintain the cleanliness and hygiene of our restaurant. Must be reliable and thorough.",
    url: "/join-us/cleaning",
    button: defaultJobButton,
  },
];

export const Career4Defaults: Props = {
  tagline: "Careers",
  heading: "Job Openings",
  description: "Join our team and be part of a thriving Italian dining experience!",
  jobDepartments: [
    {
      title: "Kitchen Staff",
      jobs: kitchenJobs,
    },
    {
      title: "Service Staff",
      jobs: serviceJobs,
    },
    {
      title: "Support Staff",
      jobs: supportJobs,
    },
  ],
};
