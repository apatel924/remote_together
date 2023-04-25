import { Button, TextField } from "@mui/material";
import Search from "../App2"
import { Link, useLocation } from "react-router-dom";
import { Logout } from "./Logout";
import { AuthContext } from "../providers/authProvider";
import { mapContext } from "../providers/mapProvider";
import { useContext } from "react";


export default function Navbar () {

  const {
    handleSearch,
    searchInput,
    setSearchInput
  } = useContext(mapContext)

  const location = useLocation();
  const { auth, user } = useContext(AuthContext)
  
  return (

<nav className="divinner flex flex-row p-8 gap-20 justify-center">
          <div className="text-gray-200 flex flex-row gap-20">
         <h2 className="font-bold flex justify-start"> <Link to="/">RemoteTogether</Link> </h2>
            <h3  ><Link to="/findalocation">Find a Location</Link></h3>
            <h3  ><Link to="/addreview">Add Review</Link></h3>
            <h3 ><Link to="/Favorites">Favorites</Link></h3>
            {location.pathname === '/' ?
              null
              :
              <h3 className="placeholderlink">

                <TextField
                  color="primary"
                  variant="outlined"
                  type="search"
                  label="Find Workspace In"
                  size="medium"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button
                  variant="contained"
                  name="SearchButton"
                  color="primary"
                  size="large"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </h3>
            }
          </div>
          <div className="" id="chat-login">
          
            {!auth && <h3 className="text-gray-200"><Link to="/Login">Member Log In</Link></h3>}
            {auth && <Logout />}  <Button className="p-8" variant="outlined" color="primary">
              <Link to="/chat">Start Chat</Link>
              </Button>
           
          </div>
        </nav>

);
}