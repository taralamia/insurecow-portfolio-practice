import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Projects from "@/components/projects";



export default function Home() {
   return (
    <>
    <Navbar/>
     <Services/>
<Projects/>
      </>
   );     
  }
