import React from "react";
import { useState } from "react";
import "./style.css";
import SearchForm from "../SearchForm";
import SearchCard from "../SearchCard";
// import useSearchContext from "../../utils/searchContext";
import API from "../../utils/API";


function SearchContainer() {

    const [searchResult, setSearchResult] = useState();

    function handleSearch(event) {
        event.preventDefault();
        
        let query = event.target.search.value;
        console.log(query)

        // Why doesn't this work????
        // API.searchBooks(query)
        
        // .then((res) => {
        //     return res.json();
        // })

        fetch(`https://www.googleapis.com/books/v1/volumes?q=title:${query}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
         
            let newObject = res.items.map(item => {
                return {
                _id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks.thumbnail,
                link: item.volumeInfo.infoLink
                }
            });
            setSearchResult(newObject);
            console.log(searchResult);

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
                            {/* <SearchCard /> */}

                            {searchResult?.length && searchResult.map(item => {
                                <SearchCard {...item}/>
                                })
                            }
                    </div>
                </section>
            </main>
          
    </React.Fragment>
    )
    
}

export default SearchContainer;