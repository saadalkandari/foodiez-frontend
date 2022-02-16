import React from "react";
import { Card, Col } from "react-bootstrap";
//import categoriesData from "./categoriesData";

function CategoriesCard({ category }) {
  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Body>
          <Card.Text>{category.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CategoriesCard;
