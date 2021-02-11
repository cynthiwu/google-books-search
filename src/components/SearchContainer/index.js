import React from "react";
import "./style.css";
import SearchForm from "../SearchForm"
import SearchCard from "../SearchCard"

function SearchContainer() {

  return (
    
    <React.Fragment>
        <SearchForm /> 
        
            <main role="main" className="container">
                <section className="row">
                    <div className="col-xs-12 col-sm-8 col-md-12 p-4 about-me">
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