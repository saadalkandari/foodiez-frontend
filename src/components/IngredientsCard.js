import React from "react";
import { Card, Col } from "react-bootstrap";

function IngredientsCard({ ingredient }) {
  return (
    <Col className="col-lg-4 mx-auto" id="ingrediants">
      <Card>
        <Card.Body>
          <img alt={ingredient.name} src={ingredient.image} />
          <Card.Text>{ingredient.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IngredientsCard;
