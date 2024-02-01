import Grogu from "./Grogu";

const Board = ({div}) => {


const renderDiv =()=>{
  div.fill((div1)=>null);
  div.map((div1, index)=>{
    return <div key={index} className="cell"></div>;
  });
  }

    return (
      <>
      <section className="board">
        {renderDiv()}
      </section>
      {/* <div><Grogu/></div> */}
      </>
    )
}


export default Board;