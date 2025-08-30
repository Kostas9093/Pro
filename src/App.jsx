// src/App.jsx
import TrackerApp from "./Tracker/App.jsx";
import RecipeApp from "./recipe/App.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TrackerApp from "./Tracker/App.jsx";
import RecipeApp from "./recipe/App.jsx";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/tracker" style={{ marginRight: "15px" }}>Calorie Tracker</Link>
          <Link to="/recipe">Recipe Creator</Link>
        </nav>

        <Routes>
          <Route path="/tracker/*" element={<TrackerApp />} />
          <Route path="/recipe/*" element={<RecipeApp />} />
          <Route path="/" element={<h2>Welcome! Choose an app above.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
