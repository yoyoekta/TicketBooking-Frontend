// // import * as React from "react";
// import { useEffect, useState } from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const Listing = () => {
//   const [events, setEvents] = useState([]);

//   // Fetch the top 5 sold events from the backend API
//   useEffect(() => {
//     const fetchTopSoldEvents = async () => {
//       try {
//         const token = localStorage.getItem("jwtToken");
//         const response = await
//           fetch("http://localhost:8080/api/events/top-sold", {
//             method: "GET",
//           headers: {
//             "Authorization": `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           });
//         if (response.ok) {
//           const data = await response.json();
//           console.log(data);
          
//           setEvents(data);
//         } else {
//           console.error("Failed to fetch top sold events");
//         }
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchTopSoldEvents();
//   }, []);

//   return (
//     <div className="mt-8 p-4 ">
//       <div className="flex flex-col gap-2">
//         <h3 className="font-bold text-xl">Popular Events in Delhi</h3>
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="w-full max-w-7xl "
//         >
//           <CarouselContent>
//             {events.length > 0 ? (
//               events.map((event, index) => (
//                 <CarouselItem key={event.placeId} className="md:basis-1/3 lg:basis-1/4">
//                   <div className="p-1">
//                     <Card>
//                       <CardContent className="flex flex-col items-center p-6">
//                         <span className="text-xl font-semibold">{event.placeName}</span>
//                         <span className="text-md mt-2">Tickets Sold: {event.soldTicket}</span>
//                         <p className="text-sm mt-1">{event.description}</p>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))
//             ) : (
//               <div>Loading...</div>
//             )}
//           </CarouselContent>
//           <CarouselPrevious className="mx-2" />
//           <CarouselNext className="mx-2" />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Listing;


import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Listing = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopSoldEvents = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch("http://localhost:8080/api/events/top-sold", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch top sold events");

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Unable to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopSoldEvents();
  }, []);

  if (loading) return <div>Loading popular events...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="mt-8 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">Popular Events in Delhi</h3>
        <Carousel opts={{ align: "start" }} className="w-full max-w-7xl">
          <CarouselContent>
            {events.map((event) => (
              <CarouselItem key={event.placeId} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <span className="text-xl font-semibold">{event.placeName}</span>
                      <span className="text-md mt-2">Tickets Sold: {event.soldTicket}</span>
                      <p className="text-sm mt-1">{event.description}</p>
                      <p className="text-sm mt-1">{event.location.locationName}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="mx-2" />
          <CarouselNext className="mx-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default Listing;
