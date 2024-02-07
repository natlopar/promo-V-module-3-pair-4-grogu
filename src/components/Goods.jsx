
function Goods({cookies,eggs,frogs}) {

//  const renderCookies =()=>{
//      return cookies.map((cookie, index)=> (

//       <div className="goods-item" key={index}>{cookie}</div>));
//  };

  return ( <>
    <section className="goods-container">{cookies.map((cookie, index)=> (

        <div className="goods-item" key={index}>{cookie}</div>))}</section>

<section className="goods-container">{eggs.map((egg, index)=> (

<div className="goods-item" key={index}>{egg}</div>))}</section>

<section className="goods-container">{frogs.map((frog, index)=> (

<div className="goods-item" key={index}>{frog}</div>))}</section>   

      </>
        )
}

export default Goods