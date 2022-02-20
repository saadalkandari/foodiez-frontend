import React from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { useState } from "react";
import recipesStore from "../stores/recipesStore";
import catogriesStore from "../stores/catogriesStore";

function AddRecipeModal({ show, handleClose }) {
  const [nwRecipe, setNwRecipe] = useState({
    title: "",
    image: "",
    category: "620d09746ce68c5514be2b63",
    ing: "",
  });

  const handleChange = (event) => {
    setNwRecipe({ ...nwRecipe, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    recipesStore.createRecipe(nwRecipe);
    handleClose();
  };
  const handleImage = (event) => {
    setNwRecipe({ ...nwRecipe, image: event.target.files[0] });
    console.log(
      "🚀 ~ file: AddRecipeModal.js ~ line 26 ~ handleImage ~ nwRecipe",
      nwRecipe
    );
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Recipe Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter recipe title"
                  onChange={handleChange}
                  name="title"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Upload recipe image"
                  onChange={handleImage}
                  name="image"
                />
              </Form.Group>

              <Form.Label>Category</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="category"
                className="mb-3"
                controlId="formBasicPassword"
              >
                {catogriesStore.categories.map((category) => (
                  <option value={category._id}>{category.title} </option>
                ))}
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ingredients in this format (e.g. Lettuce, Tomatoes)"
                  onChange={handleChange}
                  name="ing"
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
