import React from "react";
import "./style.css";

function Search() {

  return (
  
    <form> 
        <div className="form-group">
            <label for="exampleInputEmail1">Book Search</label>
            <input type="text" class="form-control" id="book-search"  placeholder="Enter book title" />
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
    </form> 
    )
    
}

export default Search;