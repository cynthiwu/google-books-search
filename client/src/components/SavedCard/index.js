import React from "react";

// To add props
function SavedCard() {
    return <div className="card">
                <h3 className="card-title ml-3 mt-3">Book Title</h3>
                <h5 className="card-author ml-3">Author Name</h5>
    
                <span className="card-body">
                    <img className="thumbnail float-left" src="http://books.google.com/books/content?id=53Tv9BaNjGoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"/>
                    <p className="float-left ml-4">Synopsis of book</p>
                    <div className="float-right">
                        <button type="button" class="btn btn-info m-1">View</button>
                        <button type="button" class="btn btn-danger m-1">Delete</button>
                    </div>
                </span>
            </div>
}

export default SavedCard;