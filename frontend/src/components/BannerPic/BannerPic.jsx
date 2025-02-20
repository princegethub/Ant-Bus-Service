import React from "react";
import {Link} from 'react-router-dom';

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "260px",
  };
  return (
    <Link to="/booking">
    <div data-aos="zoom-in" className="h-auto w-full object-contain" style={bgImage}></div>
    </Link>
  );
};

export default BannerPic;
