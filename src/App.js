
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./views/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
      </Router>
    </div>
  );
}

export default App;
