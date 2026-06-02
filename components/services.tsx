"use client"
import React, { useState } from "react";


interface Service {
  image: string;
  title: string;
  desc: string;
}

export default function Services() {
  const serviceData: Service[] = [
    { 
      image: "/insurance.jpg", 
      title: "Insurance Support", 
      desc: "Get secure and reliable insurance solutions tailored to your professional needs. Our automated platform provides seamless claim logging, instant policy verification, and active monitoring to ensure safety and fraud prevention for livestock and properties." 
    },
    { 
      image: "/vetDoctor.jpg", 
      title: "Veterinary Care", 
      desc: "Connect with expert veterinary doctors instantly for premium livestock health care. This service features real-time scheduling, digitized prescriptions, video consultations, and instant emergency alerts for your farm or animals." 
    },
    { 
      image: "/ai_muzzle_BqmmWF0.png", 
      title: "AI Analysis", 
      desc: "Smart AI-powered muzzle recognition and data tracking for advanced analytics. Leveraging deep learning and machine learning models, we accurately identify unique livestock features, automate tracking, and maintain highly secure biometric logs." 
    },
    { 
      image: "/ai smart.jpg", 
      title: "Smart Monitoring", 
      desc: "Real-time monitoring tools to optimize operations and maximize your performance. Access detailed analytics dashboards, automated report generators, and sensor-driven alert systems custom-built for high-scale enterprise workflows." 
    },
  ];

  
  const [activeModalData, setActiveModalData] = useState<Service | null>(null);

  return (
    <div className="py-12 bg-slate-900 relative">
      
     
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white tracking-wide uppercase">Our Services</h2>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {serviceData.map((service, index) => (
          <div 
            key={index} 
            className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transform hover:scale-105 transition duration-500 mb-8 md:mb-0"
          >
            {/* card img section */}
            <div className="relative mx-4 -mt-6 h-44 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* card text */}
            <div className="p-6 flex-grow">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {service.title}
              </h5>
              <p className="block font-sans text-sm font-light leading-relaxed text-gray-600 antialiased">
               
                {service.desc.substring(0, 60)}...
              </p>
            </div>

            {/* button */}
            <div className="p-6 pt-0 mt-auto">
              <button 
                onClick={() => setActiveModalData(service)} 
                type="button" 
                className="w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {activeModalData && (
        <div 
          onClick={() => setActiveModalData(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}  
            className="relative flex w-full max-w-xl flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl p-6 transform scale-100 transition-all duration-300"
          >
            
            <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 shadow-md">
              <img 
                src={activeModalData.image} 
                alt={activeModalData.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mb-4 font-sans text-2xl font-bold leading-snug text-gray-900">
              {activeModalData.title}
            </h3>

           
            <p className="mb-6 font-sans text-base font-light leading-relaxed text-gray-600 antialiased max-h-60 overflow-y-auto pr-2">
              {activeModalData.desc}
            </p>

          
            <div className="flex justify-end">
              <button 
                onClick={() => setActiveModalData(null)} 
                type="button" 
                className="select-none rounded-lg bg-red-400 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-400/20 transition-all hover:bg-red-500 hover:shadow-lg focus:opacity-[0.85]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}