import React from "react";
import { useState } from "react";
import "./style.css";
import SearchForm from "../SearchForm";
import SearchCard from "../SearchCard";
import SearchContext from "../../utils/searchContext";
import API from "../../utils/API";


function SearchContainer() {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState();

    function handleSearch(event) {
        event.preventDefault();

        let query = event.target.search.value;

        // Why doesn't this work????
        // API.getBooks(query).then((res) => {
        //     return res.json();
        // })

        fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${query}`)
        .then((res) => {
            return res.json();
        }).then((res) => {

            console.log(res);
            setResult(res.items);
            console.log(result);

        }).catch(err => console.log(err));
      };

  return (
    
    <React.Fragment>
        <SearchForm handleSearch={ handleSearch }/> 
        
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