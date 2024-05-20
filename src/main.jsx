import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./constants/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}>
          <Route path="/" exact element={<Navigate to="/calendar" />} />

          {AppRoutes.map((route) => (
            <Route
              exact
              key={route.id}
              path={route.to}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
