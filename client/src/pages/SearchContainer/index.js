import React from "react";
import { useState } from "react";
import "./style.css";
import SearchForm from "../../components/SearchForm";
import SearchCard from "../../components/SearchCard";
import API from "../../utils/API";

// Container to hold search components.
function SearchContainer() {
  // Setting state to save and set search results from Google API.
  const [searchResult, setSearchResult] = useState([]);

  // Function to handle the search.
  function handleSearch(event) {
    event.preventDefault();

    let query = event.target.search.value;
    API.searchBooks(query)
      .then(({ data }) => {
        console.log(data);
        let newArray = data.items.map((book) => ({
          _id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks?.thumbnail || "No thumbnail",
          link: book.volumeInfo.infoLink,
        }));
        setSearchResult(newArray);
      })
      .catch((err) => console.log(err));
  }

  // Function to handle a save request from the user.
  function handleSave(bookID) {
    console.log(bookID);

    let savedBook = searchResult.find((book) => book._id === bookID);
    API.saveBook(savedBook)
      .then(() => console.log("Storing book"))
      .catch((err) => console.error(err));

    let filteredBooks = searchResult.filter((book) => book._id !== bookID);
    setSearchResult(filteredBooks);
  }

  return (
    <React.Fragment>
      <SearchForm handleSearch={handleSearch} />
      <section className="container" id="search">
        <div className="row">
          <div className="results col-12">
            <h2>Results</h2>
            <hr />
            {searchResult.map((book) => (
              <SearchCard key={book._id} {...book} handleSave={handleSave} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SearchContainer;
