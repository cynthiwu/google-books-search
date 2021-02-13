import React from "react";
import { useState } from "react";
import "./style.css";
import SearchForm from "../SearchForm";
import SearchCard from "../SearchCard";
import API from "../../utils/API";


function SearchContainer() {

    const [searchResult, setSearchResult] = useState([]);

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
        .then((data) => {
         
            let newArray = data.items.map((book) => ({
                _id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks?.thumbnail || "No thumbnail",
                link: book.volumeInfo.infoLink
            }));

            console.log(newArray)
            console.log(typeof(newArray))

            return newArray;
            // setSearchResult(newObject);
        

        })
        .then((res) => {
            setSearchResult(res);
            console.log(searchResult);
        })
        .catch(err => console.log(err));
      };

  return (
    
    <React.Fragment>
        <SearchForm handleSearch={ handleSearch }/> 
            <section className="container" id="search">
                <div className="row">
                    <div className="results col-12">
                        <h2>Results</h2>
                        <hr/>
                            {searchResult.map(book => <SearchCard {...book} />)
                            }
                    </div>
                </div>
            </section>
    </ React.Fragment>

          
    
    )
    
}

export default SearchContainer;