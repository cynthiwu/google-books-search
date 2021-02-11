import React from "react";
import "./style.css";
import SavedCard from "../SavedCard"

function SavedContainer() {

  return (
    
    <React.Fragment>
        
            <main role="main" className="container">
                <section className="row">
                    <div className="col-xs-12 col-sm-8 col-md-12 p-4 about-me">
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