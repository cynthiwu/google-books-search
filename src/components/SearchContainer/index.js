import React from "react";
import "./style.css";
import SearchForm from "../SearchForm"
import SearchCard from "../SearchCard"

function SearchContainer() {

  return (
    
    <React.Fragment>
        <SearchForm /> 
        
            <main role="main" className="container" id="search">
                <section className="row">
                    <div className="results col-12">
                        <h2>Results</h2>
                        <hr/>
                        <SearchCard />
                    </div>
                </section>
            </main>
          
    </React.Fragment>
    )
    
}

export default SearchContainer;