import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>My Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                backgroundColor: '#f1356d',
                color: 'white',
                borderRadius: '8px'
            }}>New Blog</Link>
        </div>
    </nav>
  ); 
}

export default Navbar;