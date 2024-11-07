import { Button } from "@/Components/ui/button";
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import { signup } from "../../services/authApi";
// import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signupData = { name, email, phone, password, address };
    console.log(signupData);
    try {
      if(password != confirmPassword){
        toast.error("Passwords don't match");
        throw new Error("Passwords do not match");
      }
      const response = await signup(signupData);
      console.log(response);

      if (response.status === 200 && response.data.status) {
        localStorage.setItem("jwtToken", response.data.jwt);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        toast.success("Signup successful!");
        navigate("/");
        window.location.reload();
      } else if (response.data.message) {
        setError(response.data.message);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      const errorDetails = err?.response?.data?.details;
      setError(
        typeof errorDetails === "object"
          ? Object.values(errorDetails).join(", ")
          : errorDetails || "Signup failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="m-4 max-w-3xl mx-auto flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full border border-gray-300">
        <h1 className="text-xl font-semibold mb-3">
          Register yourself
        </h1>
        <p className="text-md font-semibold mb-3">
          Enter your details to register.
        </p>
        <form onSubmit={handleSubmit}>
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
              minLength={8}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="flex-1 p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={8}
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

export default Signup;
