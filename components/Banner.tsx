"use client";
import React, { useState, useEffect } from "react";
import { FaCow } from "react-icons/fa6";

export default function Banner() {
  const bannerData = [
    {
      imgUrl: "/ai smart.jpg",
      heading: (
        <>
          AI Detects Problems, <br />
          <span className="text-[#22c55e] relative inline-block group-hover:text-[#4ade80] transition-colors duration-300">
            We Protect
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#22c55e]/20 -z-10 group-hover:bg-[#22c55e]/40 transition-all duration-300" />
          </span>{" "}
          Your Cattle
        </>
      ),
      subtext: "Experience next-generation livestock security driven by advanced AI muzzle recognition, regular veterinary audits, and automated insurance layers."
    },
    {
      imgUrl: "/ai_muzzle_BqmmWF0.png",
      heading: (
        <>
          AI Muzzle Biometric <br />
          <span className="text-[#22c55e] relative inline-block group-hover:text-[#4ade80] transition-colors duration-300">
            Recognition
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#22c55e]/20 -z-10 group-hover:bg-[#22c55e]/40 transition-all duration-300" />
          </span>{" "}
          Technology
        </>
      ),
      subtext: "Unique muzzle print identification patterns ensure precise tracking, preventing fraud and establishing true ownership profiles seamlessly."
    },
    {
      imgUrl: "/insurance.jpg",
      heading: (
        <>
          Smart Livestock <br />
          <span className="text-[#22c55e] relative inline-block group-hover:text-[#4ade80] transition-colors duration-300">
            Insurance
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#22c55e]/20 -z-10 group-hover:bg-[#22c55e]/40 transition-all duration-300" />
          </span>{" "}
          Coverage
        </>
      ),
      subtext: "Mitigate agricultural risks with optimized insurance infrastructure designed specifically to uplift and safeguard underserved farming households."
    },
    {
      imgUrl: "/vetDoctor.jpg",
      heading: (
        <>
          Regular Veterinary <br />
          <span className="text-[#22c55e] relative inline-block group-hover:text-[#4ade80] transition-colors duration-300">
            Audits &
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#22c55e]/20 -z-10 group-hover:bg-[#22c55e]/40 transition-all duration-300" />
          </span>{" "}
          Health Care
        </>
      ),
      subtext: "Continuous monitoring alongside strategic development partners ensures timely healthcare delivery, increasing cattle productivity."
    }
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
 
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      
      setIsTransitioning(true);

      setTimeout(() => {
       
        setCurrentImgIndex((prevIndex) =>
          prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
        );
        
        setIsTransitioning(false);
      }, 500); 

    }, 5000); 

    return () => clearInterval(imgInterval);
  }, [bannerData.length]);

  return (
    <section className="relative w-full bg-[#f4f2ea] py-20 lg:py-32 overflow-hidden flex items-center">
      {/* Background Subtle Shape Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10" />

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
      
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 group cursor-default">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1e3a1e]/10 text-[#1e3a1e] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse group-hover:bg-[#1e3a1e]/20 transition-all duration-300">
            <span>
              <FaCow className="text-black w-8 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </span>{" "}
            Smart Livestock Protection
          </div>

          
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e3a1e] leading-[1.15] tracking-tight 
            transition-all duration-700 ease-in-out transform group-hover:scale-[1.01] group-hover:translate-x-1
            ${isTransitioning ? "opacity-0 translate-y-4 blur-sm" : "opacity-100 translate-y-0 blur-none"}`}
          >
            {bannerData[currentImgIndex].heading}
          </h1>

          
          <p 
            className={`text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed min-h-[84px]
            transition-all duration-700 ease-in-out delay-75 group-hover:text-gray-800
            ${isTransitioning ? "opacity-0 translate-y-4 blur-sm" : "opacity-100 translate-y-0 blur-none"}`}
          >
            {bannerData[currentImgIndex].subtext}
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              type="button"
              className="select-none rounded-xl bg-[#1e3a1e] py-4 px-8 text-center font-sans text-sm font-bold uppercase text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:bg-[#153015] hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100"
            >
              Invest Now 🚀
            </button>
            <button
              type="button"
              className="select-none rounded-xl border-2 border-gray-300 bg-white/50 backdrop-blur-sm py-4 px-8 text-center font-sans text-sm font-bold uppercase text-gray-700 transition-all duration-300 hover:bg-[#1e3a1e] hover:text-white hover:border-[#1e3a1e] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Auto-Changing Animated Cow Images */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          {/* Inner Decorative Background Shape */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#22c55e]/20 to-transparent rounded-3xl rotate-3 scale-105 blur-sm" />

          {/* Main Showcase Wrapper with Continuous Floating Animation */}
          <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-[float_4s_ease-in-out_infinite]">
            {bannerData.map((data, index) => (
              <img
                key={index}
                src={data.imgUrl}
                alt={`AI Cattle Detection ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentImgIndex
                    ? "opacity-100 z-10 scale-100 rotate-0"
                    : "opacity-0 z-0 scale-105 rotate-1 blur-sm"
                }`}
              />
            ))}

            
            <div className="absolute bottom-4 right-4 flex gap-1.5 z-20 bg-black/40 backdrop-blur-sm p-1.5 rounded-full">
              {bannerData.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 dynamic-dot ${
                    currentImgIndex === idx
                      ? "w-5 bg-[#22c55e]"
                      : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}