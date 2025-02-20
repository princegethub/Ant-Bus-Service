import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import FreeBus from '@/assets/freebus.png';
import "../index.css";

const features = [
  {
    title: "Travel Date",
    description:
      "The free bus departs for Kumbh Mela on Feb 25. Passengers must report at the designated pickup point on time.",
  },

  {
    title: "Pre Booking Online",
    description:
      "Secure your seat in advance for the free bus service and avoid long queues.",
  },
  {
    title: "100% Free Journey",
    description:
      "This service is completely free, allowing everyone to experience the Kumbh pilgrimage without any cost.",
  },

];


const FeaturesSection = () => {
  return (
    <section id="features" className="w-full py-28  bg-gray-100 text-gray-900">
      <div className="text-center mb-12">

        <p style={{color: '#ea580c'}} className="text-xl font-bold text-orange-600 p relative inline-block">
        Journey
        </p>

      
        <h1
          className="text-4xl font-semibold"
          style={{ fontFamily: "'Poppins', cursive" }}
        >
          Fast & Secure
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center w-4/5 mx-auto">
        <div className="w-full md:w-1/2 space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="p-4 border border-orange-600 rounded-lg text-orange-600">
                <FaShieldAlt size={30} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-orange-600">
                  {feature.title}
                </h1>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center relative  md:-right-[80px] mt-16 sm:mt-8 md:mt-0">
          <img
            src={FreeBus}
            alt="Feature"
            className="h-auto w-1/2 animate-bus"
            style={{
              maxWidth: "800px",
           
            
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
