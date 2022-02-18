// Library imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Style imports
import "./App.css";

// Component imports

import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LoginPage";
import Recipe from "./Pages/Recipes/Recipe";
import Shopping from "./Pages/Shopping/Shopping";
import Navbar from "./Components/Navbar/Navbar";
import SignUpPage from "./Pages/SignUp/SignUpPage";

// Component imports

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe" element={<Recipe />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
