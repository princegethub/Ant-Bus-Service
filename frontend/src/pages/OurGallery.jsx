import React from "react";
import Image1 from "@/assets/testimonail/gallery1.jpg";
import Image2 from "@/assets/testimonail/gallery2.jpg";
import Image3 from "@/assets/testimonail/gallery3.jpg";

const OurGallery = () => {
  const services = [
    { title: "Kumbh Mela Experience", image: Image1 },
    { title: "Bus Service", image: Image2 },
    { title: "Pilgrimage Journey", image: Image3 },
    { title: "Holy Dip", image: Image2 },
    { title: "Holy Dip", image: Image3 },
    { title: "Holy Dip", image: Image1 },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <p
          style={{ color: "#ea580c" }}
          className="text-xl font-bold text-orange-600 p relative inline-block"
        ></p>
        <h1
          className="text-4xl font-semibold"
          style={{ fontFamily: "'Poppins', cursive" }}
        >
          Our Gallery
        </h1>
      </div>

      <div className="flex flex-wrap w-full justify-center cursor-pointer mt-10 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[90%] md:w-[45%] lg:w-[30%] h-[300px] rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 hover:bg-gradient-to-t from-[#F56900] to-transparent w-[100%] group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-[#F56900] group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-start px-4 py-8">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <hr className="w-16 border-white my-2" />
                <p className="text-white text-sm  ">
                  Experience the best {service.title.toLowerCase()} services
                  with our experts.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurGallery;
