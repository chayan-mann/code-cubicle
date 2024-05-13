import Image from "next/image";
import Header from "@/components/Header"

import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Mission from "@/components/Mission"
export default function Home() {
  return (
    <div>
      <Hero/>
      <Header/>
   
      <Mission/>
      <Features/>
    </div>
  );
}
