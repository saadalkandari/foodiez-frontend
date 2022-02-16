import React from "react";
import categoryStore from "../stores/catogriesStore";
import { useState } from "react";
import { observer } from "mobx-react";
import { Button, Form, Row, Stack } from "react-bootstrap";
import Card from "../components/CategoriesCard";
import Modal from "./AddCategoryModal";

function CategoriesList() {
  const [query, setQuery] = useState("");

  const search = (event) => setQuery(event.target.value);
  const categoryList = categoryStore.categories
    .filter((category) =>
      category.title.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <Card key={category._id} category={category} />);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1 className="title">Categories</h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for product by name"
          onChange={search}
        />
      </Stack>

      <Row>{categoryList}</Row>
      <Button onClick={handleShow} className="m-1" variant="danger">
        ADD
      </Button>
      <Modal show={show} handleClose={handleClose}></Modal>
    </div>
  );
}

export default observer(CategoriesList);
