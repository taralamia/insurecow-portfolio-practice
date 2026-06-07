"use client";
import React, { useState, useEffect } from "react";
import { FaCow } from "react-icons/fa6";

export default function Banner() {
  const bannerImages = [
    "/ai smart.jpg",
    "/ai_muzzle_BqmmWF0.png",
    "/insurance.jpg",
    "/vetDoctor.jpg",
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImgIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(imgInterval);
  }, [bannerImages.length]);

  return (
    <section className="relative w-full bg-[#f4f2ea] py-20 lg:py-32 overflow-hidden flex items-center">
      {/* Background Subtle Shape Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10" />

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Animated Typography & Content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1e3a1e]/10 text-[#1e3a1e] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse">
            <span>
              <FaCow className="text-black w-8 h-6" />
            </span>{" "}
            Something
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e3a1e] leading-[1.15] tracking-tight">
            AI Detects Problems, <br />
            <span className="text-[#22c55e] relative inline-block">
              We Protect
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#22c55e]/20 -z-10" />
            </span>{" "}
            Your Cattle
          </h1>

          {/* Subtext Description */}
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Experience next-generation livestock security driven by advanced AI
            muzzle recognition, regular veterinary audits, and automated
            insurance layers.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button
              type="button"
              className="select-none rounded-xl bg-[#1e3a1e] py-4 px-8 text-center font-sans text-sm font-bold uppercase text-white shadow-lg shadow-green-900/20 transition-all hover:bg-[#153015] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:opacity-[0.85]"
            >
              Invest Now 🚀
            </button>
            <button
              type="button"
              className="select-none rounded-xl border-2 border-gray-300 py-4 px-8 text-center font-sans text-sm font-bold uppercase text-gray-700 transition-all hover:bg-gray-100 active:opacity-[0.85]"
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
            {bannerImages.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`AI Cattle Detection ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImgIndex
                    ? "opacity-100 z-10 scale-100"
                    : "opacity-0 z-0 scale-105"
                }`}
              />
            ))}

            <div className="absolute bottom-4 right-4 flex gap-1.5 z-20 bg-black/40 backdrop-blur-sm p-1.5 rounded-full">
              {bannerImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentImgIndex === idx
                      ? "w-4 bg-white"
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
