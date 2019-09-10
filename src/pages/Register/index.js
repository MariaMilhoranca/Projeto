import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Register() {
  return (
    <Container>
      <form>
        <h1>Faça seu Cadastro</h1>

        <section className="container">
          <label htmlFor="nome">Digite seu Nome:</label>
          <input type="text" />

          <label htmlFor="email">Digite seu E-mail:</label>
          <input type="text" />

          <label htmlFor="senha">Digite sua Senha:</label>
          <input type="password" />

          <div className="quadrado">
            <button type="submit">Cadastrar</button>
           
            <ul>
            <Link to="/">Já possui uma conta? Faça o login</Link>
            </ul>
            </div>
        </section>
      </form>
    </Container>
  );
}
