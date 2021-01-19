import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_container">
          <p>
            <Link to="/">acine carée</Link>
          </p>
          <ul className="nav">
            <li>
              <Link to="/signin">
                {" "}
                <i className="fa fa-user"></i> SignIn
              </Link>
            </li>
            <li className="admin-item">
              <Link>
                {" "}
                <i className="fa fa-user-plus"></i> Admin
                <ul>
                  <li>
                    <Link to="/admin">posts</Link>
                  </li>
                </ul>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
