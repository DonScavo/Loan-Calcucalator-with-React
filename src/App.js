import React, { Fragment, useState } from 'react';
import Header from './componentes/header.js';
import Formulario from './componentes/formulario.js';
import Mensaje from './componentes/mensaje.js';
import Resultado from './componentes/resultado.js';
import Spinner from './componentes/spinner.js';



function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;
  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />
  }


  return (
    <Fragment>
      <Header
        titulo="Cotizador de prestamos" />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
          {componente}
        </div>

      </div>
    </Fragment>
  );
}

export default App;
