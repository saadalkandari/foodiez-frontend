import React from "react";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
//import { BrowserRouter } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  nav justify-content-center    ">
        <ul className="nav ">
          <a
            className=" flex-sm-fill text-sm-center nav-link active"
            aria-current="page"
            href="#categories"
            smooth
          >
            CATEGORIES
          </a>

          <a
            className=" flex-sm-fill text-sm-center nav-link active"
            aria-current="page"
            href="#recepies"
            smooth
          >
            RECEPIES
          </a>

          <a
            className="nav-link active flex-sm-fill text-sm-center"
            aria-current="page"
            href="#ingrediants"
            smooth
          >
            INGREDIANTS
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
