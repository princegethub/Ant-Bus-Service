import React from "react";
import Slider from "react-slick";
import Prince from "../../assets/testimonail/princedp.jpg";
import Rajkumar from "../../assets/testimonail/rajkumar.png";

const testimonialData = [
  {
    id: 1,
    name: "Prince Mishra",
    text: "Prince Mishra developed this entire website. His expertise in web development and design.",
    img: Prince,
  },
  {
    id: 2,
    name: "Raj Kumar",
    text: "Raj Kumar is the owner of Ant Ka Bus, providing free bus services for the Kumbh Mela.",
    img: Rajkumar,
  },
  {
    id: 3,
    name: "Sonu Jha",
    text: "Sonu Jha is a dedicated volunteer who has been instrumental in organizing the Kumbh Mela.",
    img: "https://picsum.photos/103/103",
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
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className="py-10 bg-gray-100"
      >
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <div className="text-center py-4 pt-16">
              <p
                style={{ color: "#ea580c" }}
                className="text-xl font-bold text-orange-600 p relative inline-block"
              >
                Testimonials
              </p>

              <h1
                className="text-4xl font-semibold"
                style={{ fontFamily: "'Poppins', cursive" }}
              >
                What Our Clients Say
              </h1>
            </div>
            <p className="text-xs text-gray-400">
              Hear from our satisfied clients who have experienced our
              exceptional services and support.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto w-24 h-24 object-cover"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
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
