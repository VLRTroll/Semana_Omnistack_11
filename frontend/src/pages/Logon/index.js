import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import LinkWrapper from "../../wrappers/LinkWrapper";
import api from "../../services/api";

export default function Logon() {
  const history = useHistory();
  const [id, setId] = useState("");

  const handleLogon = async event => {
    event.preventDefault();

    await api
      .post("sessions", { id })
      .then(response => {
        localStorage.setItem("ongId", id);
        localStorage.setItem("ongName", response.data.name);

        history.push("/profile");
      })
      .catch(reason => alert("Falha no login: Id não encontrado."));
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button type="submit" className="button">
            Entrar
          </button>

          <LinkWrapper className="text-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </LinkWrapper>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
