import React, { useEffect, useState } from "react";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import LinkWrapper from "../../wrappers/LinkWrapper";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  const locale =
    navigator.languages?.[0] || navigator.userLanguage || navigator.language;

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api
      .get("profile", { headers: { Authorization: ongId } })
      .then(response => setIncidents(response.data))
      .catch(reason => console.error(reason));
  }, [ongId]);

  const handleDeleteIncident = async id => {
    await api
      .delete(`incidents/${id}`, { headers: { Authorization: ongId } })
      .then(() => setIncidents(incidents.filter(inc => inc.id !== id)));
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <LinkWrapper className="button" to="/incidents/new">
          Cadastrar novo caso
        </LinkWrapper>

        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident, index) => (
          <li key={index}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat(locale, {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
