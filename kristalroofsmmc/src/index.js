import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./root/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./root/Dashboard";

// Define the loadRootData function
const loadRootData = async () => {
  // Example: Fetch data or perform any asynchronous operation
  return { message: "Root data loaded" };
};

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: loadRootData,
    children: [
      // Include the routes from Dashboard
      { path: "/", element: <Dashboard /> },
      { path: "/products", element: <Dashboard /> },
      { path: "/products/:id", element: <Dashboard /> },
      { path: "/gallery", element: <Dashboard /> },
      { path: "/discounts", element: <Dashboard /> },
      { path: "/design", element: <Dashboard /> },
      { path: "/contact-us", element: <Dashboard /> },
      { path: "/calculator", element: <Dashboard /> },
      { path: "/accesories", element: <Dashboard /> },
      { path: "/about-us", element: <Dashboard /> },
      { path: "*", element: <Dashboard /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
