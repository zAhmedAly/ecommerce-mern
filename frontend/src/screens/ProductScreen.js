import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";

const ProductScreen = ({ match }) => {
  console.log("product id = ", match.params.id);
  console.log("products = ", products);

  const product = products.find((p) => p._id === match.params.id);
  console.log("product = ", product);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default ProductScreen;
