/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line no-unused-vars
import { FaSearch } from "react-icons/fa";

// Define available icons for cities
const cityIcons = [
  "🏙️", "🏛️", "🏢", "🏰", "🕌", "🌆", "🏯", "🏠", "🌴"
];

// Function to assign random icons to cities
const assignRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * cityIcons.length);
  return cityIcons[randomIndex];
};

// Component for selecting location
const LocationSelector = ({ open, onClose, onSelectLocation }) => {
  const [showAllCities, setShowAllCities] = useState(false);
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [locationsPerPage] = useState(6);

  // Fetch locations from the backend on mount
  useEffect(() => {
    axios.get("http://localhost:8080/api/locations/get-all-locations")
      .then((response) => {
        // Assign random icons to cities
        const locationsWithIcons = response.data.map(location => ({
          ...location,
          icon: assignRandomIcon()
        }));
        setLocations(locationsWithIcons);
      })
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  // Separate the first 5 cities as "popular" and the rest as "remaining"
  const popularCities = locations.slice(0, 5); // First 5 cities
  const remainingCities = locations.slice(5); // All other cities after the first 5

  // Filter locations based on the search query
  const filteredPopularCities = popularCities.filter((city) =>
    city.city.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredRemainingCities = remainingCities.filter((city) =>
    city.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle pagination logic
  const indexOfLastLocation = page * locationsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
  const currentLocations = filteredRemainingCities.slice(indexOfFirstLocation, indexOfLastLocation);

  const paginate = (pageNumber) => setPage(pageNumber);

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
            type="text"
            placeholder="Search for your city"
            className="w-full pl-10 py-2 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        {/* Popular Cities Display */}
        <div>
          <h3 className="text-lg font-semibold text-center mt-4">Popular Cities</h3>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center text-gray-600 text-sm">
            {filteredPopularCities.map((city) => (
              <div
                key={city.id}
                className="cursor-pointer"
                onClick={() => onSelectLocation(city)}
              >
                <span className="text-lg">{city.icon}</span>
                <span className="block text-xs text-gray-500">{city.city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining Cities Display */}
        <div>
          <h3 className="text-lg font-semibold text-center mt-4">Other Cities</h3>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center text-gray-600 text-sm">
            {currentLocations.map((location) => (
              <div
                key={location.id}
                className="cursor-pointer"
                onClick={() => onSelectLocation(location)}
              >
                <span className="text-lg">{location.icon}</span>
                <span className="block text-xs text-gray-500">{location.city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {!showAllCities && filteredRemainingCities.length > locationsPerPage && (
          <div className="mt-4 text-center">
            <Button
              variant="link"
              className="text-red-500"
              onClick={() => setShowAllCities(!showAllCities)}
            >
              {showAllCities ? "Hide All Cities" : "Show All Cities"}
            </Button>
            <div className="mt-4">
              {Array.from({ length: Math.ceil(filteredRemainingCities.length / locationsPerPage) }, (_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`mx-1 ${page === index + 1 ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LocationSelector;
