import React from 'react'
import { Navigate } from 'react-router-dom';
function PrivateRoute({loggedin , children}) {
  if(loggedin){
    return children;
  }else{
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute