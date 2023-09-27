
// 1000000000000000000



import React, { useState, useEffect } from 'react';


const App = () => {
  const segundos = [
    180, 30, 120, 30, 60, 30, 45, 30, 30, 30, 30, 30, 30, 30, 30, 30, 45, 30, 60, 30, 90, 30, 120, 30
  ];

  const [contador, setContador] = useState(segundos[0]);
  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState('CAMINATA RAPIDA');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => prevContador - 1);
    }, 1000);

    if (contador <= 4) {
      setBackgroundColor('#FF0000'); // Cambiar el fondo a rojo si faltan 4 segundos o menos
    } else {
      setBackgroundColor('#FFFFFF'); // Restaurar el fondo a blanco si no faltan 4 segundos
    }

    if (contador === 0) {
      setIndice((prevIndice) => prevIndice + 1);

      if (indice % 2 === 0) {
        setMensaje('MAXIMA INTENSIDAD');
      } else {
        setMensaje('CAMINATA RAPIDA');
      }

      if (indice === segundos.length - 1) {
        setMensaje('ENTRENAMIENTO TERMINADO');
        clearInterval(interval); // Detener el contador cuando se haya completado el entrenamiento
      } else {
        setContador(segundos[indice + 1]);
      }
    }

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
  }, [contador, indice]);

  return (
    <>
    
    
    <div style={{ backgroundColor, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div>
        <h1>{mensaje}</h1>
        <h1>{contador}</h1>
      </div>
    </div>
    {/* <button >comienza</button> */}
    </>
  );
};

export default App;