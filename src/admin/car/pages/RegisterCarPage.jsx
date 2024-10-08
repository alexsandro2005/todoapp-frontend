import React, { useState } from "react";
import { NavBar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks";
import { todoAppApi } from "../../../api";
import Swal from "sweetalert2";

const carRegisterForm = {
  registerNumeroSerie: "",
  registerPlaca: "",
  registerModelo: "",
  registerKilometraje: "",
  registerMarca: "",
  registerTipo: "",
};
export const RegisterCarPage = () => {
  // estado para el manejo de los errores
  const navigate = useNavigate();
  const {
    registerNumeroSerie,
    registerModelo,
    registerPlaca,
    registerMarca,
    registerTipo,
    registerKilometraje,
    onInputChange: onRegisterCarChange,
  } = useForm(carRegisterForm);

  const registerCar = async (e) => {
    e.preventDefault();
    try {
      await todoAppApi.post("/car/create", {
        placa: registerPlaca,
        numero_serie: registerNumeroSerie,
        modelo: registerModelo,
        kilometraje: registerKilometraje,
        marca: registerMarca,
        tipo: registerTipo,
      });

      Swal.fire({
        icon: "success",
        title: "Carro Registrado",
        text: "Carro Registrado Correctamente",
      }).then(() => {
        navigate("/car");
      });
    } catch (error) {
      const errorMessage =
        error.response?.data.message ||
        "Error al momento de registrar el carro";
      Swal.fire({
        icon: "error",
        title: "Error al momento de registrar el carro",
        text: errorMessage,
      });
    }
  };
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <form className="row" onSubmit={registerCar}>
          <div className="mb-3">
            <h3>Registro de Carros</h3>
            <Link className="btn btn-danger" to={"/car"}>
              Regresar
            </Link>
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="placa" className="form-label">
              Placa del Vehiculo
            </label>
            <input
              autoFocus
              type="text"
              name="registerPlaca"
              placeholder="Ingresar placa del vehiculo"
              required={true}
              maxLength={6}
              minLength={6}
              value={registerPlaca}
              onChange={onRegisterCarChange}
              className="form-control"
              id="placa"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="numero_serie" className="form-label">
              Numero de Serie
            </label>
            <input
              type="number"
              name="registerNumeroSerie"
              placeholder="Ingresa numero de serie"
              value={registerNumeroSerie}
              maxLength={20}
              minLength={20}
              onChange={onRegisterCarChange}
              className="form-control"
              id="numero_serie"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="modelo" className="form-label">
              Modelo
            </label>
            <input
              type="number"
              name="registerModelo"
              placeholder="Ingresar el modelo del vehiculo"
              value={registerModelo}
              maxLength={4}
              minLength={4}
              onChange={onRegisterCarChange}
              className="form-control"
              id="modelo"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="marca" className="form-label">
              Marca del Vehiculo
            </label>
            <input
              type="text"
              name="registerMarca"
              value={registerMarca}
              placeholder="Ingresa la marca del vehiculo"
              minLength={3}
              maxLength={20}
              onChange={onRegisterCarChange}
              className="form-control"
              id="marca"
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="kilometraje" className="form-label">
              Kilometraje del Vehiculo
            </label>
            <input
              type="number"
              name="registerKilometraje"
              value={registerKilometraje}
              onChange={onRegisterCarChange}
              placeholder="Ingresar kilometraje actual"
              className="form-control"
              id="kilometraje"
              minLength={1}
              maxLength={7}
            />
          </div>
          <div className="mb-3 col-12 col-md-6">
            <label htmlFor="tipo" className="form-label">
              Tipo del Vehiculo
            </label>
            <input
              type="text"
              name="registerTipo"
              className="form-control"
              placeholder="Ingresar tipo de vehiculo"
              value={registerTipo}
              minLength={2}
              maxLength={20}
              onChange={onRegisterCarChange}
              id="tipo"
            />
          </div>
          <div className="mb-3 col-3">
            <button type="submit" className="btn btn-primary">
              Registrar Carro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
