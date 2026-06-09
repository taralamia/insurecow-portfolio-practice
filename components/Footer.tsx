import React from "react";
import Image from "next/image";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f4f5ed] text-gray-700 pt-16 pb-10">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2">

            {/* LOGO */}
<div className="bg-white px-5 py-3 rounded-br-[40px] rounded-tl-[40px] inline-block shadow-md">
  <div className="relative w-[160px] h-[55px]">
    <Image
      src="/companylogo.png"
      alt="InsureCow Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 leading-8 max-w-sm">
              InsureCow is a technology company that enables
              farmers and agri-businesses to maximize their
              profit and reduce risk through smart insurance.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6 text-2xl">

              <a
                href="https://www.facebook.com/share/1P4UStavgY/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.linkedin.com/company/insurecow/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-[#234b2c] mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div>
                <p className="font-medium">
                  Email
                </p>

                <p className="text-gray-600 text-sm">
                  info@insurecow.com
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Hotline
                </p>

                <p className="text-gray-600 text-sm">
                  +8801999467873
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Office Hours
                </p>

                <p className="text-gray-600 text-sm">
                  Sat-Thu, 10AM-6PM
                </p>
              </div>

            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="text-lg font-semibold text-[#234b2c] mb-5">
              Address
            </h3>

            <div className="space-y-6">

              <div>
                <p className="font-semibold">
                  Bangladesh
                </p>

                <p className="text-gray-600 leading-6 text-sm">
                  House 117, Road 5,
                  Block B, Niketon,
                  Dhaka, Bangladesh
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Singapore
                </p>

                <p className="text-gray-600 leading-6 text-sm">
                  192 Waterloo St.
                  #05-03 Skyline,
                  Singapore 187966
                </p>
              </div>

            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-lg font-semibold text-[#234b2c] mb-5">
              Product
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm">

              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition"
                >
                  Livestock Insurance
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition"
                >
                  Claims
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition"
                >
                  Dashboard
                </a>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-semibold text-[#234b2c] mb-5">
              Company
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm">

              <li>
                <a
                  href="/about_us"
                  className="hover:text-green-600 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/service"
                  className="hover:text-green-600 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/impact"
                  className="hover:text-green-600 transition"
                >
                  Impact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition"
                >
                  Careers
                </a>
              </li>

            </ul>
          </div>

          {/* PARTNERS & MEMBERSHIP */}
          <div>
            <h3 className="text-lg font-semibold text-[#234b2c] mb-5">
              Partners & Investors
            </h3>

            {/* LOGO GRID */}
            <div className="grid grid-cols-1 gap-1">

              {/* BAU */}<div className="flex justify-center items-center h-[80px]">
                <Image
                  src="/Bangladesh_Agriculture_University.png"
                  alt="Bangladesh Agriculture University"
                  width={95}
                  height={95}
                  className="object-contain contrast-125"
                />
              </div>

              {/* BRIDDHI */}
              <div className="flex justify-center items-center h-[80px]">
                <Image
                  src="/briddhi.png"
                  alt="Briddhi"
                  width={120}
                  height={70}
                  className="object-contain contrast-125"
                />
              </div>

              {/* SWISSCONTACT */}
<div className="flex justify-center items-center h-[60px] overflow-hidden">
                <Image
                  src="/swisscontact.png"
                  alt="Swisscontact"
                  width={120}
                  height={40}
                  className="object-contain contrast-125"
                />
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-gray-300 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2024 InsureCow. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="hover:text-green-600 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-green-600 transition"
            >
              Terms & Conditions
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;