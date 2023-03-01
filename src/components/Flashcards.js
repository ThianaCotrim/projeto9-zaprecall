
import styled from "styled-components"
import FlashcardItem from "./FlashcardItem"



const Flashcards = (props) => {


    return (
  
      <FlascardContainer>
     < FlashcardItem texto="Pergunta 1"/>
     < FlashcardItem texto="Pergunta 2"/>
     < FlashcardItem texto="Pergunta 3"/>
     < FlashcardItem texto="Pergunta 4"/>
     < FlashcardItem texto="Pergunta 5"/>
     < FlashcardItem texto="Pergunta 6"/>
     < FlashcardItem texto="Pergunta 7"/>
     < FlashcardItem texto="Pergunta 8"/>
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



 