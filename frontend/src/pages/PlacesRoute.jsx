import React from "react";
import Places from "../components/Places/Places";
import FeaturesSection from "./FeaturesSection";
import Banner from "../components/Banner/Banner";

const PlacesRoute = () => {
  return (
    <>
      <div className="pt-14">
        {/* <Places /> */}
        <FeaturesSection/>
        <Banner/>
      </div>
    </>
  );
};

export default PlacesRoute;
