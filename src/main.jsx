import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GameProvider } from "./GameContext.jsx";
import "./index.css";

// Mount the app. The whole app is wrapped in <GameProvider> so that
// every component can use the useGame() hook.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
);
