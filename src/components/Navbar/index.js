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
                    <li><Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>Search</Link></li>
                    <li className="nav-link"><Link to="/saved" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>Saved</Link></li>
                </div>
            </div>
        </nav>
    </header>
)

}

export default Navbar;