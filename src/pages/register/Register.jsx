import Footer from "../../components/footer/Footer";
import FormRegister from "../../components/form-register/FormRegister";
import Navbar from "../../components/navbar/Navbar";
import "./Register.css";
import React from "react";

export default function Register() {
  return (
    <div className="register-page">
      <header className="navbar">
        <Navbar />
      </header>
      <FormRegister />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
