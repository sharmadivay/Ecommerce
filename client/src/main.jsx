import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/auth.jsx";
import { SearchProvider } from "./Context/search.jsx";
import { CartProvider } from "./Context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>
);
