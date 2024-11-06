import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaMapPin, FaSearch } from "react-icons/fa";

// Sample data for cities
const popularCities = [
  { name: "Mumbai", icon: "🏙️" },
  { name: "Delhi-NCR", icon: "🏛️" },
  { name: "Bengaluru", icon: "🏢" },
  { name: "Hyderabad", icon: "🏰" },
  { name: "Ahmedabad", icon: "🕌" },
  { name: "Chandigarh", icon: "🌆" },
  { name: "Chennai", icon: "🏯" },
  { name: "Pune", icon: "🏠" },
  { name: "Kolkata", icon: "🏛️" },
  { name: "Kochi", icon: "🌴" },
];

const otherCities = [
  "Aalo",
  "Abhor",
  "Adilabad",
  "Adoni",
  "Agartala",
  "Ahmednagar",
  "Agra",
  "Ajmer",
  "Alappuzha",
  "Alibaug",
  "Amritsar",
  "Alwar",
  "Aluva",
  "Ambala",
  "Andheri",
  "Anand", // add more cities as needed
];

const LocationSelector = ({ open, onClose }) => {
  const [showAllCities, setShowAllCities] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl overflow-auto max-h-[60vh] p-6 space-y-4 rounded-lg shadow-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            Select Your City
          </DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="relative">
          <input
            placeholder="Search for your city"
            className="w-full pl-10 py-2 border border-gray-300 rounded-lg"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        {/* Detect My Location Button */}
        {/* <Button variant="link" className="text-red-500 flex items-center justify-center space-x-2">
          <FaMapPin />
          <span>Detect my location</span>
        </Button> */}

        {/* Popular Cities Section */}
        <div>
          <h3 className="text-lg font-semibold text-center">Popular Cities</h3>
          <div className="flex justify-around gap-4 mt-4">
            {popularCities.map((city) => (
              <div
                key={city.name}
                className="flex flex-col items-center space-y-1"
              >
                <span className="text-2xl">{city.icon}</span>
                <span className="text-sm text-gray-600">{city.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="link"
          className="text-red-500 w-full text-center"
          onClick={() => setShowAllCities(!showAllCities)}
        >
          {showAllCities ? "Hide All Cities" : "Show All Cities"}
        </Button>

        {/* Other Cities Section */}
        {showAllCities ? 
        (
          <div>
            <h3 className="-mt-6 text-lg font-semibold text-center">Other Cities</h3>
            <div
              className="mt-6 grid grid-cols-5 gap-4 text-center text-gray-600 text-sm"
            >
              {otherCities.map((city) => (
                <span key={city}>{city}</span>
              ))}
            </div>
          </div>
        ) : ""}
      </DialogContent>
    </Dialog>
  );
};

export default LocationSelector;
