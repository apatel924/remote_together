import { createContext, useState } from 'react';

// Create a Context
export const AuthContext = createContext();

// Create a Component wrapper
export default function AuthProvider(props) {

  // Here is our Shared State Object
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null)

const login = function(user, password) {
  setAuth(true);
  // axios call here to add authenication. currently everyone can just enter
  setUser(user)
}

const logout = function () {
  setAuth(false)
  setUser(null)
}
  // This list can get long with a lot of functions. 
  const value = { auth, user, login, logout };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};