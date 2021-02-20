import React, { useEffect, useState } from "react";
import "./style.css";
import SavedCard from "../../components/SavedCard";
import API from "../../utils/API";

// Container for holder all components for saving.
function SavedContainer() {
  // Setting state to save and set saved books from the Serach page.
  const [savedBooks, setSavedBooks] = useState([]);

  // Pulling saved books from the database and setting them to state.
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    API.getBooks()
      .then((books) => {
        setSavedBooks(books);
        console.log(savedBooks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to handle a delete request.
  function handleDelete(bookId) {
    let deletedBook = savedBooks.filter((book) => book._id === bookId);
    API.deleteBook(deletedBook[0]._id).catch((err) => console.error(err));

    let filteredBooks = savedBooks.filter((book) => book._id !== bookId);
    setSavedBooks(filteredBooks);
  }

  return (
    <React.Fragment>
      <main role="main" className="container">
        <section className="row">
          <div className="col-xs-12 col-sm-8 col-md-12 p-4">
            <h2>Saved Books</h2>
            <hr />
            {savedBooks.map((book) => (
              <SavedCard key={book._id} {...book} handleDelete={handleDelete} />
            ))}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default SavedContainer;
