import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route } from "react-router";
import App from "./App";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <App/>
  {/* <Routes>
    <Route path="/" element={<HomePage/>}/> 
  </Routes> */}
  </BrowserRouter>
);
