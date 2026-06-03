import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Banner from "@/components/Banner";



export default function Home() {
   return (
    <>
    <Navbar/>
    <Banner/>
     <Services/>
<Projects/>
      </>
   );     
  }
