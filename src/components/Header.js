import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <h1 style={{ color: "black", fontSize: "70px" }}>Game of Life</h1>
      </Link>
      <Link to="/about">
        <h2 style={{ color: "#413f3f" }}>About</h2>
      </Link>
    </div>
  );
};
export default Header;
