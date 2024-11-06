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
import { store } from "./app/store";
import { Provider } from "react-redux";
import HomeScreen from "./Screens/HomeScreen";
import NotFoundScreen from "./Screens/NotFoundScreen";
import SinglePlaceScreen from "./Screens/SinglePlaceScreen";
import PlaceOwnerDashboard from "./Screens/PlaceOwnerDashboard";
import OwnerRegisterScreen from "./Screens/OwnerRegisterScreen";
import PendingApprovalScreen from "./Screens/PendingApprovalScreen";
import RequestRejectedScreen from "./Screens/RequestRejectedScreen";
import Register from "./CustomComponents/auth/Register";
import UserBookingScreen from "./Screens/UserBookingScreen";
import BookTicketScreen from "./Screens/BookTicketScreen";
import BookScreen from "./Screens/BookScreen";
import PaymentScreen from "./Screens/PaymentScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/register" element={<Register />} />
      <Route path="/place" element={<SinglePlaceScreen />} />
      <Route path="/book" element={<BookScreen />} />
      <Route path="/book/payment" element={<PaymentScreen />} />
      <Route path="/bookings" element={<UserBookingScreen />} />
      <Route path="/register-as-owner" element={<OwnerRegisterScreen />} />
      <Route path="/waiting-approval" element={<PendingApprovalScreen />} />
      <Route path="/request-rejected" element={<RequestRejectedScreen />} />
      <Route path="/owner" element={<PlaceOwnerDashboard />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
