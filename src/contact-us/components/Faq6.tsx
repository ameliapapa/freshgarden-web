"use client";

import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxPlus } from "react-icons/rx";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Faq6 = (props: Faq6Props) => {
  const { heading, description, button, questions } = {
    ...Faq6Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
          <div className="mt-6 md:mt-8">
            <Button {...button}>{button.title}</Button>
          </div>
        </div>
        <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border-primary px-5 md:px-6"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
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
    "Find answers to common questions about our reservations, menu options, and special requests.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
  questions: [
    {
      title: "How do I reserve?",
      answer:
        "You can easily make a reservation by visiting our website or calling us directly. We recommend booking in advance, especially during peak hours. Our friendly staff is ready to assist you with any special requests.",
    },
    {
      title: "What's on the menu?",
      answer:
        "Our menu features a delightful selection of Mediterranean dishes made from fresh, high-quality ingredients. From savory appetizers to delectable desserts, there's something for everyone. Check out our full menu online for all the delicious options.",
    },
    {
      title: "Can I make changes?",
      answer:
        "Yes, we gladly accommodate special requests and dietary restrictions. Please inform us when making your reservation or upon arrival. Our chefs are happy to customize dishes to suit your needs.",
    },
    {
      title: "Do you offer takeout?",
      answer:
        "Absolutely! We offer takeout for all menu items. Simply place your order online or by phone, and we'll have it ready for you to enjoy at home.",
    },
    {
      title: "What are the hours?",
      answer:
        "We are open for lunch and dinner, with hours varying by day. Please check our website for the most up-to-date hours of operation. We look forward to welcoming you!",
    },
  ],
};
