import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import NotFoundScreen from "./Screens/NotFoundScreen";
import SinglePlaceScreen from "./Screens/SinglePlaceScreen";
import PlaceOwnerDashboard from "./Screens/PlaceOwnerDashboard";
import OwnerRegisterScreen from "./Screens/OwnerRegisterScreen";
import PendingApprovalScreen from "./Screens/PendingApprovalScreen";
import RequestRejectedScreen from "./Screens/RequestRejectedScreen";
import Signup from "./CustomComponents/auth/SignUp";
import "./index.css";
import UserBookingScreen from "./Screens/UserBookingScreen";
import BookScreen from "./Screens/BookScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import OwnerRoute from "./CustomComponents/protectedRoutes/OwnerRoute";
import LoginDialog from "./CustomComponents/auth/LoginDialog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />}>
        <Route  path="/login" element={<LoginDialog />} />
      </Route>
      <Route path="/place" element={<SinglePlaceScreen />} />
      <Route path="/book" element={<BookScreen />} />
      <Route path="/book/payment" element={<PaymentScreen />} />
      <Route path="/bookings" element={<UserBookingScreen />} />
      <Route path="/register-as-owner" element={<OwnerRegisterScreen />} />
      <Route path="/waiting-approval" element={<PendingApprovalScreen />} />
      <Route path="/request-rejected" element={<RequestRejectedScreen />} />
      <Route path="" element={<OwnerRoute />}>
        <Route path="/owner" element={<PlaceOwnerDashboard />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
