//IngredientsCard
import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import IngredientDetailModal from "./IngredientDetailModal";

function IngredientsCard({ ingredient }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    console.log("first");
    setShow(false);
  };
  return (
    <Col className="col-lg-4 mx-auto" id="ingrediants">
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          width: "300px",
          height: "300px",
          margin: "10px",
        }}
      >
        <Card.Body
          onClick={() => {
            setShow(true);
          }}
        >
          <img
            className="ingredient-image"
            alt={ingredient.name}
            src={ingredient.image}
          />
          <Card.Text>{ingredient.name}</Card.Text>
        </Card.Body>
        <IngredientDetailModal
          show={show}
          handleClose={handleClose}
          ing={ingredient}
        ></IngredientDetailModal>
      </Card>
    </Col>
  );
}

export default IngredientsCard;
