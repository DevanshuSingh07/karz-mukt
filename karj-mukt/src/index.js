import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from "react-router";
import App from "./App";
import "./index.css"
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <SpeedInsights/>
  <App/>
  {/* <Routes>
    <Route path="/" element={<HomePage/>}/> 
  </Routes> */}
  </BrowserRouter>
);
