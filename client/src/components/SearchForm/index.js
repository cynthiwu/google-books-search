import React from "react";
import "./style.css";
import SearchContext from "../../utils/SearchContext";
function Search() {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

  return (
  
    <form className="form"> 
        <label className="form-title">Book Search</label>
            <div className="form-inline">
                <input type="text" className="form-control" id="book-search"  placeholder="Enter book title" />
                <button type="submit" className="btn btn-primary font-weight-bold">Search</button>
            </div>
        
    </form> 
    )
    
}

export default Search;