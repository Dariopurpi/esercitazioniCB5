import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./users/Users";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import User from "./user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "users", element: <Users /> },
  {
    path: "/users/:user",
    element: <User />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
