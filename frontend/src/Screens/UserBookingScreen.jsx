import BookingCard from "@/CustomComponents/userBooking/BookingCard";
import React from "react";

const UserBookingScreen = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center my-8 gap-8 bg-gray-100">
        <h1 className="text-2xl font-bold">Your Bookings</h1>
        <div className="bg-white p-2 rounded-lg shadow-lg w-full border border-gray-300">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold">Upcoming Bookings</h1>
          </div>

          <BookingCard type={"upcoming"}/>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-lg w-full border border-gray-300">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold">Previous Bookings</h1>
          </div>

          <BookingCard type={"previous"}/>
        </div>
      </div>
    </>
  );
};

export default UserBookingScreen;
