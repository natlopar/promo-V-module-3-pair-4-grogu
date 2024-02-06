import Cell from "./Cell";
import Grogu from "./Grogu";

const Board = ({posicion}) => {
  const div = Array(7).fill(null);


const renderDiv =()=>{
 return  div.map(( div1,index)=>{
    return < Cell  key={index} index={index} posicion={posicion}/>;
  });
  }

    return (
      <>
      <section className="board">
        {renderDiv()}
      </section>
      </>
    )
}


export default Board;