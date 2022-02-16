import React from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import categoryStore from "../stores/catogriesStore";

function AddCategoryModal({ show, handleClose }) {
  const [category, setCategory] = useState({ title: "" });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.title]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    categoryStore.addCategory(category);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Title</InputGroup.Text>
              <FormControl
                placeholder="Your Category's name"
                title="title"
                value={category.title}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>

            <Button variant="dark" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCategoryModal;
