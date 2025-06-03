import React from "react";
import { Navbar13 } from "../home/components/Navbar13";
import { Career4 } from "./components/Career4";
import { Faq6 } from "../home/components/Faq6";
import { Footer3 } from "../home/components/Footer3";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-[#3E5622]">
      <Navbar13 />
      <Career4 />
      <Faq6 />
      <Footer3 />
    </div>
  );
}
