import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Image,
  Form,
  ListGroup,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import { addToCart } from "../actions/cartActions";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkoutHandler = () => {
    history.push("/shipping");
  };

  return (
    <>
      <Row>
        <h1>Shopping Cart</h1>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={7} className="pb-3">
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/"> Go Back</Link>
            </Message>
          ) : (
            <>
              <ListGroup>
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2} style={{ margin: "auto" }}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={10}>
                        <Row className="my-2">
                          <Col style={{ margin: "auto" }}>
                            <span>
                              <strong>
                                <Link
                                  style={{ color: "darkblue" }}
                                  to={`/product/${item.product}`}
                                >
                                  {item.name}
                                </Link>
                              </strong>
                            </span>
                          </Col>
                        </Row>
                        {item.countInStock < 5 && (
                          <Row className="my-2">
                            <Col>
                              <span style={{ color: "red" }}>
                                Only {item.countInStock} in stock - order soon{" "}
                              </span>
                            </Col>
                          </Row>
                        )}
                        <Row>
                          <Col
                            sm={6}
                            className="mb-2"
                            style={{ margin: "auto" }}
                          >
                            Price: ${item.price}
                          </Col>
                          <Col>
                            <Row>
                              <Col style={{ margin: "auto" }}>
                                <Form.Control
                                  as="select"
                                  value={item.qty}
                                  onChange={(e) =>
                                    dispatch(
                                      addToCart(
                                        item.product,
                                        Number(e.target.value)
                                      )
                                    )
                                  }
                                >
                                  {[...Array(item.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                                </Form.Control>
                              </Col>
                              <Col
                                className="d-flex justify-content-center"
                                style={{ margin: "auto" }}
                              >
                                <Button
                                  type="button"
                                  variant="light"
                                  //   onClick={() => removeFromCartHandler(item.product)}
                                >
                                  <i className="fas fa-trash"></i>
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
        <Col md={3} style={{ margin: "0 auto" }}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <span>
                  <strong>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items:
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </strong>
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block btn-sm"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed to Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  );
};

export default CartScreen;
