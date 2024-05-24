import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const getToken = () => localStorage.getItem("token");
  return getToken() ? <Outlet /> : <Navigate to={"/signin"} />;
}

export default ProtectedRoute;
