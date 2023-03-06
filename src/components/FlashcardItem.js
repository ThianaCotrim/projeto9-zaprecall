

import vector from "../images/vector.png"
import styled from "styled-components"
import { useState } from "react"
import setaredonda from "../images/Setinha.png"
import erro from "../images/icone_erro.png"
import certo from "../images/icone_certo.png"
import quase from "../images/icone_quase.png"


const FlashcardItem = (props) => {

  const [altura, setAltura] = useState(65)
  const [cor, setCor] = useState("#FFFFFF")
  const [texto, setTexto] = useState(props.texto)
  const [seta, setSeta] = useState(vector)
  const [telaResposta, setTelaResposta] = useState(true)
  const [corTexto, setCorTexto] = useState ("#333333")
  const [linha, setLinha] = useState ()
  const [disable, setDisable] = useState ('')
  const [icone, setIcone] = useState ("play-btn")

 

  function clicouSetinha() {

    setAltura(130)
    setCor("#FFFFD4")
    setTexto(props.question)
    setSeta(setaredonda)
    clicouSetinhaRedonda()
    setIcone ("turn-btn")
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

  function clicouVermelho() {
   setTelaResposta(true)
   setAltura(65)
   setCor("#FFFFFF")
   setTexto(props.texto)
   setSeta(erro)
   setCorTexto("#FF3030")
   setLinha('line-through')
   setDisable('disabled')
   props.contagem()
   setIcone ("no-icon")
  }

  function clicouLaranja() {
    setTelaResposta(true)
    setAltura(65)
    setCor("#FFFFFF")
    setTexto(props.texto)
    setSeta(quase)
    setCorTexto("#FF922E")
    setLinha('line-through')
    props.contagem()
    setIcone ("partial-icon")
  }

  function clicouVerde() {
    setTelaResposta(true)
    setAltura(65)
    setCor("#FFFFFF")
    setTexto(props.texto)
    setSeta(certo)
    setCorTexto("#2FBE34")
    setLinha('line-through')
    props.contagem()
    setIcone ("zap-icon")
  }

  return (

    <div>
      {telaResposta ? (
        <div>
          <Flashcard
            altura={altura}
            cor={cor}
            seta={seta}
            corTexto={corTexto}
            linha={linha}
            data-test="flashcard">
            <Pergunta >
              <div data-test="flashcard-text">
              {texto}
              </div>
            </Pergunta>
            <Button disabled={disable} 
            onClick={clicouSetinha} 
            data-test={icone} 
            icone={icone}>
              <img src={seta} alt={vector}/>
            </Button>
          </Flashcard>
        </div>
     ) : (
        <div>
          <Teste
            altura={altura}
            cor={cor}
            seta={seta}
            data-test="flashcard">
            <PerguntaDois>
              <div data-test="flashcard-text">
              {texto}
              </div>
            </PerguntaDois>
            <Maior >
              <Vermelho onClick={clicouVermelho} data-test="no-btn">
                Não lembrei
              </Vermelho>
              <Laranja onClick={clicouLaranja} data-test="partial-btn">
                Quase não lembrei
              </Laranja>
              <Verde onClick={clicouVerde} data-test="zap-btn">
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
cursor: pointer;
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
cursor: pointer;
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
cursor: pointer;
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
cursor: pointer;
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
color: ${(d) => d.corTexto};

display: flex;
justify-content: space-between;
align-items: center;
text-decoration: ${(e) => e.linha};
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

`;












