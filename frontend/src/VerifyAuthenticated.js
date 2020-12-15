import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const VerifyAuthenticated = ({ children }) => {
  const userToken = useSelector((state) => state.token);
  return userToken ? children : <Redirect to="/login" />;
};
