import CardCartShop from "../../components/card-cartshop/CardCartShop";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./CartShop.css";
import React, { useEffect, useState } from "react";

export default function CartShop() {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("carrinho");
    if (cartItemsString) {
      const parsedCartItems = JSON.parse(cartItemsString);
      setCartItems(parsedCartItems);
    }
  }, []);

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      const itemValue = parseFloat(item.value);
      console.log(item.value);
      if (!isNaN(itemValue)) {
        subtotal += itemValue;
      }
    });
    return subtotal;
  };

  const applyCoupon = () => {
    const couponInput = document.getElementById("input-cupom");
    const couponValue = couponInput.value;
    if (couponValue === "UTFPR") {
      setDiscount(15);
      setCouponApplied(true);
      console.log(couponApplied);
      alert("Cupom aplicado com sucesso!");
      couponInput.value = "";
    } else {
      alert("Cupom inválido!");
      couponInput.value = "";
    }
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const total = subtotal - (subtotal * discount) / 100;
    return total;
  };

  const formatCurrency = (value) => {
    return value.toFixed(2);
  };

  const handleFinalizar = () => {
    const titles = cartItems.map((item) => item.title).join(", ");
    const total = formatCurrency(calculateTotal());
    alert(`Produtos: ${titles}\nTotal da compra: R$ ${total}\nObrigado por comprar na Maversati!`);
    localStorage.removeItem("carrinho");
    setCartItems([]);
  };

  return (
    <div className="cart-shop-page">
      <header className="navbar">
        <Navbar />
      </header>
      <p className="title-cart-shop">Seu Carrinho</p>
      <div className="cart-shop-container">
        <div className="your-cart-content">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CardCartShop
                key={index}
                imgcard={item.image}
                title={item.title}
                value={item.value}
                collor={item.collor}
              />
            ))
          ) : (
            <p className="text-alert-cart">Seu carrinho está vazio</p>
          )}
        </div>
        <div className="total-content">
          <div className="sub-total-box">
            <p className="text-weight mr-text-cart">Sub-total</p>
            <p className="text-weight">
              R$ {cartItems.length > 0 ? formatCurrency(calculateSubtotal()) : "0.00"}
            </p>
          </div>
          <div className="total-box">
            <p className="text-weight mr-text-cart mt-text-cart">Total</p>
            <p className="text-weight mt-text-cart">
              R$ {cartItems.length > 0 ? formatCurrency(calculateTotal()) : "0.00"}
            </p>
          </div>
          <div className="cupom-box">
            <input
              type="text"
              name="input-cupom"
              id="input-cupom"
              className="ipt-cartshop mr-text-cart"
              placeholder="Cupom de Desconto"
            />
            <button type="button" className="btn-cartshop" onClick={applyCoupon}>
              Aplicar
            </button>
          </div>
          <button type="button" className="btn-cartshop" onClick={handleFinalizar}>
            Finalizar
          </button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
