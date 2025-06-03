"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  questions: QuestionsProps[];
};

export type Faq6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Faq6 = (props: Faq6Props) => {
  const { heading, description, questions } = {
    ...Faq6Defaults,
    ...props,
  };
  return (
    <section id="relume" className="bg-[#2B3C1B] text-text-alternative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-[1fr,1.5fr] md:gap-x-12 lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-5xl font-heading font-bold md:mb-6 md:text-6xl">
            {heading}
          </h2>
          <p className="text-text-alternative/80 text-lg">{description}</p>
        </div>
        <Accordion 
          type="multiple" 
          className="grid items-start justify-stretch gap-4 [&_[data-radix-collection-item]]:border-none [&_button]:border-none"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-[3rem] bg-[#3B4F28] px-8 py-5 transition-all hover:bg-[#445A2E] border-none"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-6 shrink-0 text-text-alternative transition-transform duration-300" />
                }
                className="font-sans text-lg [&[data-state=open]>svg]:rotate-45 border-none"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2 text-text-alternative/80 font-sans">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq6Defaults: Props = {
  heading: "FAQs",
  description:
    "Find answers to your questions about reservations, menu items, and special requests.",
  questions: [
    {
      title: "How do I reserve?",
      answer:
        "You can easily make a reservation by visiting our website or calling us directly. We recommend booking in advance, especially during peak hours. Our friendly staff is ready to assist you with any special requests.",
    },
    {
      title: "Are menu items customizable?",
      answer:
        "Yes, we gladly accommodate special requests and dietary restrictions. Please inform us when making your reservation or upon arrival. Our chefs are happy to customize dishes to suit your needs.",
    },
    {
      title: "Do you offer takeout?",
      answer:
        "Absolutely! We offer takeout for all menu items. Simply place your order online or by phone, and we'll have it ready for you to enjoy at home.",
    },
    {
      title: "What are your hours?",
      answer:
        "We are open for lunch and dinner, with hours varying by day. Please check our website for the most up-to-date hours of operation. We look forward to welcoming you!",
    },
    {
      title: "Can I host events?",
      answer:
        "Yes, we offer private dining and event hosting services. Our venue can accommodate various group sizes, and we'll work with you to create a memorable dining experience for your special occasion.",
    },
  ],
};
