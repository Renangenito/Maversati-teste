import "./Navbar.css";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoginExecuted = localStorage.getItem("isLoginExecuted") === "true";

  const handleLogout = () => {
    localStorage.setItem("isLoginExecuted", "false");
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <div>
        <Link to={"/"}>
          <img
            id="logo-maversati"
            src="/images/logoMaversati-purple.png"
            alt="Logo Roxa Maversati"
          />
        </Link>
      </div>
      <ul className="texts-links-group">
        <li>
          <Link to={"/"}>
            <p className="text-link-pages">Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/shop"}>
            <p className="text-link-pages">Shop</p>
          </Link>
        </li>
        <li>
          <a
            href="https://instagram.com/maversati?igshid=YzcxN2Q2NzY0OA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-link-pages">Sobre nós</p>
          </a>
        </li>
      </ul>
      <div className="btns-group">
        <div className="btn-login-wrapper">
          {isLoginExecuted ? (
            <button className="btn-login" type="button" onClick={handleLogout}>
              Fazer Logout
            </button>
          ) : (
            <div className="btn-login-wrapper">
              <Link to="/login">
                <button className="btn-login" type="button">
                  Faça seu Login
                </button>
              </Link>
            </div>
          )}
        </div>
        <div>
          <Link to={"/cart-shop"}>
            <button className="btn-gocart" type="button">
              <HiShoppingCart />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
