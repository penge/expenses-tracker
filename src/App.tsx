import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Expenses Tracker</h1>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default App;
