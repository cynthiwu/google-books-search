import React from "react";

// To add props
function SavedCard() {
    return <div className="card">
                <h3 className="card-title">Book Title</h3>
                <h4 className="card-author">Author Name</h4>
                
                <div className="card-body">
                    <img className="thumbnail" src=""/>
                    <p>Synopsis of book</p>
                </div>
                <div>
                    <button type="button" class="btn btn-info">View</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
        </div>
}

export default SavedCard;