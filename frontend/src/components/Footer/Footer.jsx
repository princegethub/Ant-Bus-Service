import React from "react";
import FooterLogo from "@/assets/logo.png";
import FooterImg from "@/assets/11852597.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "@/assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950 pt-2 relative overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full object-cover overflow-hidden w-full bg-repeat-x z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video> */}


        <img src={FooterImg} alt=""  className="absolute right-0 top-0 h-full object-cover overflow-hidden w-full bg-repeat-x z-[-1]"/>
          {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-l   from-[#F56900] to-transparent w-[100%]"></div>







        <div className="container">
          <div className="grid md:grid-cols-3 py-5 border-2 mt-8 border-blacks backdrop-blur-sm rounded-t-xl">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
              </h1>
              <p className="text-sm line-clamp-3 -tracking-tighter  opacity-80 font-light ">
                Welcome to our travel website! We are dedicated to providing you with the best travel experiences. Explore new destinations, enjoy seamless travel planning, and make unforgettable memories with us.
              </p>
              <br />
              <div className="flex items-center gap-3 text-gray-900 hover:text-orange-600">
                <FaLocationArrow />
                <p>B-128,Transport Nagar Sector 69 Noida Uttar Pardesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3 text-gray-900  hover:text-orange-600">
                <FaMobileAlt />
                <p>+91 9811992203</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#" className="text-gray-800 hover:text-orange-600">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-orange-600">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#" className="text-gray-800 hover:text-orange-600">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-slate-100">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-orange-600 space-x-1 text-slate-100"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-slate-200">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-orange-600 space-x-1 text-slate-300"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3 text-slate-300">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-gray-600 space-x-1 text-slate-300"
                      >
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 text-slate-300">
              @copyright 2025 All rights reserved || Made with ❤️ by Prince
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
