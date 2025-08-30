import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";              // Welcome page
import RecipeApp from "./recipe/App";   // Your recipe app
import TrackerApp from "./Tracker/App"; // Your tracker app

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes><Route path="/" element={<Home />} /></Routes>
     
      <nav className="p-4 bg-gray-200 flex gap-4">
        {/* <Link to="/">Home</Link> */}
        <Link to="/recipe">Recipe App</Link>
        <br/>
        <Link to="/tracker">Tracker App</Link>
      </nav>
      <Routes>
        <Route path="/recipe" element={<RecipeApp />} />
        <Route path="/tracker" element={<TrackerApp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
