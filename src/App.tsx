// Library imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Style imports
import "./App.css";

// Component imports
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/SignIn/SignIn";
import Recipe from "./Pages/Recipes/Recipe";
import Shopping from "./Pages/Shopping/Shopping";

// Component imports

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="signin" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
