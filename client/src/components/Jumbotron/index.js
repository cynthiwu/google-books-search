import React from "react";
import "./style.css";

// Simple component for Jumbotron across pages.
function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <div className="subtitle">
        <h1>React Google Books Search</h1>
        <h5>Search for and save books of interest</h5>
      </div>
    </div>
  );
}

export default Jumbotron;
