
import React from 'react';
import {useContext} from 'react';
import {AuthContext} from '../providers/authProvider'

export default function TestingPage() {
  const {user, logout} = useContext(AuthContext)

    return (
      <div>
        
          <div>You are logged in as ${user}</div>
          {/* <div>Email: {user.email}</div> */}
          {/* <div>UserId: {user.id}</div> */}
       
 
          <button type="button" onClick={logout}>Logout</button>
    
  
      </div>
  )
}