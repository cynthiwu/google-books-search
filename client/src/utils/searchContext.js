import React from "react";

const SearchContext = React.createContext({
  // query: "",
  searchResult: [],
  handleBtnClick: () => {}
});

export default SearchContext;
