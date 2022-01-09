import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={handleChange}
      />
      {query !== "" && error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
