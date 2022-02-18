import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Browse() {
  const { SignOut, currentUser } = useAuth();
  return (
    <>
      <p>Hello from the Browse{`The current user is : ${currentUser}`}</p>;
      <p>Hello from the Browse{JSON.stringify(currentUser, null, 2)}</p>;
      <button
        name="Logout"
        onClick={async (e) => {
          e.preventDefault();
          await SignOut();
        }}
      >
        logout
      </button>
    </>
  );
}
