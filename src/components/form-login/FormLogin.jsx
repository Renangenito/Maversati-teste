import Input from "../inputs/Input";
import "./FormLogin.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FormLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userString = localStorage.getItem("db-user");
    if (userString) {
      const userData = JSON.parse(userString);
      setUser(userData);
    }
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function verificarEmail(email) {
    const regex = /@.*\.com/;
    return regex.test(email);
  }

  const handleLogin = () => {
    console.log(`${email} - ${password}`);
    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos!");
    } else if (password.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres!");
    } else if (!verificarEmail(email)) {
      alert("Preencha com um e-mail inválido");
    } else if (user && user.email === email && user.senha === password) {
      alert("Login bem-sucedido!");
      localStorage.setItem("isLoginExecuted", "true");
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      alert("Algo deu errado!");
    }
  };
  return (
    <div className="card-form-login">
      <p className="title-form-login">Bem-vindo de volta!</p>
      <p className="subtitle-form-login">Preencha os campos com seus dados</p>
      <div className="form-inputs-login">
        <Input
          typeInput="email"
          nameInput="input-email"
          idInput="input-login-email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          typeInput="password"
          nameInput="input-senha"
          idInput="input-login-senha"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="button" className="btn-login-form" onClick={handleLogin}>
        Confirmar
      </button>
      <p className="ref-link-register">
        É novo por aqui?{" "}
        <Link to="/register">
          <strong>Faça sua conta</strong>
        </Link>
      </p>
    </div>
  );
}
