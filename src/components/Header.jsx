import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>React Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-post">Post</Link>
          </li>
        </ul>
        <form className="search-post">
          <input type="text" placeholder="Search Post..." />
        </form>
      </nav>
    </header>
  );
};

export default Header;
