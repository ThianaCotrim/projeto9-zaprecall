import image0 from "./images/image2.png"
import vector from "./images/vector.png"


function App() {
  return (
    <div className="container">
      <div className="titulo">
        <img src={image0} alt={image0}/>
      ZapRecall
      </div>
      < div className="box-maior">
       <div className="flashcard">
        <div className="pergunta">
        Pergunta 1
       </div>
        <div className="vector">
        <img src={vector} alt={vector}/> 
        </div>
        </div> 
      <div className="flashcard">
      <div className="pergunta">
        Pergunta 2
       </div>
        <div className="vector">
        <img src={vector} alt={vector}/> 
        </div>
      </div> 
      <div className="flashcard">
      <div className="pergunta">
        Pergunta 3
       </div>
        <div className="vector">
        <img src={vector} alt={vector}/> 
        </div>
      </div> 
      <div className="flashcard">
      <div className="pergunta">
        Pergunta 4
       </div>
        <div className="vector">
        <img src={vector} alt={vector}/> 
        </div>
      </div> 
      </div>
      <div className="box-low">
        0/4 CONCLUÍDOS 
      </div>
    </div>
  );
}


export default App
