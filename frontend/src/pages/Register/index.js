import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import LinkWrapper from "../../wrappers/LinkWrapper";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  const handleRegister = async event => {
    event.preventDefault();

    await api
      .post("ongs", { name, email, whatsapp, city, uf })
      .then(response => {
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push("/"); //Navega para a rota informada, acrescentando-a à pilha de páginas
      })
      .catch(reason => alert("Erro no cadastro, tente novamente."));
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <LinkWrapper className="text-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </LinkWrapper>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
