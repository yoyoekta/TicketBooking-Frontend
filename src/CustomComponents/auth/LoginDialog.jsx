import { Button } from "@/Components/ui/button";
import { signin } from '../auth/services/authApi';
import { useState } from "react";
import { Link } from "react-router-dom"; 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import CircularProgress from "@mui/material/CircularProgress"; // Adjust the import based on your CircularProgressIndicator location
import React from "react";

const LoginDialog = ({ open, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true
    try {
      const response = await signin({ email, password });
      const { jwt, status, user } = response.data;

      if (status) {
        localStorage.setItem("jwtToken", jwt);
        localStorage.setItem("userData", JSON.stringify(user));
        onLoginSuccess(user);
      }
    } catch (err) {
      console.error('Login failed:', err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-lg p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Login to your account
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter your email below to login
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border-2 border-gray-300 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error message display */}
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          <DialogFooter className="mt-6">
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-500 p-3 rounded-lg font-semibold"
              disabled={loading} 
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" /> // Show CircularProgressIndicator
              ) : (
                "Login"
              )}
            </Button>
          </DialogFooter>
        </form>
        {/* Link to Signup page */}
        <p className="text-center mt-4">
          Not have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
