import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const BookingCard = ({type}) => {
  return (
    <div className="flex items-center p-4 m-4 bg-white border border-gray-300 rounded-lg shadow-md">
      {/* Carousel */}
      <div className="w-1/4">
        <Carousel
          className="w-full h-40 rounded-lg overflow-hidden"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {/* Replace the src attributes with your image URLs */}
            <CarouselItem>
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAzMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412615-jrjhmwxzqr-portrait.jpg"
                alt="Slide 1"
                className="object-scale-down w-full h-full"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni42LzEwICAxOC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00353996-qhqgafrfxu-portrait.jpg"
                alt="Slide 2"
                className="object-cover w-full h-full"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAxNy40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354858-ayxrjajhcy-portrait.jpg"
                alt="Slide 3"
                className="object-cover w-full h-full"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Event Details */}
      <div className="flex-1 mx-4">
        <h2 className="text-lg font-semibold">Place: Venue Name</h2>
        <p className="text-gray-600">Address</p>
        <p className="text-gray-600">Date & Time: 10th Oct, 6:00 PM</p>
        <p className="text-gray-600">Total Members: 2</p>
      </div>

      {/* Price */}
      <div className="flex flex-col mx-4 justify-between gap-4">
        <p className="text-lg text-red-600 font-semibold text-right">Price: $500</p>
        <button className="font-medium bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-lg shadow-lg">
          {type == "upcoming" ? "Make Payment" : "Rebook"}
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
