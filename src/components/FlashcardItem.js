import vector from "../images/vector.png"
import styled from "styled-components"
import { useState } from "react"
import setaredonda from "../images/Setinha.png"



// console.log(cards[0].question)

const FlashcardItem = (props) => {

    const [altura, setAltura] = useState (65)
    const [cor, setCor] = useState ("#FFFFFF")
    const [texto, setTexto] = useState (props.texto)
    const [seta, setSeta] = useState (vector)

    function clicouSetinha () {
         
        setAltura (130)
        setCor ("#FFFFD4")
        setTexto (props.question)
        setSeta (setaredonda)
      }


    return (
    
      <Flashcard  
        altura={altura} 
        cor={cor} 
        seta={seta}
        >
      <Pergunta>
      {texto}
     </Pergunta>
      <Button onClick={clicouSetinha}
      >
      <img src={seta} alt={vector} /> 
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