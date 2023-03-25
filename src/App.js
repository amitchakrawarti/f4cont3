import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostApi from "./PostApi";
import Results from "./Results";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/PostApi" element={<PostApi />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
