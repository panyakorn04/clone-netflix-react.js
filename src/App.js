import React from "react";
import { Routes, Route } from "react-router-dom"; // import your route components too
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { ProtectedRoute, IsUserRedirect } from "./helpers/routes";
import { Layout } from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        {/* redirect routes */}
        <Route element={<IsUserRedirect />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* we want to protect these routes */}
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
        {/* catch all */}
        <Route path="*" element={<p>page not found</p>} />
      </Route>
    </Routes>
  );
}
