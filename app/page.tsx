import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div id="home" className="scroll-mt-24"> */}
        <Banner />
      {/* </div>
      <div id="services" className="scroll-mt-24"> */}
        <Services />
      {/* </div>
      <div id="projects" className="scroll-mt-24"> */}
        <Projects />
      {/* </div>
      <div id="about" className="scroll-mt-24"> */}
        <AboutUs />
      {/* </div> */}

    {/* <ul className="space-y-4 text-gray-600 text-sm">
      <li>
    <a href="#home" className="hover:text-green-600 transition">
      About
    </a>
  </li>
  <li>
    <a href="#about" className="hover:text-green-600 transition">
      About
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-green-600 transition">
      Services
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-green-600 transition">
      Projects
    </a>
  </li>
</ul> */}
       <Footer />
    </>
  );
}
