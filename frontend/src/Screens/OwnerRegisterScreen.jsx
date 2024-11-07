// eslint-disable-next-line no-unused-vars
import { changeToPO } from "@/services/authApi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OwnerRegisterScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const addressFinal = address+ ', ' + city + ', ' + state;
    const data = { name, email, phoneNumber, addressFinal };
    console.log(data);
    try {
      const response = await changeToPO(data);
      console.log(response);

      if (response.status === 200 && response.data) {
        navigate("/owner");
        // window.location.reload();
      }
    } catch (err) {
      console.error(err);
    } 
  };
  return (
    <div className="my-8 max-w-5xl mx-auto flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-gray-300">
        <h1 className="text-xl font-semibold text-center mb-6">
          Register yourself as Place Owner
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex-1">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Phone number"
                required
                maxLength={10}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Address Field */}
          <div>
            <label htmlFor="address" className="text-sm font-medium">
              Local Address
            </label>
            <textarea
              id="address"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* City and State Fields */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="city" className="text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                placeholder="City"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="state" className="text-sm font-medium">
                State
              </label>
              <input
                type="text"
                id="state"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
                placeholder="State"
                required
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 w-full px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnerRegisterScreen;
