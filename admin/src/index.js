import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { AuthContextProvider } from "./admin/context/adminContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CookiesProvider>
      <AuthContextProvider>  
          <App />
      </AuthContextProvider>
    </CookiesProvider>
  </BrowserRouter>
);
