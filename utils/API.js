import axios from "axios";

// Export an object containing method we'll use for accessing the book data
export default {
  getBook: function(title) {
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
  }

  //There was something here about an async call in the case that you need it. Session 20 / Activity 12. 
};
