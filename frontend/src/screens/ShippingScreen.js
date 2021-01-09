import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";

const ShippingScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login?redirect=shipping");
    }
  }, [history, userInfo]);

  return <div>Shipping</div>;
};

export default ShippingScreen;
