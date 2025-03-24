import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Brief from "@/components/Brief";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Products/>
      <Brief/>
      <Instagram/>
    </div>
  );
}
