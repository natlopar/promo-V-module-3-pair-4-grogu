
function Goods({cookies}) {

//  const renderCookies =()=>{
//      return cookies.map((cookie, index)=> (

//       <div className="goods-item" key={index}>{cookie}</div>));
//  };

  return (
    <section className="goods-container">{cookies.map((cookie, index)=> (

        <div className="goods-item" key={index}>{cookie}</div>))}</section>
  )
}

export default Goods