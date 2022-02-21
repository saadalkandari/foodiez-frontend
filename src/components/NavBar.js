import React from "react";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
//import { BrowserRouter } from "react-router-dom";
import recipesStore from "../stores/recipesStore";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "./AddRecipeModal";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">
      <div className="collapse navbar-collapse justify-content-center nav-tabs">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className=" nav-link" href="#categories" smooth>
              CATEGORIES
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#recepies"
              smooth
              onClick={recipesStore.fetchAllRrecipes}
            >
              RECEPIES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#ingrediants" smooth>
              INGREDIANTS
            </a>
          </li>
        </ul>
      </div>
      <Button onClick={handleShow} className="m-1" variant="warning" size="sm">
        ADD RECIPE
      </Button>
      <Modal show={show} handleClose={handleClose}></Modal>;
    </nav>
  );
};

export default NavBar;
