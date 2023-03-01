import vector from "../images/vector.png"
import styled from "styled-components"
import { useState } from "react"
import setaredonda from "../images/Setinha.png"

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]




console.log(cards[0].question)

const FlashcardItem = (props) => {


    const [altura, setAltura] = useState (65)
    const [cor, setCor] = useState ("#FFFFFF")
    const [texto, setTexto] = useState (props.texto)
    const [seta, setSeta] = useState (vector)
  

    function setinha () {
        setAltura (130)
        setCor ("#FFFFD4")
        setTexto (cards[0].question)
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
      <Button onClick={setinha}>
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