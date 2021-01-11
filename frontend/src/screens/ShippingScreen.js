import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ShippingScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (userInfo && cartItems) {
      history.push("/shipping");
    } else {
      history.push("/login?redirect=cart");
    }
  }, [history, userInfo, cartItems]);

  return <div>Shipping</div>;
};

export default ShippingScreen;
