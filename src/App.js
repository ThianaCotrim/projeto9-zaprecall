import image0 from "./images/image2.png"
import styled from "styled-components";
import { useState } from "react";
import Flashcards from "./components/Flashcards";





const App = () => {


 const [quantidade, setQuantidade] = useState(0)
 
  function haha () {
    setQuantidade(quantidade +1)
  }
  


  return (
    <Container>
      <Titulo>
        <img src={image0} alt={image0}/>
      ZapRecall
      </Titulo>
      <BoxLow >
         {quantidade}/8 CONCLUÍDOS 
          </BoxLow>
      < Flashcards quantidade={quantidade} haha={haha}/>
    </Container>
  );
}



export default App

const Container = styled.div `
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    border: 1px solid #DBDBDB;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

const Titulo = styled.div `
    color: #FFFFFF;
    width: 230px;
    height: 44px;
    margin-top: 48px;
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    img {
    width: 52px;
    height: 60px;
    }
`;

const BoxLow = styled.div `
    background-color: #FFFFFF;
    width: 376px;
    height: 70px;
  
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    margin-top: 597px;
`;
