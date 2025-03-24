import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Brief from "@/components/Brief";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <section  id='home'>
        <Hero/>
      </section>
      <section  id='about'>
        <About/>
      </section>
      <section  id='products'>
        <Products/>
      </section>
      <Brief/>
      <Instagram/>
      <Footer/>
    </div>
  );
}
