import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";


export default function Login() {
  return (
    <Container>
      <form>
      
        <h1>Faça seu login</h1>
        <section className="container">
          <label htmlFor="email">Digite seu e-mail:</label>
          <input type="text" />

          <label htmlFor="senha">Digite sua senha:</label>
          <input type="password" />

          <div className="acoes">
            <div className="botoes">
              <button type="submit">Entrar</button>
              </div>
              <ul>
                <Link to="/cadastro">Cadastra-se</Link>
              </ul>
            
            <ul>
            <Link to="/forgotpass">Esqueci minha senha</Link>
            </ul>
          </div>
        </section>
      </form>
    </Container>
  );
}
