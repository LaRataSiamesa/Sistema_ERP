import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom"; // Importar BrowserRouter
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-37dv28os4s37jev8.us.auth0.com"
      clientId="OCSwh4tArYkPV4va71nbYIyr51DTljwr"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
