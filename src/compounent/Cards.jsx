import React from 'react'

const Cards = (props) =>{

  const {imagen,titulo,texto} = props;

  return (
    <div className="card" sytle={{width: "10rem"}}>
      <img src={imagen} className="card-img-top img-thumbnail" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{texto}</p>
        <a hreg="#" className="btn btn-primary">Ver Mas..</a>
      </div>
    </div>
  );

}
export default Cards;