import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = reactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);