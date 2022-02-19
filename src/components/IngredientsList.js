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
    <div>
      <p>Ingredients</p>
      <ModalIngredients
        show={show}
        handleClose={handleClose}
      ></ModalIngredients>

      <Button onClick={handleShow} className="m-1" variant="warning" size="sm">
        ADD INGREDIENT
      </Button>
      <Row className=" b-1">{IngredientsList}</Row>
    </div>
  );
}

export default observer(Ingredients);
