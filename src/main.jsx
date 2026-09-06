import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../CSS/styles.css";
import "../CSS/calendar.css";

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
