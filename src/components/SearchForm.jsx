import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    console.log("Searching for:", searchTerm);
    // setSearchTerm("");
  };
  return (
    <form className="d-flex" onSubmit={handleSubmit} role="search">
      <input
        type="text"
        className="form-control me-2"
        id="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        aria-label="Search"
      />
      <button className="btn btn-outline-secondary" type="submit">
        Search
      </button>
    </form>
  );
};
export default SearchForm;
