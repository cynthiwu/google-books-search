import React from "react";

const SearchContext = React.createContext({
  // query: "",
  searchResult: [],
  handleSearch: () => {}
});

export default SearchContext;
