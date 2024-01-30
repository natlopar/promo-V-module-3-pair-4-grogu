import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';

function App() {
const [posicion, setPosicion] = useState(0);
const [gameStatus, setGameStatus] = useState('Jugando');
const [cookies, setCookies] = useState (3);
const [frogs, setFrogs] = useState (3);
const [eggs, setEggs] = useState (3);
const [dice, setDice] = useState ('');

const rollDice=()=>{
  const dado = Math.floor(Math.random()*4)+1;
  console.log(dado);
  if(dado === 4){
  setPosicion((prevPosition)=>prevPosition+1);
  }
  // } else {
  

  // }

  // const game status,galleta,ranas,huevos,value del dado,nombre de la usuaria del juego.
}

const handleRandon=()=>{
  rollDice();
}


  return (
    <>
    <Header/>
    <main className="page">
      <Board/>

      <section>
        <button className="dice" onClick ={handleRandon}>Lanzar Dado<Dice/></button>
        {/* <button className="dice">Lanzar Dado</button> */}
        <GameStatus status={gameStatus}/>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </>
  );
}



export default App;