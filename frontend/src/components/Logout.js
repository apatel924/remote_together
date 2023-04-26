import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";
import "../index.css";

export function Logout() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="flex flex-row gap-16">
        <button type="button" onClick={logout}>
          Logout
        </button>
        <div className="flex flex-row">
          <h3 className='pr-2'>Welcome, </h3>
          <p className="italic"> {user}! </p>
        </div>
      </div>
    </div>
  );
}
