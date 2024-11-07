import { useLocation, Link } from "react-router-dom";

const PlaceDetailScreen = () => {
  const { state } = useLocation(); // Retrieve the state passed from the previous screen
  const place = state?.place; // Access the place object from the state

  if (!place) {
    return <div>Place not found</div>; // Handle the case where the place data is missing
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        {/* Image */}
        <img
          src={place.imageUrl || "https://assets-in.bmscdn.com/promotions/cms/creatives/1730810351765_webmukta991.jpg"} // Fallback image
          alt={place.placeName}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{place.placeName}</h2>
        <p className="text-xl text-gray-600 mb-6">{place.description}</p>

        {/* Place Details */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-gray-700">Location</h3>
            <p className="text-gray-600">{place.location.locationName}</p>
            <p className="text-sm text-gray-500">Address: {place.location.address}</p>
            <p className="text-sm text-gray-500">City: {place.location.city}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-gray-700">Ticket Price</h3>
            <p className="text-lg text-gray-800">{place.ticketPrice ? `$${place.ticketPrice}` : "Free"}</p>
            <p className="text-sm text-gray-500">Availability: {place.availableTickets} tickets left</p>
          </div>
        </div>

        {/* Open Days & Timing */}
        <div className="w-full bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">Open Days & Timing</h3>
          <p className="text-sm text-gray-600">Open Days: {place.openDays}</p>
          <p className="text-sm text-gray-600">Open Timing: {place.openTiming}</p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex justify-between items-center">
          <Link to={`/book/${place.placeId}`} className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-500">
            Book Now
          </Link>
          <Link to="/" className="text-indigo-600 font-medium">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailScreen;
