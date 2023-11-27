import "./GlobalRank.css";
import { useState } from "react";

export function GlobalRank() {
  const [datos, setDatos] = useState([
    {
      id: 1,
      imagen: "https://thispersondoesnotexist.com/",
      nombre: "Ejemplo 1",
      valor: 100,
    },
    {
      id: 2,
      imagen: "https://thispersondoesnotexist.com/",
      nombre: "Ejemplo 2",
      valor: 200,
    },
    {
      id: 3,
      imagen: "https://thispersondoesnotexist.com/",
      nombre: "Ejemplo 3",
      valor: 300,
    },
  ]);
  return (
    <div className="globalRankMainDiv">
      <h1>Racha Global</h1>
      <div className="tablaRank">
        <table>
          <thead>
            <tr>
              <div className="headerTable">
                <div className="idDiv">
                  <th>ID</th>
                </div>
                <div className="imgDivHeader">
                  <th> </th>
                </div>
                <div className="nameHeaderDiv">
                  <th>Nombre</th>
                </div>
                <div className="valueHeaderDiv">
                  <th>Valor</th>
                </div>
              </div>
            </tr>
          </thead>
          <tbody>
            {/* Mapear datos para generar filas de la tabla */}
            {datos.map((fila) => (
              <tr key={fila.id}>
                <div className="insideTable">
                  <div className="componentIdTable">
                    <td>{fila.id}</td>
                  </div>
                  <div className="componentImgTable">
                    <img
                      src={fila.imagen}
                      alt={"Imagen de ${fila.nombre}"}
                      className="userImg"
                    />
                  </div>

                  <div className="componentNameTable">
                    <td>
                      <p>{fila.nombre}</p>
                    </td>
                  </div>
                  <div className="componentValueTable">
                    <td>
                      <p>{fila.valor}</p>
                    </td>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
