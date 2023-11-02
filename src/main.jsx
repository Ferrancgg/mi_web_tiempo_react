import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import WeatherCity from "./pages/WeatherCity/WeatherCity.jsx";
import CitySelector from "./pages/CitySelector/CitySelector.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="prevision" element={<WeatherCity />} />
          <Route path="buscador" element={<CitySelector />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
