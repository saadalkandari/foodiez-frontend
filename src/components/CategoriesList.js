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
      {/* <h1 className="title">Categories</h1> */}
      <Stack direction="horizontal" gap={2}>
        <Form.Control
          className="m-2"
          placeholder="Seach by Category Name"
          onChange={search}
        />
        <Button
          onClick={handleShow}
          className="m-1"
          variant="warning"
          size="sm"
        >
          ADD CATEGORY
        </Button>
      </Stack>

      <Row className=" b-1">{categoryList}</Row>

      <Modal show={show} handleClose={handleClose}></Modal>
    </div>
  );
}

export default observer(CategoriesList);
