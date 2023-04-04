import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ onSearchInputChange, searchQuery }) {
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  function handleSearchInputChange(event) {
    const query = event.target.value;
    setQuery(query);
    onSearchInputChange(query);
  }

  function handleClearSearch() {
    setQuery("");
    onSearchInputChange("");
  }

  return (
    <nav>
      <h2>
        <Link to="/about" className="no-underline">
          About
        </Link>
      </h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearchInputChange}
        />
        {query && (
          <button className="clear-search" onClick={handleClearSearch}>
            X
          </button>
        )}
      </div>
      <Link to="/" className="no-underline logo">
        <i class="fa-solid fa-film"></i>
      </Link>
    </nav>
  );
}

export default NavBar;
