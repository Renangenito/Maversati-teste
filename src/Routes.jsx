import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Shop from "./pages/shop/Shop.jsx";
import CartShop from "./pages/cart-shop/CartShop.jsx";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Shop />} path="/shop" />
        <Route element={<CartShop />} path="/cart-shop" />
      </Routes>
    </HashRouter>
  );
}
