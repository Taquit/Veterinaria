import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import  '../Css/UserCss/HomeUser.css'

function HomeUser() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const owner = state?.owner;
  const pets = state?.pets;

  if (!owner || !pets) {
    // Si llegaron sin datos (refresh o acceso directo):
    return (
      <div style={{ padding: 16 }}>
        <p>No hay datos de registro cargados.</p>
        <button className="button" onClick={() => navigate("/registro")}>
          Volver al registro
        </button>
      </div>
    );
  }

  return (
    <div className="home-user-container" >
      <h1>Resumen de Registro</h1>

      <section className="owner-section">
        <h2>Dueño</h2>
        <ul>
          <li>Nombre: {owner.name} {owner.lastName}</li>
          <li>Fecha de nacimiento: {owner.bday}</li>
          <li>Email: {owner.email}</li>
          <li>Telefono: {owner.phone}</li>
          <li>Dirección: {owner.street} #{owner.block}, CP {owner.postCode}</li>
          <li>RFC: {owner.RFC}</li>
          <li><strong>Contacto de emergencia:</strong> {owner.emName} {owner.emLastName} ({owner.emPhone})</li>
        </ul>
        <h2>Contacto de emergencia</h2>
        <ul>
            <li>Nombre: {owner.emName} {owner.emLastName} </li>
            <li>Telefono: {owner.emPhone}</li>
            <li>Email: {owner.emEmail}</li>
        </ul>
      </section>

      <section className="pets-section">
        <h2>Mascotas</h2>
        {pets.map((pet, i) => (
          <div key={i} className="mascot-div">
            <h3>Mascota #{i + 1}: {pet.name || "(sin nombre)"}</h3>
            <ul>
              <li>Especie: {pet.specie}</li>
              <li><strong>Raza:</strong> {pet.breed}</li>
              <li><strong>Tipo:</strong> {pet.type}</li>
              <li><strong>Edad:</strong> {pet.bday}</li>
              <li><strong>Género:</strong> {pet.sex}</li>
              <li><strong>Peso:</strong> {pet.weight}</li>
              {pet.photo instanceof File && (
              <img
                alt={`Foto de ${pet.name || "mascota"}`}
                src={URL.createObjectURL(pet.photo)}
                style={{ maxWidth: 200, borderRadius: 8, marginTop: 8 }}
              />
                )}
            </ul>

          </div>
        ))}
      </section>
    </div>
  );
}

export default HomeUser;
