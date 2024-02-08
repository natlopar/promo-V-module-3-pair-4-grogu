import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';
import Goods from './Goods';
import Form from './Form';

function App() {
const [posicion, setPosicion] = useState(0);
const [gameStatus, setGameStatus] = useState('');
const [cookies, setCookies] = useState (['🍪', '🍪', '🍪']);
const [frogs, setFrogs] = useState (["🐸","🐸","🐸"]);
const [eggs, setEggs] = useState (["🥚","🥚","🥚"]);
const [dice, setDice] = useState ('');
const[name,setName] =useState('');




const rollDice = () => {
  const dado = Math.floor(Math.random() * 4) + 1;
  setDice(dado);
  console.log(dado);
  if (dado === 4) {
    setPosicion(prevPosition => prevPosition + 1);
  } else if (cookies.length > 0) {
    setCookies(cookies.slice(1));
  } else if (eggs.length > 0) { // Verifica si quedan ranas
    setEggs(eggs.slice(1));
  } else {
    setFrogs(frogs.slice(1));
  }
  status();
}



const status = () => {
  if (posicion === 6) {
    setGameStatus('Has perdido');
  } else if (cookies.length === 0 && frogs.length === 0 && eggs.length === 0) {
    setGameStatus('Has ganado');
  } else {
    setGameStatus('En juego');
  }
}

const handleClick=()=>{
  rollDice();
}

const restartGame =()=>{
  setCookies(['🍪', '🍪', '🍪']);
  setFrogs(["🐸","🐸","🐸"]);
  setEggs(["🥚","🥚","🥚"]);
  setPosicion(0);
  setGameStatus('');
}

  return (
    <>
    <Header/>
    <Form name ={name}/>
    <main className="page">
      <Board posicion ={posicion}/>

      <section>
        <button className="dice" onClick ={handleClick}>Lanzar Dado<Dice/></button>
        {/* <button className="dice">Lanzar Dado</button> */}
        <GameStatus status={gameStatus}/>
      </section>

      <Goods cookies={cookies} eggs ={eggs} frogs={frogs}/>
     
      <section>
      <RestartButton restartGame={restartGame}/>
      </section>
    </main>
    </>
  );
}



export default App;