import React from "react"
import { Navigate, useLocation } from "react-router-dom"

const AuthRoute = ({ children }) => {
  let location = useLocation()
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} />
  )
}

export default AuthRoute