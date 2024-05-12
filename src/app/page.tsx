import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import TryUs from "@/components/TryUs"
import Features from "@/components/Features"
import Mission from "@/components/Mission"
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <TryUs/>
      <Mission/>
    </div>
  );
}
