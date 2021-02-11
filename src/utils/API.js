import axios from "axios";

// Export an object containing method we'll use for accessing the book data
export default {
  searchBook: function(title) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`)
        .then(res => {
          const books = res.data;
          const results = books.map(book => {
            return {
              id: book.items.id,
              title: book.items.volumeInfo.title,authors: book.items.volumeInfo.authors,
              description: book.items.volumeInfo.description,
              image: book.items.volumeInfo.imageLinks.thumbnail,
              link: book.items.volumeInfo.infoLink.thumbnail
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },

  // Gets all books
  getBooks: function() {
    return axios.get("/api/books").then(result => result.data);
  },
  // Save a new book to database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  }


  //There was something here about an async call in the case that you need it. Session 20 / Activity 12. 
};
