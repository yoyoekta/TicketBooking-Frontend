import EventCategories from "@/CustomComponents/EventCategories";
import HomepageBanner from "@/CustomComponents/HomepageBanner";
import Listing from "@/CustomComponents/Listing";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="flex flex-col gap-4">
      <HomepageBanner />
      <div className="flex flex-col gap-4">
        <Listing />
        <Listing />
      </div>
      <EventCategories />
    </div>
  );
};

export default HomeScreen;
