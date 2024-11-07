import { Navigate, Outlet } from "react-router-dom";

const OwnerRoute = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return userData && userInfo.role === "PO" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default OwnerRoute;
