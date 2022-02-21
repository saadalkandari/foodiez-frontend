import React from "react";
import { Button, FormControl, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import ingredientStore from "../stores/ingredientsStore";

function AddIngredientModal({ show, handleClose }) {
  const [ingredient, setIngredient] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientStore.createIngredient(ingredient);
    handleClose();
  };
  const handleImage = (event) => {
    setIngredient({ ...ingredient, image: event.target.files[0] });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingredient</Form.Label>
                <FormControl
                  placeholder="Your Ingredient's name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Upload ingredient image"
                  onChange={handleImage}
                  name="image"
                />
              </Form.Group>
            </Form>

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
