import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Projects from "@/components/projects";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Services />
      <Projects />
    </>
  );
}
