import Grogu from "./Grogu"


function Cell({posicion, index}) {
  return (
    <div className="cell" id={index}> {posicion===index ? <Grogu/> : null}</div>
  )
}

export default Cell