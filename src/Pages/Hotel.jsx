import React from "react";
import "./Css/Hotel.css";
import { Link } from "react-router-dom";

function Hotel(){
    return(
        <div className="hotel-container">
            <div>
                <h1>Hotel para perros "Animals Friends Resorts"</h1>
            </div>

            <div className="card">
                <h2>¿Qué es un hotel para mascotas?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                <p>Fusce euismod nulla fermentum magna himenaeos congue...</p>
            </div>

            <div className="card">
                <h3>Nuestras habitaciones</h3>
                <ul>
                    <li>
                        <h4>Habitación VIP</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </li>
                    <li>
                        <h4>Habitación todo incluido</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </li>
                    <li>
                        <h4>Habitación Normal</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </li>
                </ul>
            </div>
            <div className="card">
                <h2>
                    <Link to="/reservacion">Hacer una reservación</Link>
                </h2>
            </div>
            <div className="card">
                <h2>¿Dónde Estamos?</h2>
                <div className="map-container">
                    <iframe
                        title="Ubicación Resort Manager"
                        src="https://www.google.com/maps/embed?pb=..."
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="card contact">
                <h3>Contáctanos</h3>
                <ul>
                    <li>WhatsApp</li>
                    <li>Instagram</li>
                    <li>Teléfono</li>
                </ul>
            </div>
        </div>
    )
}

export default Hotel;
