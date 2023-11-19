import Works from "@/components/Works";
import Skill from "@/components/Skill";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Skill />
      <Experience />
      <About /> 
      <Footer />
    </>
  );
}
