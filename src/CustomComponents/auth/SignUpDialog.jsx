import { Button } from "@/Components/ui/button";
import { useState } from "react";
import { signup } from "../../../services/authApi";
// import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signupData = { name, email, phone, password, address };

    try {
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
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
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
          <input
            type="text"
            placeholder="Phone"
            className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white hover:bg-indigo-500 p-3 rounded-lg font-semibold mt-4"
          disabled={loading}
        >
          {loading ? (
            // eslint-disable-next-line react/jsx-no-undef
            <CircularProgress size={24} color="inherit" /> // Show CircularProgressIndicator
          ) : (
            "Login"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
