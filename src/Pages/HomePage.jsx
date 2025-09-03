import React from "react";
import { Link } from "react-router-dom";
import "./Css/HomePage.css";

function HomePage(){
    return (
        <div className="home-container">
            <div className="row">
                <div className="card">
                    <h1>¿Quiénes Somos?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nostra hendrerit bibendum...</p>
                    <p>Fusce euismod nulla fermentum magna himenaeos congue sociis suspendisse...</p>
                </div>

                <div className="card">
                    <h1>¿Qué hacemos?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nostra hendrerit bibendum...</p>
                    <p>Fusce euismod nulla fermentum magna himenaeos congue sociis suspendisse...</p>
                </div>
            </div>

            <div className="card">
                <h2>¿Dónde Estamos?</h2>
                <div className="map-container">
                    <iframe
                        title="Ubicación Resort Manager"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.56721822767!2d-99.13320868509422!3d19.43260798688724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d5d9f1bfb%3A0x1234567890abcdef!2sCiudad%20de%20México!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="card services">
                <h3>Nuestros servicios</h3>
                <ul className="links">
                    <li><Link to='/hotel'>Hotel</Link></li>
                    <li><Link to='/tienda'>Tienda</Link></li>
                    <li><Link to='/estetica'>Estética</Link></li>
                </ul>
</div>


        </div>
    )
}

export default HomePage;
