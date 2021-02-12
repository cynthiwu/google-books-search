import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {

const location = useLocation();

  return (
  
    <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <h1 id="navhead"><b>Google Books</b></h1>
                <span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </span>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <li>
                        <Link to="/search" className={location.pathname === "/search" ? "nav-link active ml-3" : "nav-link ml-3"}>Search</Link>
                    </li> 
                    <li>
                        <Link to="/saved" className={location.pathname === "/search" ? "nav-link active ml-1" : "nav-link ml-1"}>Saved</Link>
                    </li>
                </div>
            </div>
        </nav>
    </header>
)

}

export default Navbar;