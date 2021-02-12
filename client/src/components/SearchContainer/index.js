import React from "react";
import "./style.css";
import SearchForm from "../SearchForm";
import SearchCard from "../SearchCard";
import SearchContext from "../../utils/SearchContext";


function SearchContainer() {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    function handleSearch(event) {
        event.preventDefault();

        let query = event.target.search.value;
        
        if (formObject.title && formObject.author) {
          API.saveBook({
            title: formObject.title,
            author: formObject.author,
            synopsis: formObject.synopsis
          })
            .then(res => loadBooks())
            .catch(err => console.log(err));
        }
      };

  return (
    
    <React.Fragment>
        <SearchForm /> 
        
            <main role="main" className="container" id="search">
                <section className="row">
                    <div className="results col-12">
                        <h2>Results</h2>
                        <hr/>
                        <SearchCard />
                    </div>
                </section>
            </main>
          
    </React.Fragment>
    )
    
}

export default SearchContainer;