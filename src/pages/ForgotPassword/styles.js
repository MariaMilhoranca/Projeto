import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #205677;


  h1 {
    margin-bottom: 20px;
  }

  .container {
    width: 400px;
  }

  
  input {
    height: 50px;
    margin-bottom: 15px;
    flex: 1;
    padding: 0 20px;
    color: #296e98;
    font-size: 15px;
    width: 100%;
    border: 5px solid #296e98;
    &::placeholder {
      color: #999;
    }
  }
  }

  
   button:hover {
    background: #0979bf;
    opacity: 5;
  } 


    button {
      margin: 10px;
    }
  

  button {
    color: #fff;
    width: 140px;
    height: 50px;
    background: transparent;
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
    border-radius: 7px;
    padding: 10px;
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
  

  @media (max-width: 600px) {
    .acoes {
      flex-direction: column;
      display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: #599ac2;
    border-radius: 7px;
    padding: 10px;
    }
    form {
    height: 100%;
    width: 100%;
    padding: 30px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(28, 135, 177, 0.63);
  }
  ul{
    font-size:15px;
  }
  button{
    font-size:25px;
    color:white;
  }
  label, h1, ul{
    font-family: 'Source Code Pro', monospace;
  }
  button:hover {
    background: black;
    opacity: 3;
  } 
  }
`;
