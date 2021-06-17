import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";

function App() {
  return (
      <Router>
        <Navbar/>
      </Router>
  );
}

export default App;
