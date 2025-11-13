import { useState } from "react";

function Contador() {
  const [num, setNum] = useState(0);

  return (
    <div className="contador">
      <h2>Contador</h2>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>Incrementar</button>
      <button onClick={() => setNum(num - 1)}>Decrementar</button>
    </div>
  );
}

function Totito() {
  const [cuadros, setCuadros] = useState(Array(9).fill(null));
  const [turnoX, setTurnoX] = useState(true);

  const ganador = calcularGanador(cuadros);

  function manejarClick(i) {
    if (cuadros[i] || ganador) return;

    const nuevosCuadros = [...cuadros];
    nuevosCuadros[i] = turnoX ? "X" : "O";
    setCuadros(nuevosCuadros);
    setTurnoX(!turnoX);
  }

  function reiniciar() {
    setCuadros(Array(9).fill(null));
    setTurnoX(true);
  }

  return (
    <div className="totito">
      <h2>Juego de Totito</h2>
      <p>{ganador ? `Ganador: ${ganador}` : `Turno: ${turnoX ? "X" : "O"}`}</p>

      <div className="tablero">
        {cuadros.map((valor, i) => (
          <button key={i} className="cuadro" onClick={() => manejarClick(i)}>
            {valor}
          </button>
        ))}
      </div>

      <button className="reiniciar" onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

function calcularGanador(cuadros) {
  const lineas = [
    [0,1,2], [3,4,5], [6,7,8], // filas
    [0,3,6], [1,4,7], [2,5,8], // columnas
    [0,4,8], [2,4,6]           // diagonales
  ];

  for (let [a, b, c] of lineas) {
    if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
      return cuadros[a];
    }
  }
  return null;
}

export default function App() {
  return (
    <div className="app">
      <h1>Proyecto React - Tarea</h1>
      <Contador />
      <Totito />
    </div>
  );
}
