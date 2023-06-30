import Footer from "../../components/footer/Footer";
import FormLogin from "../../components/form-login/FormLogin";
import Navbar from "../../components/navbar/Navbar";
import "./Login.css";
import React from "react";

export default function Login() {
  return (
    <div className="login-page">
      <header className="navbar">
        <Navbar />
      </header>
      <FormLogin />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
