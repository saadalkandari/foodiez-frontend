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
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  nav justify-content-center   ">
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
            onClick={recipesStore.fetchAllRrecipes}
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
          <Button
            onClick={handleShow}
            className="m-1"
            variant="warning"
            size="sm"
          >
            ADD RECIPE
          </Button>
        </ul>
        <Modal show={show} handleClose={handleClose}></Modal>;
      </nav>
    </div>
  );
};

export default NavBar;
