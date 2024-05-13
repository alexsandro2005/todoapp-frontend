import React from "react";
import { NavBar } from "../../components";
import { Link } from "react-router-dom";

export const ListaCarros = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row mr-2 bg-dark p-3">
          <h3 className="title col-md-10 mt-2">Lista de Carros</h3>
          <Link to={"/car/register"} className="btn btn-primary col-md-2 p-3">
            Agregar Carro
          </Link>
        </div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Placa</th>
              <th>Numero de Serie</th>
              <th>Modelo del Carro</th>
              <th>Marca</th>
              <th>kilometraje</th>
              <th>tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
              <td>Informacion</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
