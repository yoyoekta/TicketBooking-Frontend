import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Track the search query
  // const [searchResults, setSearchResults] = useState([]); // Store search results

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLoginOpen = () => setLoginDialogOpen(true);
  const handleLoginClose = () => setLoginDialogOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userData");
    setUser(null);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setLoginDialogOpen(false);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`); // Redirect to the search page
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-2 bg-neutral-50 shadow-sm">
      <div className="w-full flex justify-between items-center">
        <div className="basis-2/3 flex justify-start items-center space-x-8">
          <div className="text-lg font-semibold">bookMyTicket</div>
          <div className="flex-grow mx-4 max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select className="p-2 bg-neutral-100 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="NYC">New York City</option>
            <option value="LA">Los Angeles</option>
            <option value="SF">San Francisco</option>
          </select>
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
                <DropdownMenuItem>
                  <Link to="/register-as-owner">Become Place Owner</Link>
                </DropdownMenuItem>
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
      </div>

      <LoginDialog
        open={isLoginDialogOpen}
        onClose={handleLoginClose}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}


// // Navbar.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <nav>
//       <input
//         type="text"
//         placeholder="Search places..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         onKeyDown={handleSearchKeyDown}
//       />
//     </nav>
//   );
// }
