import { useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';
import GameStatus from './GameStatus';
import RestartButton from './RestartButton';
import Goods from './Goods';

function App() {
const [posicion, setPosicion] = useState(0);
const [gameStatus, setGameStatus] = useState('');
const [cookies, setCookies] = useState (['🍪', '🍪', '🍪']);
const [frogs, setFrogs] = useState (["🐸","🐸","🐸"]);
const [eggs, setEggs] = useState (["🥚","🥚","🥚"]);
const [dice, setDice] = useState ('');




const rollDice = () => {
  const dado = Math.floor(Math.random() * 4) + 1;
  setDice(dado);
  console.log(dado);
  if (dado === 4) {
    setPosicion(prevPosition => prevPosition + 1);
  } else if (cookies.length > 0) {
    setCookies(cookies.slice(1));
  } else if (frogs.length > 0) { // Verifica si quedan ranas
    setFrogs(frogs.slice(1));
  } else {
    setEggs(eggs.slice(1));
  }
  status();
}

// const rollDice=()=>{
//   const dado = Math.floor(Math.random()*4)+1;
//   setDice(dado);
//   console.log(dado);
//   if(dado === 4){
//   setPosicion((prevPosition)=>prevPosition+1);
//   }
//   else if(cookies){
//    setCookies(cookies.slice(1));
//   }

//   else if (cookies.length === 0 && frogs.length >0) {
//     setFrogs(frogs.slice(1));
//   } else   {
//    setEggs(eggs.slice(1));
//   } 
//   status();
//  }
  // const game status,galleta,ranas,huevos,value del dado,nombre de la usuaria del juego.



const status =()=>{
  if(cookies.length ===0 && frogs.length ===0  && eggs.length ===0 ){
    setGameStatus('Has ganado');
  } else if (cookies.length >0 || frogs.length >0  || eggs.length >0 ){
    setGameStatus('En juego');
  } else {
    setGameStatus('Has perdido');
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