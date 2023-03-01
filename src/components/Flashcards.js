
import styled from "styled-components"
import FlashcardItem from "./FlashcardItem"

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

const Flashcards = () => {

    return (
  
      <FlascardContainer>
     {cards.map(({question, answer}, index) => {
  return (
    <FlashcardItem 
      texto = {`Pergunta ${index + 1}`}
      question = {question}
      answer = {answer}  
    />
  )
})}
    </FlascardContainer>
  
    )
  }


  export default Flashcards 


 

  const FlascardContainer = styled.div`
    width: 300px;
    height: 100%;
    margin-top: 50px;
    overflow: hidden;
    overflow-y: visible;
    margin-bottom: 60px;
  `;



 