
import vector from "../images/vector.png"
import styled from "styled-components"
import { useState } from "react"
import setaredonda from "../images/Setinha.png"


const FlashcardItem = (props) => {

  const [altura, setAltura] = useState(65)
  const [cor, setCor] = useState("#FFFFFF")
  const [texto, setTexto] = useState(props.texto)
  const [seta, setSeta] = useState(vector)
  const [telaResposta, setTelaResposta] = useState(true)


  function clicouSetinha() {

    setAltura(130)
    setCor("#FFFFD4")
    setTexto(props.question)
    setSeta(setaredonda)
    clicouSetinhaRedonda()
  }

  function clicouSetinhaRedonda() {
    if (seta === setaredonda) {
      setTexto(props.answer)
      teste()
    }
  }

  function teste() {
    setTelaResposta(!telaResposta)
  }


  return (

    <div>
      {telaResposta ? (
        <div>
          <Flashcard
            altura={altura}
            cor={cor}
            seta={seta}>
            <Pergunta>
              {texto}
            </Pergunta>
            <Button onClick={clicouSetinha}>
              <img src={seta} alt={vector} />
            </Button>
          </Flashcard>
        </div>
      ) : (
        <div>
          <Teste
            altura={altura}
            cor={cor}
            seta={seta}>
            <PerguntaDois>
              {texto}
            </PerguntaDois>
            <Maior>
              <Vermelho>
                Não lembrei
              </Vermelho>
              <Laranja>
                Quase não lembrei
              </Laranja>
              <Verde>
                Zap!
              </Verde>
            </Maior>
          </Teste>
        </div>
      )}
    </div>
  )
}


export default FlashcardItem



const Vermelho = styled.div`
  width: 85px;
  height: 37px;
  background-color: #FF3030;
  border-radius: 5px;
  font-size:12px;
  color: #FFFFFF;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align: center;
  `

const Laranja = styled.div`
width: 85px;
height: 37px;
background-color: #FF922E;
border-radius: 5px;
font-size:12px;
line-height:15px;
color: #FFFFFF;
display:flex;
  align-items:center;
  justify-content:center;
  text-align: center;
`

const Verde = styled.div`
  width: 85px;
  height: 37px;
  background-color: #2FBE34;
  border-radius: 5px;
  font-size:12px;
  color: #FFFFFF;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align: center;
  `
const Maior = styled.div`
  width: 270px;
  height: 37px;
  display: flex;
  justify-content: space-between;
  margin-top:25px;
    
  `



const Pergunta = styled.div`
  margin-left: 15px;
`;

const PerguntaDois = styled.div`
  margin-top:20px;
  text-align:center;
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
`


const Teste = styled.div`
  width: 300px;
height: ${(a) => a.altura}px;
background-color: ${(b) => b.cor};
border-radius: 5px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
margin-bottom: 25px;
font-family: 'Recursive', sans-serif;
font-size: 16px;
font-weight: 400;
color: #333333;

display:flex;
align-items:center;
flex-direction:column;


`

  ;