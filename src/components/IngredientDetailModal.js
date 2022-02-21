import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Modal,
  Form,
  Row,
} from "react-bootstrap";
import recipeStore from "../stores/recipesStore";

function IngredientDetailModal({ show, handleClose, ing }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                "flex-direction": "column",
                gap: "20px",
                textAlign: "center",
              }}
            >
              {/* {ing.recipies.map(in => <Form.Label>{in}</Form.Label>)} */}
              <h1>Recipe List</h1>
              {ing.recipies.map((ii) => {
                const recipeNmae = recipeStore.recipes.find(
                  (rec) => rec._id === ii
                );

                return (
                  <div>
                    <Row>
                      <Form.Label>{recipeNmae.title}</Form.Label>
                    </Row>
                  </div>
                );
              })}
              {/* <Form.Label>Ingredients</Form.Label> */}
              <div>
                <Row>
                  <img
                    alt={ing.name}
                    src={ing.image}
                    style={{ width: "250px", margin: "auto" }}
                  />
                </Row>
              </div>

              <Button variant="warning" type="submit" onClick={handleSubmit}>
                close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default IngredientDetailModal;
