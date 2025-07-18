import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Suspense } from "react";
import "./index.css";
import CanvasLoader from "./components/Loader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={CanvasLoader}>
      <App />
    </Suspense>
  </React.StrictMode>
);
