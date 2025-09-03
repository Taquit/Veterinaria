import React from "react";
import toy2 from'../assets/toy2.jpg'

function Tienda(){

    return(
        <>
            <div className="tienda-container">
  <h1>Tienda de "Animals Friends Resort"</h1>
  <div className="tienda-grid">
    <div className="tienda-item">
      <img src={toy2} alt="Juguete de perro" />
      <h4>Nombre del juguete</h4>
      <p>Precio $0000</p>
      <div className="descripcion">Descripción</div>
      <button>Comprar</button>
    </div>
    <div className="tienda-item">
      <img src={toy2} alt="Juguete de perro" />
      <h4>Nombre del juguete</h4>
      <p>Precio $0000</p>
      <div className="descripcion">Descripción</div>
      <button>Comprar</button>
    </div>
    <div className="tienda-item">
      <img src={toy2} alt="Juguete de perro" />
      <h4>Nombre del juguete</h4>
      <p>Precio $0000</p>
      <div className="descripcion">Descripción</div>
      <button>Comprar</button>
    </div>
    <div className="tienda-item">
      <img src={toy2} alt="Juguete de perro" />
      <h4>Nombre del juguete</h4>
      <p>Precio $0000</p>
      <div className="descripcion">Descripción</div>
      <button>Comprar</button>
    </div>
    
  </div>
</div>
        </>
    )
}

export default Tienda