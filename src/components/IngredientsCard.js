import React from "react";
import { Card, Col } from "react-bootstrap";

function IngredientsCard({ ingredient }) {
  return (
    <Col className="col-lg-4 mx-auto" id="ingrediants">
      <Card>
        <Card.Body>
          <Card.Text>{ingredient.image}</Card.Text>
          <Card.Text>{ingredient.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IngredientsCard;
