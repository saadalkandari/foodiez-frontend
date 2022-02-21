//IngredientsList
import React from "react";
import { observer } from "mobx-react";
import ModalIngredients from "./AddIngredientModal";
import { Button, Row } from "react-bootstrap";
import { useState } from "react";
import ingredientStore from "../stores/ingredientsStore";
import Card from "./IngredientsCard";

function Ingredients() {
  const [show, setShow] = useState(false);

  const IngredientsList = ingredientStore.ingredients.map((ingredient) => (
    <Card key={ingredient.id} ingredient={ingredient} />
  ));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <h2 className="ingredient-header">
        Ingredients{" "}
        <Button
          onClick={handleShow}
          className="m-1"
          variant="warning"
          size="sm"
        >
          ADD INGREDIENT
        </Button>
      </h2>
      <ModalIngredients
        show={show}
        handleClose={handleClose}
      ></ModalIngredients>

      <Row
        style={{
          display: "flex",
          flexFlow: "row-wrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "flex-start",
          margin: "20px",
        }}
      >
        {IngredientsList}
      </Row>
    </div>
  );
}

export default observer(Ingredients);
