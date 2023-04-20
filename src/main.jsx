import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "./providers/ToastProvider";
import { AuthProvider } from "./providers/AuthProvider";
import { DnDProvider } from "./providers/DnDProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <DnDProvider>
          <App />
        </DnDProvider>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
