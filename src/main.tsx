import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  {/* REMOVED BECAUSE IT DOUBLE DUPLICATES MY CLONES */}
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
