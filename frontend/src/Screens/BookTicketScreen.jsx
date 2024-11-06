import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";

const BookTicketScreen = () => {
  const [bookingDate, setBookingDate] = useState(null);
  const [members, setMembers] = useState(1);
  const navigate = useNavigate();

  const handlePayment = () => {
    // Implement payment logic or navigate to payment page
    console.log(members);
    // alert("Proceeding to Payment");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg m-10 border border-gray-300">
      {/* Header */}
      <div className="border-b pb-4 mb-4">
        {/* <h1 className="text-2xl font-bold">{place.name}</h1>
        <p className="text-gray-600 mt-1">{place.shortDescription}</p> */}
        <h1 className="text-2xl font-bold">Name</h1>
        <p className="text-gray-600 mt-1">Description</p>
      </div>

      {/* Booking Details */}
      <div className="flex justify-between gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold">Booking Date</label>
          <DatePicker
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            dateFormat="dd/MM/yyyy"
            className="mt-2 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 full-width-datepicker"
            placeholderText="Select a date"
            style={{ width: "100%" }}
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-semibold">
            Number of Members
          </label>
          <input
            type="number"
            value={members}
            onChange={(e) => {
              const value = e.target.value;
              setMembers(value === "" ? 0 : parseInt(value, 10));
            }}
            min="1"
            className="mt-2 block w-full border border-gray-300 p-2 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter number of members"
          />
        </div>
      </div>

      {/* Price Summary */}
      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold">Price Summary</h2>
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Total Members</span>
          <span>{members}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-gray-600">Price per Member</span>
          {/* <span>${place.pricePerMember}</span> */}
          <span>$500</span>
        </div>
        <div className="flex justify-between font-bold mt-3 border-t pt-3">
          <span>Total Price</span>
          {/* <span>${members * place.pricePerMember}</span> */}
          <span>${members * 500}</span>
        </div>
      </div>

      {/* Make Payment Button */}
      <div className="text-center mt-6">
        <Link to="/book/payment">
          <Button
            onClick={handlePayment}
            disabled={members === 0}
            className="w-full bg-red-600 text-white hover:bg-red-500 p-3 rounded-lg font-semibold"
          >
            Make Payment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookTicketScreen;
