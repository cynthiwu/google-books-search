import React from "react";

// To add props
function SavedCard(props) {
    return <div className="card" key={props.id}>
                <h3 className="card-title ml-3 mt-3">{props.title}</h3>
                <h5 className="card-author ml-3">{props.authors}</h5>
    
                <span className="card-body">
                    <img className="thumbnail float-left" src={process.env.PUBLIC_URL + props.image}/>
                    <p className="float-left ml-4">{props.description}</p>
                    <div className="float-right">
                        <a type="button" className="btn btn-info m-1" href={props.link} target="_blank">View</a>
                        <button type="button" class="btn btn-danger m-1" onClick={() => props.handleDelete(props._id)}>Delete</button>
                    </div>
                </span>
            </div>
}

export default SavedCard;