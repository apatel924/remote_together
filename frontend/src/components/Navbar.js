import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
import { AuthContext } from "../providers/authProvider";
import { useContext } from "react";

export default function Navbar() {

  const { auth } = useContext(AuthContext);

  return (
    <nav>
      <div className="text-gray-200 flex flex-row items-center place-content-center gap-16 h-24 font-bold rounded-none">
        <h2 >
          {" "}
          <Link to="/">Remote<span className="italic">Together</span></Link>{" "}
        </h2>
        <h3 >
          <Link to="/findalocation">Find a Location</Link>
        </h3>
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
