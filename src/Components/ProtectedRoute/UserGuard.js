
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../ContextAPI/UserContext";

export default function UserGuard({ children } ) {
//   const [{userData} ]= useContext(UserContext);
const user = localStorage.getItem("useremail")
const user1 = localStorage.getItem("username")
const user2 = localStorage.getItem("password")
  if (!user) {
    return <Navigate to='/'  />;
  }

  return children;
}