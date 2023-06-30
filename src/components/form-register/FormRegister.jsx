import { Link, useNavigate } from "react-router-dom";
import Input from "../inputs/Input";
import InputMiddle from "../inputs/InputMiddle";
import "./FormRegister.css";
import React, { useState } from "react";
const User = require("../../data/user.js");

export default function FormRegister() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleNeighborhoodChange = (event) => {
    setNeighborhood(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  function verificarEmail(email) {
    const regex = /@.*\.com/;
    return regex.test(email);
  }

  function verificarNumero(input) {
    return /^[0-9]+$/.test(input);
  }

  function validaIdade(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return false;
    }

    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return date <= eighteenYearsAgo;
  }

  const handleRegister = () => {
    if (
      email === "" ||
      password === "" ||
      fullname === "" ||
      date === "" ||
      cep === "" ||
      cpf === "" ||
      state === "" ||
      city === "" ||
      street === "" ||
      neighborhood === "" ||
      phone === ""
    ) {
      alert("Por favor, preencha todos os campos!");
    } else if (!verificarEmail(email)) {
      alert("Por favor, informe um e-mail válido");
    } else if (!verificarNumero(cep)) {
      alert("O CEP deve conter apenas números");
    } else if (!validaIdade(date)) {
      alert("O usuário deve ser maior de idade!");
    } else if (password.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres!");
    } else if (cpf.length < 11 || cpf.length > 11 || !verificarNumero(cpf)) {
      alert("O CPF deve ter 11 caracteres!");
    } else {
      // alert(
      //   `Usuário Cadastrado!\n Nome: ${fullname} E-mail: ${email} CPF: ${cpf}\nData Nasc: ${date} Tel: ${phone} Senha: ${password}\n Cidade: ${city} UF: ${state} Rua: ${street}\nCEP: ${cep} Bairro: ${neighborhood}`
      // );
      const usuario = new User(
        fullname,
        email,
        phone,
        date,
        cpf,
        password,
        city,
        state,
        street,
        neighborhood,
        cep
      );
      setFullname("");
      setCpf("");
      setDate("");
      setPhone("");
      setEmail("");
      setPassword("");
      setCep("");
      setState("");
      setStreet("");
      setNeighborhood("");
      setCity("");
      const usuarioString = JSON.stringify(usuario);
      localStorage.setItem("db-user", usuarioString);
      navigate("/login");
    }
  };

  return (
    <div className="card-form-register">
      <p className="title-form-register">Crie uma conta Maversati</p>
      <div className="form-inputs">
        <div className="collum">
          <Input
            typeInput="text"
            nameInput="input-name"
            idInput="input-register-name"
            placeholder="Nome Completo"
            value={fullname}
            onChange={handleFullnameChange}
          />
          <Input
            typeInput="email"
            nameInput="input-email"
            idInput="input-register-email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            typeInput="text"
            nameInput="input-cpf"
            idInput="input-register-cpf"
            placeholder="CPF"
            value={cpf}
            onChange={handleCpfChange}
          />
          <div>
            <InputMiddle
              typeInput="text"
              nameInput="input-phone"
              idInput="input-register-phone"
              placeholder="Telefone"
              className="input-middle input-mr"
              value={phone}
              onChange={handlePhoneChange}
            />
            <InputMiddle
              typeInput="date"
              nameInput="input-date"
              idInput="input-register-date"
              placeholder="Data"
              className="input-middle"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <Input
            typeInput="password"
            nameInput="input-senha"
            idInput="input-register-senha"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="collum">
          <div>
            <InputMiddle
              typeInput="text"
              nameInput="input-cep"
              idInput="input-register-cep"
              placeholder="CEP"
              className="input-middle input-mr"
              value={cep}
              onChange={handleCepChange}
            />
            <InputMiddle
              typeInput="text"
              nameInput="input-state"
              idInput="input-register-state"
              placeholder="UF"
              className="input-middle"
              value={state}
              onChange={handleStateChange}
            />
          </div>

          <Input
            typeInput="text"
            classInput="input-middle"
            nameInput="input-street"
            idInput="input-register-street"
            placeholder="Rua"
            value={street}
            onChange={handleStreetChange}
          />
          <div>
            <InputMiddle
              typeInput="text"
              nameInput="input-city"
              idInput="input-register-city"
              placeholder="Cidade"
              className="input-middle input-mr"
              value={city}
              onChange={handleCityChange}
            />
            <InputMiddle
              typeInput="text"
              nameInput="input-neighborhood"
              idInput="input-register-neighborhood"
              placeholder="Bairro"
              className="input-middle"
              value={neighborhood}
              onChange={handleNeighborhoodChange}
            />
          </div>
          <button type="button" className="btn-register-form" onClick={handleRegister}>
            Confirmar
          </button>
          <p className="ref-link-login">
            Já possui uma conta?{" "}
            <Link to="/login">
              <strong>Clique Aqui</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
