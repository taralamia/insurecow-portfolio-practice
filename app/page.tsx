import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/Service";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />
      <Services />
      <Projects />
      <AboutUs />
    </>
  );
}
