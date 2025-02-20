import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14 bg-blue-50">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-orange-600 py-2 pl-2 text-3xl font-bold">
            About Us
          </h1>
          <p>
            Welcome to <strong>ANT Bus Service</strong>, your trusted travel companion for
            spiritual journeys. Our mission is to provide <strong>free, comfortable, and
            hassle-free pilgrimage services</strong> to devotees who seek divine blessings.
            We are committed to making religious travel accessible to all, ensuring that
            every pilgrim experiences a peaceful and fulfilling journey.
          </p>
          <br />
          <p>
            Whether you're visiting <strong>Mathura, Vrindavan, Khatu Shyam, Vaishno Devi</strong>,
            or other sacred destinations, our well-organized bus services are designed
            to cater to your needs. With a focus on safety, convenience, and devotion,
            we strive to make your spiritual trips as smooth as possible.
          </p>
          <br />
          <p>
            Join us on this sacred journey and let faith guide your way. 
            Book your free pilgrimage with ANT Bus Service and experience the bliss of
            divine travel.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
