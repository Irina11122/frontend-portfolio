import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js";
import Loader from "./components/Loader.jsx";
createRoot(document.getElementById("root")).render(
  <Suspense
    fallback={
      <div className="h-screen bg-black text-green-300 flex justify-center items-center">
        <Loader />
      </div>
    }
  >
    <App />
  </Suspense>
);
