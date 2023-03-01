import vector from "../images/vector.png"
import styled from "styled-components"


const Flashcards = () => {
    return (
  
      <FlascardContainer>
      <Flashcard>
      <Pergunta>
      Pergunta 1
     </Pergunta>
      <Button>
      <img src={vector} alt={vector}/> 
      </Button>
      </Flashcard> 
  
  
  
    <Flashcard>
    <Pergunta>
      Pergunta 2
     </Pergunta>
     <Button>
      <img src={vector} alt={vector}/> 
      </Button>
    </Flashcard> 
  
  
  
    <Flashcard>
    <Pergunta>
      Pergunta 3
     </Pergunta>
     <Button>
      <img src={vector} alt={vector}/> 
      </Button>
    </Flashcard> 
  
  
  
    <Flashcard>
    <Pergunta>
      Pergunta 4
     </Pergunta>
     <Button>
      <img src={vector} alt={vector}/> 
      </Button>
    </Flashcard> 
  
  
  
    <Flashcard>
    <Pergunta>
      Pergunta 5
     </Pergunta>
     <Button>
      <img src={vector} alt={vector}/> 
      </Button>
    </Flashcard> 
  
  
    <Flashcard>
    <Pergunta>
      Pergunta 6
     </Pergunta>
     <Button>
      <img src={vector} alt={vector}/> 
      </Button>
    </Flashcard> 
  
  
  
    <Flashcard>
    <Pergunta>
      Pergunta 7
     </Pergunta>
     <Button>
      <img src={vector} alt={vector}/> 
      </Button>
    </Flashcard> 
  
  
    <Flashcard>
    <Pergunta>
      Pergunta 8
     </Pergunta>
     <Button>
      <img src={vector} alt={vector}/> 
      </Button>
    </Flashcard> 
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

  const Flashcard = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
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

  const Pergunta = styled.div `
    margin-left: 15px;
  `;

  const Button = styled.button`
    all: unset;
    margin-right: 15px;
  `