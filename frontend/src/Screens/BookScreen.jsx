import React from "react";
import { useLocation } from "react-router-dom";
import BookTicketScreen from "./BookTicketScreen";

const BookScreen = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  return (
    <>
      <div className="max-w-2xl mx-auto flex flex-col text-color justify-center m-10">
        <div className="flex justify-around items-center space-x-4">
          <h3 className="text-xl font-semibold mx-4 px-7">Information</h3>
          <h3 className="text-xl font-semibold mx-4 px-7">Payment</h3>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          {url === "/book" ? (
            <div className="bg-indigo-600 h-2.5 rounded-full w-1/2"></div>
          ) : (
            ""
          )}
          {url === "/book/payment" ? (
            <div className="bg-indigo-600 h-2.5 rounded-full w-1/2"></div>
          ) : (
            ""
          )}
        </div>
      </div>
      {url === "/book" ? <BookTicketScreen /> : ""}
      {url === "/book/payment" ? <div>payment</div> : ""}
    </>
  );
};

export default BookScreen;
