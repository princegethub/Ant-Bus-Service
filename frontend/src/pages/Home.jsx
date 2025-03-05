import React from "react";
import Hero from "../components/Hero/Hero";

import BlogsComp from "../components/Blogs/BlogsComp";

import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";

import BannerImg from "@/assets/banneImage.jpg";
import HeroBanner from "@/assets/banner.webp";

import OrderPopup from "../components/OrderPopup/OrderPopup";
import "../index.css";
import FeaturesSection from "./FeaturesSection";
import OurGallery from "./OurGallery";
import Organizer from "./Orgainizer";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
  return (
    <>
      <div>
        <div className="h-screen  w-full  relative overflow-hidden shadow-video-wrapper">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F56900] to-transparent w-[100%]"></div>
          {/* 
  <video
    autoPlay
    loop
    muted
    className="absolute right-0 -top-50 h-[1000px] w-full object-cover shadow-video"
  >
    <source src={NatureVid} type="video/mp4" />
  </video> */}

          <img
            src={HeroBanner}
            alt=""
            className="absolute right-0 h-screen w-full object-contain shadow-video "
          />

          <Hero />
        </div>

        {/* <Places handleOrderPopup={handleOrderPopup} /> */}
        {/* <Organizer /> */}
        <FeaturesSection />
        {/* <BannerPic img={BannerImg} /> */}
        <BlogsComp />
        <OurGallery />
        <Banner />
        <BannerPic img={BannerImg} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;


// Rajkumar sharma 8

// masand ghadi

// Tehsil mart mathura