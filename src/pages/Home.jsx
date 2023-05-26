import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/homewithcategories">HOMEWithCategories</Link>
        </li>
        <li>
          <Link to="/favoritemenu">FavoriteMenu</Link>
        </li>
        <li>
          <Link to="/loginregister">LoginRegister</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
