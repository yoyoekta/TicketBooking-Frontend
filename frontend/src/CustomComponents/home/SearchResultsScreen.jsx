import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

export default function SearchResultsScreen() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/events/search/${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query) fetchSearchResults();
  }, [query]);

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((place) => (
          <Link
          key={place.placeId}
          to={`/place/${place.placeId}`}
                state={{ place }}
          className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
        >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{place.placeName}</h3>
            <p className="text-gray-600 mb-4">{place.description}</p>
            <div className="mt-auto">
              <p className="text-sm text-gray-500">Location: {place.location?.locationName}</p>
              <p className="text-sm text-gray-500">Price: {place.ticketPrice ? `$${place.ticketPrice}` : "Free"}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  
  
}
