// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <div>
          <div>Detect un authenticated user</div>
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        </div>
      )}

      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
          <button onClick={() => logout()}>Log out</button>
        </span>
      )}
    </div>
  );
};

export default NavBar;
