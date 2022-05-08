import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ allowedRoles }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  console.log({ location });
  console.log("Check user in Private: ", currentUser);
  currentUser?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : currentUser?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
