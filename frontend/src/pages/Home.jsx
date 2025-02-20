import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/kumbh.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";

import BannerImg from "@/assets/maha-kumbh-banner.jpg";

import OrderPopup from "../components/OrderPopup/OrderPopup";
import '../index.css'
import FeaturesSection from "./FeaturesSection";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
      <div className="h-screen relative overflow-hidden shadow-video-wrapper">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#F56900] to-transparent w-[60%]"></div>

  <video
    autoPlay
    loop
    muted
    className="absolute right-0 -top-50 h-[1000px] w-full object-cover shadow-video"
  >
    <source src={NatureVid} type="video/mp4" />
  </video>

  <Hero />
</div>


        {/* <Places handleOrderPopup={handleOrderPopup} /> */}
        <FeaturesSection />
        {/* <BannerPic img={BannerImg} /> */}
        <BlogsComp />
        <Banner />
        <BannerPic img={BannerImg} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
