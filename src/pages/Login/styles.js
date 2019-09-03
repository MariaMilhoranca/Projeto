import styled from "styled-components";

import bgLogin from "../../assets/fundo_login.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000 url(${bgLogin}) no-repeat right;


  form {
    width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  img {
    width: 100px;
    margin: 10px 0 40px;
  
  }

  input {
    flex: 1;
    height: 46px;
    margin-bottom: 20px;
    padding: 0 20px;
    color: #599ac2;
    font-size: 15px;
    width: 100%;
    border: 3px solid #599ac2;
    &::placeholder {
      color: #999;
    }
  }
  }

  button:hover {
    background: #0979bf;
    opacity: 1;
  } 

    button {
      margin: 5px;
    }
  }

  button {
    color: black;
    width: 140px;
    height: 50px;
    opacity: 0.8;
    border-radius: 30px;
    cursor: pointer;
    margin: 10px;
  }
  .acoes {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: #599ac2;
    border-radius: 7px;
    padding: 10px;
  }

   @media (max-width: 600px) {
    .acoes {
      flex-direction: column;
    }
      form {
    height: 100%;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(166, 162, 232, 0.4);
  }
  ul{
    font-size:25px;
  }
  button{
    font-size:30px;
  }
  label, h1, ul{
    font-family: 'Source Code Pro', monospace;
  }
   }
`;
