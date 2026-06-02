"use client";
import React from "react";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "projects", href: "/projects" },
    { name: "about us", href: "/about" },
  ];
  return (
     <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-100">    
       <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-500">
        <a className="flex items-center" href="/">
          <img alt="InsureCow" width="100" height="50" src="https://website-v1.insurecow.com/media/logos/insurelogo.webp"/>
        </a>
       </div>
       </nav>
     </div> 
  );
}
