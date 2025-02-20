import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-20">
      <div className="h-[300px] w-[86vw] py-6 rounded-lg overflow-hidden mx-auto ">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-bottom  transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3">
          {" "}
          {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className='tracking-[2] py-3 '>{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
