// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { FaUser } from "react-icons/fa6";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import LoginDialog from "../auth/LoginDialog";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   // Load user data from localStorage on component mount
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData) {
//       setUser(userData);
//     }
//   }, []);

//   const handleLoginOpen = () => setLoginDialogOpen(true);
//   const handleLoginClose = () => setLoginDialogOpen(false);

//   // Handle logout by clearing stored data and resetting state
//   const handleLogout = () => {
//     localStorage.removeItem("jwtToken");
//     localStorage.removeItem("userData");
//     setUser(null);
//   };

//   // Update user state upon successful login
//   const handleLoginSuccess = (userData) => {
//     setUser(userData);
//     setLoginDialogOpen(false);
//   };

//   return (
//     <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 shadow-sm">
//       {/* Logo */}
//       <div className="basis-2/3 flex justify-start items-center space-x-8">
//         <div className="text-lg font-semibold">bookMyTicket</div>

//         {/* Search Bar */}
//         <div className="flex-grow mx-4 max-w-md">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full p-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
//           />
//         </div>
//       </div>

//       {/* Location Selector and User Menu */}
//       <div className="flex items-center space-x-4">
//         {/* Location Selector */}
//         <select className="p-2 bg-neutral-100 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
//           <option value="NYC">New York City</option>
//           <option value="LA">Los Angeles</option>
//           <option value="SF">San Francisco</option>
//         </select>

//         {/* Login / User Menu */}
//         {user ? (
//           <DropdownMenu className="outline-none">
//             <DropdownMenuTrigger>
//               <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center">
//                 <span className="text-sm font-medium text-neutral-700">
//                   <FaUser />
//                 </span>
//               </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="m-2">
//               <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem><Link to="/register-as-owner">Become Place Owner</Link></DropdownMenuItem>
//               <DropdownMenuItem>Your Bookings</DropdownMenuItem>
//               <DropdownMenuItem>Account & Settings</DropdownMenuItem>
//               <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         ) : (
//           <button
//             className="font-medium bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg"
//             onClick={handleLoginOpen}
//           >
//             Login
//           </button>
//         )}
//       </div>

//       {/* Login Dialog */}
//       <LoginDialog
//         open={isLoginDialogOpen}
//         onClose={handleLoginClose}
//         onLoginSuccess={handleLoginSuccess} // Pass login success handler
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoginDialog from "../auth/LoginDialog";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Track the search query
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([]); // Store search results

  // Load user data from localStorage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLoginOpen = () => setLoginDialogOpen(true);
  const handleLoginClose = () => setLoginDialogOpen(false);

  // Handle logout by clearing stored data and resetting state
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  // Update user state upon successful login
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setLoginDialogOpen(false);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Enter key press for search
  const handleSearchKeyDown = async (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      // Trigger search when Enter is pressed
      await searchPackages(searchQuery);
    }
  };

  // Fetch search results from API

  const searchPackages = async (query) => {
    try {
      // Use axios.get() to fetch data from the backend
      const response = await axios.get(`http://localhost:8080/api/events/search/${query}`);
  
      // Axios automatically parses the response into JSON, no need for response.json()
      setSearchResults(response.data); // Store search results in state
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  // const searchPackages = async (query) => {
  //   try {
  //     const response = await axios.fetch(`http://localhost:8080/api/events/search?query=${query}`);
  //     const data = await response.json();
  //     setSearchResults(data); // Store search results in state
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 shadow-sm">
      {/* Logo */}
      <div className="basis-2/3 flex justify-start items-center space-x-8">
        <div className="text-lg font-semibold">bookMyTicket</div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
            value={searchQuery} // Bind search query to input value
            onChange={handleSearchChange} // Handle input change
            onKeyDown={handleSearchKeyDown} // Handle Enter key press
          />
        </div>
      </div>

      {/* Location Selector and User Menu */}
      <div className="flex items-center space-x-4">
        {/* Location Selector */}
        <select className="p-2 bg-neutral-100 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="NYC">New York City</option>
          <option value="LA">Los Angeles</option>
          <option value="SF">San Francisco</option>
        </select>

        {/* Login / User Menu */}
        {user ? (
          <DropdownMenu className="outline-none">
            <DropdownMenuTrigger>
              <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center">
                <span className="text-sm font-medium text-neutral-700">
                  <FaUser />
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-2">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link to="/register-as-owner">Become Place Owner</Link></DropdownMenuItem>
              <DropdownMenuItem>Your Bookings</DropdownMenuItem>
              <DropdownMenuItem>Account & Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            className="font-medium bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg"
            onClick={handleLoginOpen}
          >
            Login
          </button>
        )}
      </div>

      {/* Login Dialog */}
      <LoginDialog
        open={isLoginDialogOpen}
        onClose={handleLoginClose}
        onLoginSuccess={handleLoginSuccess} // Pass login success handler
      />
    </div>
  );
}
