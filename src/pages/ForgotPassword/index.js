import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function ForgotPassoword() {
  return (
    <Container>
      <form>
        <h1>Digite seu e-mail para uma nova senha:</h1>

        <section className="container">
          <label htmlFor="email">Digite seu e-mail:</label>
          <input type="text" />

          <div className="quadrado">
            <button type="submit">Enviar</button>
            <ul>
            <Link to="/">Voltar ao login</Link>
            </ul>
          </div>
        </section>
      </form>
    </Container>
  );
}
