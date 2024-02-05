import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';

function App() {
const [posicion, setPosicion] = useState(0);
const [gameStatus, setGameStatus] = useState('');
const [cookies, setCookies] = useState (3);
const [frogs, setFrogs] = useState (3);
const [eggs, setEggs] = useState (3);
const [dice, setDice] = useState ('');


const rollDice=()=>{
  const dado = Math.floor(Math.random()*4)+1;
  setDice(dado);
  console.log(dado);
  if(dice === 4){
  setPosicion((prevPosition)=>prevPosition+1);
  }
  else if(cookies){
   setCookies(cookies-1);
  }else if (cookies === 0 && frogs) {
    setFrogs(frogs-1);
  } else if (eggs) {
   setEggs(eggs-1);
  } 
  status();
}
  // const game status,galleta,ranas,huevos,value del dado,nombre de la usuaria del juego.



const status =()=>{
  if(cookies === 0 && frogs === 0 && eggs === 0){
    setGameStatus('Has ganado');
  } else if (cookies !== 0 || frogs !== 0 || eggs !== 0){
    setGameStatus('En juego');
  } else {
    setGameStatus('Has perdido');
  }
}  

const handleClick=()=>{
  rollDice();
}

const restartGame =()=>{
  setCookies(3);
  setFrogs(3);
  setEggs(3);
  setPosicion(0);
  setGameStatus('');
}

  return (
    <>
    <Header/>
    <main className="page">
      <Board posicion ={posicion}/>

      <section>
        <button className="dice" onClick ={handleClick}>Lanzar Dado<Dice/></button>
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
      <RestartButton restartGame={restartGame}/>
      </section>
    </main>
    </>
  );
}



export default App;