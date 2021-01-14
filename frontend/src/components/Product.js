import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import RatingDetails from "./RatingDetails";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-2 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Subtitle className="my-2 text-muted">
          <RatingDetails
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Subtitle>

        <Card.Text className="my-2">
          <h2>${product.price}</h2>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
