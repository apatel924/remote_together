
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/authProvider'
import '../index.css';


export function Logout() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div>
      <div>
        <h3 className="text-green-600 bg-red-200" >
          Welcome, {user}!
        </h3>
        </div>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  )
}