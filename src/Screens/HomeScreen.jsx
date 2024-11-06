// import EventCategories from "@/CustomComponents/home/EventCategories";
import HomepageBanner from "@/CustomComponents/home/HomepageBanner";
import Listing from "@/CustomComponents/home/Listing";
import OngoingEvents from "@/CustomComponents/home/OngoingEvents";
import UpcomingEvents from "@/CustomComponents/home/UpcomingEvents";

const HomeScreen = () => {
  return (
    <div className="flex flex-col gap-4">
      <HomepageBanner />
      <div className="flex flex-col gap-4">
        <Listing />
        <OngoingEvents />
        <UpcomingEvents/>
      </div>
      {/* <EventCategories /> */}
    </div>
  );
};

export default HomeScreen;
