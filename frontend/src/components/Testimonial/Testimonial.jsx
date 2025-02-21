import React from "react";
import Slider from "react-slick";
import { FaHome } from "react-icons/fa";

const testimonialData = [
  {
    id: 1,
    name: "Masand Ghadi",
    text: "Hamare gaon me Rajkumar ji ke yogdan se Kumbh Yatra bahut suvidhajanak bani hai.",
  },
  {
    id: 2,
    name: "Ekhu",
    text: "Rajkumar ji ne hamare gaon ke logon ke liye ek bahut hi shandar yatra ka ayojan kiya hai.",
  },
  {
    id: 3,
    name: "Mathura",
    text: "Rajkumar ji ne hamare gaon ke logon ke liye ek bahut hi shandar yatra ka ayojan kiya hai.",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10 bg-gray-100">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
          <div className="text-center py-4 pt-16">
              <p
                style={{ color: "#ea580c" }}
                className="text-xl font-bold text-orange-600 p relative inline-block"
              >
                Hamare Gaon
              </p>
              <h1 className="text-4xl font-semibold" style={{ fontFamily: "'Poppins', cursive" }}>
                Tehsil Mart Mathura
              </h1>
            </div>
            <p className="text-xs text-gray-400">
              Hamare gaon ke logon ke anubhav jo hamare sewa aur samarthan se prabhavit hue hain.
            </p>
          </div>
          {/* testimonial section */}
          <div data-aos="zoom-in" data-aos-duration="300" className="grid grid-cols-1 max-w-[800px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 mx-4 rounded-xl bg-orange-100 relative cursor-pointer transition duration-300">
                      <div className="p-4 bg-orange-600 rounded-full text-white">
                        <FaHome size={40} />
                      </div>
                      <h1 className="text-xl font-bold text-orange-600 hover:text-white transition duration-300">
                        {name}
                      </h1>
                      {/* <p className="text-gray-700 hover:text-white transition duration-300 text-sm">
                        {text}
                      </p> */}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
