import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Private = ({ children }) => {
  // get location
  const location = useLocation();
  // auth context
  const { user, loading } = useContext(authContext);

  // if loading exits
  if (loading) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
  // if user exits
  if (user) {
    return children;
  }
  return (
    <Navigate
      to="/login"
      replace={true}
      state={{ from: location.pathname }}
    ></Navigate>
  );
};

export default Private;
