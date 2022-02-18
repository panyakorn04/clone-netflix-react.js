import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function IsUserRedirect() {
  const location = useLocation();
  const { currentUser } = useAuth();
  console.log({ location });
  console.log("Check user in Private: ", currentUser);

  return currentUser ? <Navigate to="browse" /> : <Outlet />;
}

export function ProtectedRoute() {
  const location = useLocation();
  const { currentUser } = useAuth();
  console.log({ location });
  console.log("Check user in Private: ", currentUser);

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "signin",
        state: { from: location },
      }}
    />
  );
}
