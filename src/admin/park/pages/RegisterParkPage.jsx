import React from "react";
import { NavBar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks";
import { todoAppApi } from "../../../api";
import Swal from "sweetalert2";

const carRegisterForm = {
  registerNombreParque: "",
  registerCapacidad: "",
  registerKilometraje: "",
  registerPrecioEntrada: "",
  registerDescripcion: "",
};
export const RegisterParkPage = () => {
  const navigate = useNavigate();
  const {
    registerNombreParque,
    registerCapacidad,
    registerPrecioEntrada,
    registerDescripcion,
    onInputChange: onRegisterParkChange,
  } = useForm(carRegisterForm);

  const registerPark = async (e) => {
    e.preventDefault();
    try {
      await todoAppApi.post("/park/register", {
        nombre: registerNombreParque,
        capacidad: registerCapacidad,
        precioEntrada: registerPrecioEntrada,
        descripcion: registerDescripcion,
      });
      Swal.fire({
        icon: "success",
        title: "Parque Registrado",
        text: "Parque Registrado Correctamente",
      }).then(() => {
        navigate("/park");
      });
    } catch (error) {
      const errorMessage =
        error.response?.data.message ||
        "Error al momento de registrar el parque";
      Swal.fire({
        icon: "error",
        title: "Error al momento de registrar el parque",
        text: errorMessage,
      });
    }
  };
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <form className="row" onSubmit={registerPark}>
          <div className="mb-3">
            <h3>Registro de Parques</h3>
            <Link className="btn btn-danger" to={"/park"}>
              Regresar
            </Link>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="nombreParque" className="form-label">
              Nombre del Parque
            </label>
            <input
              autoFocus
              type="text"
              name="registerNombreParque"
              required={true}
              maxLength={100}
              minLength={3}
              placeholder="Ingresa el nombre del parque"
              value={registerNombreParque}
              onChange={onRegisterParkChange}
              className="form-control"
              id="nombreParque"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="capacidad" className="form-label">
              Capacidad de Personas
            </label>
            <input
              type="number"
              name="registerCapacidad"
              value={registerCapacidad}
              placeholder="Ingresar la capacidad de personas"
              maxLength={1}
              minLength={5}
              onChange={onRegisterParkChange}
              className="form-control"
              id="capacidad"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="precioEntrada" className="form-label">
              Precio de Entrada
            </label>
            <input
              type="number"
              name="registerPrecioEntrada"
              placeholder="Ingresar precio de entrada"
              value={registerPrecioEntrada}
              maxLength={4}
              minLength={4}
              onChange={onRegisterParkChange}
              className="form-control"
              id="precioEntrada"
            />
          </div>

          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="descripcion" className="form-label">
              Descripcion del Parque
            </label>
            <textarea
              type="number"
              name="registerDescripcion"
              value={registerDescripcion}
              placeholder="Ingresar descripcion del parque"
              rows={3}
              onChange={onRegisterParkChange}
              className="form-control"
              id="descripcion"
              minLength={1}
              maxLength={150}
            />
          </div>

          <div className="mb-3 col-3">
            <button type="submit" className="btn btn-primary">
              Registrar Parque
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
