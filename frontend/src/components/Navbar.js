import { Button, TextField } from "@mui/material";
import Search from "../App2";
import { Link, useLocation } from "react-router-dom";
import { Logout } from "./Logout";
import { AuthContext } from "../providers/authProvider";
import { mapContext } from "../providers/mapProvider";
import { useContext } from "react";

export default function Navbar() {
  const { handleSearch, searchInput, setSearchInput } = useContext(mapContext);

  const location = useLocation();
  const { auth, user } = useContext(AuthContext);

  return (
    <nav>
      <div className="text-gray-200 flex flex-row items-center place-content-center gap-16 h-24 font-bold rounded-none">
        <h2 >
          {" "}
          <Link to="/">RemoteTogether</Link>{" "}
        </h2>
        <h3 >
          <Link to="/findalocation">Find a Location</Link>
        </h3>
        {/* <h3>
          <Link to="/addreview">Add Review</Link>
        </h3> */}
        <h3>
          <Link to="/Favorites">Favorites</Link>
        </h3>
        <div className="" id="chat-login">
          {!auth && (
            <h3>
              <Link to="/Login">Member Log In</Link>
            </h3>
          )}
          {auth && <Logout />}
        </div>
        <Button variant="outlined" color="primary">
          <Link to="/chat">Start Chat</Link>
        </Button>
       
      </div>
    </nav>
  );
}
