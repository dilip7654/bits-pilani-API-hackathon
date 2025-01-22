import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { Route } from 'react-router-dom'
import { AuthProvider } from "./components/AuthContext";
import ReactDOM from "react-dom/client";
import { AppointmentProvider } from "./components/AppointmentContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <AppointmentProvider>
        <App />
        </AppointmentProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)