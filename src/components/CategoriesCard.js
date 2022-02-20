import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import categoryStore from "../stores/catogriesStore";
//import categoriesData from "./categoriesData";
import "./categoriesCard.css";

function CategoriesCard({ category }) {
  return (
    //className="col-2 mb-2"
    <div className="card" id="categories">
      <button
        type="button"
        className="fill"
        onClick={() => {
          categoryStore.fetchCategoryRecipes(category._id);
          console.log(`category id is ${category._id}`);
        }}
      >
        {category.title}
      </button>
    </div>
  );
}

export default CategoriesCard;
