import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import LinkWrapper from "../../wrappers/LinkWrapper";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function NewInicident() {
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const handleNewIncident = async event => {
    event.preventDefault();

    await api
      .post(
        "incidents",
        { title, description, value },
        { headers: { Authorization: ongId } }
      )
      .then(() => history.push("/profile"))
      .catch(reason => alert("Erro ao cadastrar caso, tente novamente."));
  };

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <LinkWrapper className="text-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </LinkWrapper>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            placeholder="Valor em Reais"
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
