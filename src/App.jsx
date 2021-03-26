import React from "react";
import Cards from './compounent/Cards'

function App() {
  return (
    <div className="container">
      <h1>Propiedades de los Componentes</h1>

      <div className="row">
        <div className="col">
          <Cards
            imagen = "https://lorempixel.com/150/150"
            titulo = "Titulo Card 1"
            texto = "Texto Card 1"
          />         
        </div>
        <div className="col">
          <Cards
            imagen = "https://lorempixel.com/150/150"
            titulo = "Titulo Card 2"
            texto = "Texto Card 2"
          />         
        </div>
        
      </div>
    </div>
  );
}

export default App;