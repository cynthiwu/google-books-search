import React from "react";

// To add props
function SearchCard(props) {
    return <div className="card">
                <h3 className="card-title ml-3 mt-3">{props.title}</h3>
                <h5 className="card-author ml-3">{props.authors}</h5>
                
                <span className="card-body">
                    <img className="thumbnail float-left" src={process.env.PUBLIC_URL + props.image}/>
                    <p className="float-left ml-4">{props.description}</p>
                    <div className="float-right">
                    <button type="button" className="btn btn-info m-1">View</button>
                    <button type="button" className="btn btn-success m-1">Save</button>
                    </div>
                </span>
        </div>
}

export default SearchCard;