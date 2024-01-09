import React from "react";
import { useRouteError } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="bg-base-100 min-h-screen flex flex-col justify-center items-center text-yellow-800 gap-3 p-3 text-center">
      <BiSolidError className="w-28 h-28 text-black" />
      <p>{error.statusText}</p>
      <p>
        <span className="text-gray-500 font-mono">message :</span>
        {error.data}
      </p>
      <p>
        <span className="text-gray-500 font-bold">status :</span>
        {error.status}
      </p>
    </div>
  );
};

export default ErrorPage;
