
function RestartButton({restartGame}) {
const handleClick =()=> {
    restartGame();
}

  return (
    <button className="restart-button" onClick={handleClick}>Reiniciar Juego</button>
  )
}

export default RestartButton