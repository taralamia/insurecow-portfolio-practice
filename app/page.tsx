import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Projects from "@/components/projects";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="scroll-mt-24">
        <Banner />
      </div>
      <div id="services" className="scroll-mt-24">
        <Services />
      </div>
      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>
      <div id="about" className="scroll-mt-24">
        <AboutUs />
      </div>
    </>
  );
}
