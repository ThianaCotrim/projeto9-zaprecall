import vector from "../images/vector.png"
import styled from "styled-components"
import { useState } from "react"





const FlashcardItem = (props) => {


    const [altura, setAltura] = useState (65)
    const [cor, setCor] = useState ("#FFFFFF")

  

    

    function setinha () {
        setAltura (130)
        setCor ("#FFFFD4")
      }


    return (
    
      <Flashcard onClick={setinha} altura={altura} cor={cor}>
      <Pergunta>
      {props.texto}
     </Pergunta>
      <Button >
      <img src={vector} alt={vector} /> 
      </Button>
      </Flashcard> 
    )
  }

 






  export default FlashcardItem


  const Pergunta = styled.div `
  margin-left: 15px;
`;

const Button = styled.button`
  all: unset;
  margin-right: 15px;
`

const Flashcard = styled.div`
width: 300px;
height: ${(a) => a.altura}px;
background-color: ${(b) => b.cor};
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
margin-bottom: 25px;
font-family: 'Recursive', sans-serif;
font-size: 16px;
font-weight: 700;
color: #333333;

display: flex;
justify-content: space-between;
align-items: center;
`;