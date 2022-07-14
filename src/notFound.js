import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
        <h2>404 Error!</h2>
        <p>Sorry! That page cannot be found!</p>
        <Link to="/">Go To Home Page </Link>
    </div>
  );
}

export default NotFound;