import Image from "next/image";
import Header from "@/components/Header"

import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Mission from "@/components/Mission"
import Model from "@/components/Model";
import Model2 from "@/components/Model2"
// import Model1 from "@/components/Model1"
export default function Home() {
  return (
    <div>
      <Hero/>
      <Header/>
   
      <Mission/>
      <Features/>
      {/* <Model1/> */}
      {/* <Model/> */}
      <Model/>
      <Model2/>
    </div>
  );
}
