import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { Menus } from "../Utils/Menus";

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const PrivateElement = ({ children }) => {
  let location = useLocation()
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  const url = new URL(window.location);
  const pathName = url && url.pathname && url.pathname.substring(1)
  let menus = Menus();
  let isAuthenticated = true;
  if (menus) {
    let foundedObj = menus && menus.find(item => item.url === pathName)
    if (foundedObj) {
      isAuthenticated = foundedObj.isAuthenticated
    }
  }
  // const pathname = url.pathname; // contains "/register"
  return isLoggedIn ? (
    isAuthenticated ?
      children : <Navigate to="/not-authorized" state={{ from: location }} />
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  )
}

export default PrivateElement