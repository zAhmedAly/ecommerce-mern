import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <Router>
      <Header />
      {/* <Container> */}
      <main className="py-3">
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />

          <Route path="/shipping" component={ShippingScreen} />

          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </main>
      {/* </Container> */}
      <Footer />
    </Router>
  );
}

export default App;
