
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/authProvider'

export function Logout() {
  const { user, logout } = useContext(AuthContext)

  return (
    <div>
      <div>Welcome, {user}!</div>
      <button type="button" onClick={logout}>Logout</button>
    </div>
  )
}