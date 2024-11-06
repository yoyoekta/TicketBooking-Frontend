import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OngoingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchOngoingEvents = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        const response = await fetch("http://localhost:8080/api/events/ongoing", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error("Failed to fetch ongoing events");
        }
      } catch (error) {
        console.error("Error fetching ongoing events:", error);
      }
    };
    fetchOngoingEvents();
  }, []);

  return (
    <div className="mt-8 p-4">
      <h3 className="font-bold text-xl">Ongoing Events</h3>
      <Carousel opts={{ align: "start" }} className="w-full max-w-7xl">
        <CarouselContent>
          {events.length > 0 ? (
            events.map((event) => (
              <CarouselItem key={event.placeId} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <h4 className="text-xl font-semibold">{event.placeName}</h4>
                      <p>{event.description}</p>
                      <span>Location: {event.location.locationName}</span>
                      <span>Tickets Sold: {event.soldTicket}</span>
                      <span>Price: ₹{event.ticketPrice}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </CarouselContent>
        <CarouselPrevious className="mx-2" />
        <CarouselNext className="mx-2" />
      </Carousel>
    </div>
  );
};

export default OngoingEvents;
