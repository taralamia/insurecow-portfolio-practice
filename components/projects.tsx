"use client"
import React, { useState, useEffect } from "react";
// Import your dataset path
import { projectData } from "@/lib/data/project-data";




export default function Projects() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect: Slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
       
        prevIndex >= projectData.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);
 

  return (
    <div className="max-w">
    <div className=" py-16 bg-[#f4f2ea] text-white overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-5xl font-bold tracking-tight leading-tight  text-green-950 ">Our Projects</h2>
      </div>

      {/* Main Slider Window Wrapper */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="overflow-hidden w-full">
          {/* Animated Track Line */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
            
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {projectData.map((project) => (
              <div
                key={project.id}
                
                className="w-full md:w-1/3 flex-shrink-0 px-4"
              >
                <div className="flex flex-col bg-[#1f2631] rounded-2xl overflow-hidden shadow-xl border border-gray-800 h-full transform hover:scale-[1.01] transition duration-300">
                  
                  {/* Top Image Section with Status Badge */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <span className={`absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md ${
                      project.extra_data?.isSold ? "bg-red-600" : "bg-[#15803d]"
                    }`}>
                      {project.extra_data?.isSold ? "Sold Out" : "Completed"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f2631] via-transparent to-transparent"></div>
                  </div>

                  {/* Middle Section: Name, Location, and Investment */}
                  <div className="px-5 py-4 flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-white">{project.name}</h4>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <span></span> {project.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] block text-gray-400 uppercase tracking-wider">Investment</span>
                      
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="mx-5 border-t border-gray-700/50"></div>

                  {/* Bottom Section: Detailed financial breakdown grid */}
                  <div className="p-5 space-y-3 text-xs text-gray-300 flex-grow">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Period</span>
                      <span className="font-medium">{project.investment_period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Return</span>
                      <span className="font-medium">
                        {project.expected_return_min}% - {project.expected_return_max}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Return</span>
                     
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

     
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: projectData.length - 2 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-6 bg-[#1e3a1e]" : "w-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}