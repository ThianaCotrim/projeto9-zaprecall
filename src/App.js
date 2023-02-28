import image0 from "./images/image2.png"
import Flashcards from "./components/Flashcards";

const App = () => {
  return (
    <div className="container">
      <div className="titulo">
        <img src={image0} alt={image0}/>
      ZapRecall
      </div>

      < Flashcards />
     
      <div className="box-low">
        0/4 CONCLUÍDOS 
      </div>
    </div>
  );
}

export default App
