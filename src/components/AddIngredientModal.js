import React from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import ingredientStore from "../stores/ingredientsStore";

function AddIngredientModal({ show, handleClose }) {
  const [ingredient, setingredient] = useState({ name: "" });

  const handleChange = (event) => {
    setingredient({ ...ingredient, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientStore.createIngredient(ingredient);
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Ingredient</InputGroup.Text>
              <FormControl
                placeholder="Your Ingredient's name"
                name="name"
                value={ingredient.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>

            <Button variant="warning" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddIngredientModal;
