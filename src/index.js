import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/index";
import {RouterProvider} from "react-router-dom";
import './assest/css/tailwind.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);
