import React from "react";
import "./style.css";

function Search() {


  return (
  
    <form className="form"> 
        <label className="form-title">Book Search</label>
            <div className="form-inline">
                <input type="search" name="search" className="form-control" id="search"  placeholder="Enter book title" />
                <button type="submit" className="btn btn-primary font-weight-bold">Search</button>
            </div>
        
    </form> 
    )
    
}

export default Search;