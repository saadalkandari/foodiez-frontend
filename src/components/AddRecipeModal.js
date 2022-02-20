import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import recipesStore from "../stores/recipesStore";
import catogriesStore from "../stores/catogriesStore";

function AddRecipeModal({ show, handleClose }) {
  const [recipe, setRecipe] = useState({ title: "" });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.title]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    recipesStore.createRecipe(recipe);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Recipe Title</Form.Label>
                <Form.Control type="text" placeholder="Enter recipe title" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" placeholder="Upload recipe image" />
              </Form.Group>

              <Form.Label>Category</Form.Label>
              <Form.Select className="mb-3" controlId="formBasicPassword">
                {catogriesStore.categories.map((category) => (
                  <option value={category.title}>{category.title}</option>
                ))}
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ingredients in this format (e.g. Lettuce, Tomatoes, Eggs, )"
                />
                <Form.Text className="text-muted"></Form.Text>
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

export default AddRecipeModal;
