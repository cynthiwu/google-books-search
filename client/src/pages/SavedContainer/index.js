import React, { useEffect, useState } from "react";
import "./style.css";
import SavedCard from "../../components/SavedCard";
import API from "../../utils/API";


function SavedContainer() {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getBooks()
        .then(savedBook => {
            setSavedBooks(savedBook);
            console.log(savedBook);
        });
        
        //     setSavedBooks(savedBook))
        // .catch(err => console.log(err))
    }, []);

    function handleDelete(bookId) {
        
        let deletedBook = savedBooks.filter(book => book._id === bookId);
        console.log(deletedBook[0]._id);
        API.deleteBook(deletedBook[0]._id)
        .catch(err => console.error(err));

        let filteredBooks = savedBooks.filter(book => book._id !== bookId)
        setSavedBooks(filteredBooks);
        console.log(filteredBooks);
    
    }

    return (
        
        <React.Fragment>
            
                <main role="main" className="container">
                    <section className="row">
                        <div className="col-xs-12 col-sm-8 col-md-12 p-4">
                            <h2>Saved Books</h2>
                            <hr/>
                            {savedBooks.map(book => <SavedCard key={book._id} {...book} handleDelete = { handleDelete
                                }/>)
                            }

                        </div>
                    </section>
                </main>
            
        </React.Fragment>
    )
    
}

export default SavedContainer;