import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import categoryStore from "../stores/catogriesStore";
//import categoriesData from "./categoriesData";

function CategoriesCard({ category }) {
  return (
    <Col className="col-lg-4 mx-auto" id="categories">
      <Card
        style={{
          margin: "7px",
          backgroundColor: "white",
        }}
      >
        <Button
          style={{
            backgroundColor: "white",
            color: "grey",
            borderColor: "grey",
          }}
          onClick={() => {
            categoryStore.fetchCategoryRecipes(category._id);
            console.log(`category id is ${category._id}`);
          }}
        >
          <Card.Body>
            <Card.Text>{category.title}</Card.Text>
          </Card.Body>
        </Button>
      </Card>
    </Col>
  );
}

export default CategoriesCard;
