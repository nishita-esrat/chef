import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers}></RouterProvider>
      <ToastContainer
        toastClassName={() =>
          "bg-white relative flex p-2 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer text-yellow-700"
        }
        progressClassName="ToastifyProgress"
      />
    </AuthProvider>
  </React.StrictMode>
);
