import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import FreeBus from "@/assets/RajkumarSir.jpg";
import "../index.css";

const features = [
  {
    title: "Mathura Tehsil Seva",
    description:
      "Rajkumar Sir, Mathura Tehsil ke Ekhu aur Masand Ghadi gaon se hain. Unka lakshya hai apne gaon ke logon ke liye behtareen seva dena.",
  },
  {
    title: "Nishulk Kumbh Yatra",
    description:
      "Ant Bus Service ke madhyam se, Rajkumar Sir apne gaon ke yatriyon ke liye Kumbh Mela tak 100% free seva prastut kar rahe hain.",
  },
  {
    title: "Gaon Ke Vikas Mein Yogdaan",
    description:
      "Sirf bus seva hi nahi, Rajkumar Sir apne gaon ke unnati ke liye bhi kai tarike se yogdaan de rahe hain.",
  },
];

const Organizer = () => {
  return (
    <section id="features" className="w-full py-28 bg-gray-100 text-gray-900">
      <div className="text-center mb-12">
        <p
          style={{ color: "#ea580c" }}
          className="text-xl font-bold text-orange-600 p relative inline-block"
        >
          Rajkumar Sir
        </p>
        <h1
          className="text-4xl font-semibold"
          style={{ fontFamily: "'Poppins', cursive" }}
        >
        Organizer Of The Event
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center w-4/5 mx-auto">
        <div className="w-full md:w-2/4 flex justify-start items-center rounded-2xl overflow-hidden relative mt-16 sm:mt-8 md:mt-0">

        <div className="w-full h-[450px] relative">
          <img
            src={FreeBus}
            alt="Feature"
            className="h-[450px] pl-10 rounded-2xl w-auto"
            style={{ maxWidth: "100%" }}
          />
          
              
        </div>


        </div>



        <div className="w-full md:w-2/4 space-y-8 text-center md:text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center space-x-4"
            >
              <div className="p-4 border border-orange-600 rounded-lg text-orange-600 mb-4 md:mb-0">
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
      </div>
    </section>
  );
};

export default Organizer;
