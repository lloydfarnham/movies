import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ onSearchInputChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchInputChange(event) {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchInputChange(query);
  }

  return (
    <nav>
        <h2><Link to="/about" className='no-underline'>About</Link></h2>      
        <Link to="/" className='no-underline logo'><i class="fa-solid fa-film"></i></Link>             
        <input placeholder="Search" onChange={handleSearchInputChange} value={searchQuery} />
    </nav>
  );
}

export default NavBar;
