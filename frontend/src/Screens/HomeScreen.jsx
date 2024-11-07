// import EventCategories from "@/CustomComponents/home/EventCategories";
import HomepageBanner from "@/CustomComponents/home/HomepageBanner";
import Listing from "@/CustomComponents/home/Listing";
import OngoingEvents from "@/CustomComponents/home/OngoingEvents";
import UpcomingEvents from "@/CustomComponents/home/UpcomingEvents";
import { useOutlet } from "react-router-dom";

const HomeScreen = () => {
  const outlet = useOutlet()
  return (
    <div className="flex flex-col gap-4">
      <HomepageBanner />
      <div className="flex flex-col gap-4">
        <Listing />
        <OngoingEvents />
        <UpcomingEvents/>
      </div>
      {/* <EventCategories /> */}
      {outlet}
    </div>
  );
};

export default HomeScreen;
