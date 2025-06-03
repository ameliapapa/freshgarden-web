import React from "react";
import { Navbar13 } from "../home/components/Navbar13";
import { Contact16 } from "./components/Contact16";
import { Faq6 } from "../home/components/Faq6";
import { Footer3 } from "../home/components/Footer3";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#3E5622]">
      <Navbar13 />
      <Contact16 />
      <Faq6 />
      <Footer3 />
    </div>
  );
}
