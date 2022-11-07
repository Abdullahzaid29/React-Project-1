import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
const { loading, isAuthenticated } = useSelector((state) => state.user);

if (loading) return null;

return isAuthenticated ? children : <Redirect to="/" replace />;
};

export default ProtectedRoute;