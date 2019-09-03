import styled from "styled-components";
import bgLogin from "../../assets/fundo-loginCadas.jpg";

export const Container = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000 url(${bgLogin}) no-repeat right;

  form {
    height: 100%;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .container {
    width: 400px;
  }

  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #599ac2;
    font-size: 15px;
    width: 100%;
    border: 1px solid #599ac2;
    &::placeholder {
      color: #999;
    }
  }
  }

  .acoes {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
  }
  button:hover {
    background: #0979bf;
    opacity: 3;
  } 

  

    button {
      margin: 10px;
    }
  

  button {
    color: black;
    width: 150px;
    height: 50px;
    opacity: 0.8;
    border-radius: 30px;
    cursor: pointer;
    margin: 10px;
  }
`;
