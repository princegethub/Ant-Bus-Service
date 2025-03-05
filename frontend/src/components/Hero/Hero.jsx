import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import Bus from "@/assets/bus.png";
import BusLeft from "@/assets/bus left.png";
import Highway from "@/assets/highway.jpg";


const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center relative  overflow-hidden">
      {/* Main Content */}
      <div className="container w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between px-6 z-10">
        {/* Left Section (Text) */}
        <div className="w-full  sm:w-1/2 text-center     mt-20 sm:text-left space-y-6">
          <h1
            className="text-2xl text-white sm:text-4xl lg:text-2xl font-bold leading-tight mb-4"
            style={{
              fontFamily: "Playwrite CU",
              letterSpacing: 1,
              lineHeight: 0,
            }}
          >
            चलो कुंभ चले
          </h1>

          <h2
            className="text-white text-3xl sm:text-5xl lg:text-5xl font-medium mb-2"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
              lineHeight: 1,
            }}
          >
            Join Our Free Kumbh Yatra
          </h2>

          <p
            className="text-white text-lg sm:text-xl lg:text-sm font-light mb-6 -mt-12"
            style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: 2 }}
          >
            - Secure Your Seat Now and be part of this divine journey. Limited
            seats available, so act fast to ensure your spot!
          </p>

          <Link to="/booking">
            <button className="mt-4 border-2 border-white text-white  hover:bg-orange-700 hover:text-white transition-all duration-300 px-10 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl">
              Register Now
            </button>
          </Link>
        </div>

        {/* Right Section (Illustration) */}
        {/* <div className="w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0">
          <img
            src={BusIllustration}
            alt="Bus Illustration"
            className="w-full max-w-lg transform scale-110 hover:scale-105 transition-transform duration-500"
          />
        </div> */}
      </div>

      {/* Highway with Moving Buses */}
      {/* <div
        className="absolute bottom-0 left-0 w-full h-40 bg-contain bg-repeat-x"
        style={{ backgroundImage: `url(${Highway})` }}
      > */}
        {/* Left Bus */}
        {/* <img
          src={Bus}
          alt="Bus Moving Left"
          className="absolute left-[-100px] bottom-[-75px] animate-bus-left"
          style={{ width: "250px", height: "auto" }}
        /> */}


        {/* Right Bus (Rotated 180 degrees) */}
        {/* <img
          src={BusLeft}
          alt="Bus Moving Right"
          className="absolute right-[-200px] bottom-[-150px] animate-bus-right"
          style={{ width: "250px", height: "auto" }}
        />
      </div> */}

      {/* Overlay Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#F56900]/20 to-transparent z-0"></div>   */}
    </div>
  );
};

export default Hero;
