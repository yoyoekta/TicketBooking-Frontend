/* eslint-disable no-unused-vars */
// import { useRegisterMutation } from "@/app/api/authApi";
import { Button } from "@/Components/ui/button";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [comfirmPassword, setConfirmPassword] = useState();
  const [address, setAddress] = useState();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [register, { isLoading }] = useRegisterMutation();
  return (
    <div className="m-6 max-w-3xl mx-auto flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-gray-300">
        <h1 className="text-xl font-semibold mb-3">
          Register yourself
        </h1>
        <p className="text-md font-semibold mb-3">
          Enter your details to register.
        </p>
        <form>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex gap-4">
            <input
              type="password"
              placeholder="Password"
              className="flex-1 p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="flex-1 p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              type="text"
              placeholder="Address"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {/* <input
              type="text"
              placeholder="City"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              placeholder="State"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            /> */}
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-500 p-3 rounded-lg font-semibold"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
