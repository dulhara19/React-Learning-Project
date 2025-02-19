import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const searchHandler = (event) => {
    //console.log(event.target.value);
    onSearch(event);
  };

  return (
    <div>
      <input
        placeholder="search"
        id="searchbar"
        type="text"
        className="searchbar"
        onChange={searchHandler}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch must be a function
};

export default SearchBar;
