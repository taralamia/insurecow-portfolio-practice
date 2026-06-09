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

      <Banner />

      <Services />

      

      <AboutUs />
    </>
  );
}
