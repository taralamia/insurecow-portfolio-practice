"use client";
import React from "react";
import Link from "next/link";
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
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-gradient-to-r from-white/20 via-white/10 to-white/20 sticky top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-100">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-500">
          <a className="flex items-center" href="/">
            <img
              alt="InsureCow"
              width="200"
              height="90"
              src="https://website-v1.insurecow.com/media/logos/insurelogo.webp"
            />
          </a>
          {/*Desktop Menu*/}
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white font-mono capitalize hover:text-green-200 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
/*
in css if any element position is relative and if there is a span element which position is absolute then the span element will be positioned relative to the nearest positioned. This allows for more precise control over the placement of the span element within its parent container.


*/
