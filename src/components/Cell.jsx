import Grogu from "./Grogu"


function Cell({posicion,key}) {

if(posicion===key) {

    <Grogu />
}



  return (
    <div className="cell" id={key}>{}</div>
  )
}

export default Cell