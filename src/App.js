import React from "react";
import { Routes, Route } from "react-router-dom"; // import your route components too
import { Home, Browse, SignIn, SignUp, Unauthorized } from "./pages";
import * as ROUTES from "./constants/routes";
// import { ProtectedRoute } from "./helpers/routes";
import { Layout } from "./components";

// const ROLES = {
//   User: 2001,
//   Editor: 1984,
//   Admin: 5150,
// };

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="browse" element={<Browse />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* redirect routes */}

        {/* we want to protect these routes */}

        {/* catch all */}
        <Route path="*" element={<p>page not found</p>} />
      </Route>
    </Routes>
  );
}
