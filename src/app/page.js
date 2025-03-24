import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Products/>
    </div>
  );
}
