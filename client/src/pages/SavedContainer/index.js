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
    
        // API.deleteBook(bookData.props);
        // Filter out deleted book and re-save state with new array. 
    
    }

    return (
        
        <React.Fragment>
            
                <main role="main" className="container">
                    <section className="row">
                        <div className="col-xs-12 col-sm-8 col-md-12 p-4">
                            <h2>Saved Books</h2>
                            <hr/>
                            <SavedCard />
                        </div>
                    </section>
                </main>
            
        </React.Fragment>
    )
    
}

export default SavedContainer;