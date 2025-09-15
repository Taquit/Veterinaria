
import React from "react";
import { Link } from "react-router-dom";
import "./Css/HomePage.css";



function HomePage(){
    return (
        <div className="container">
            <img src="src/assets/sis.jpg" alt="" className="image"></img>
                <div className="desccontainer">
                    <div className="description">
                        <p className="subtitle">¿Quiénes somos?</p>
                        <p className="textdesc">Somos una empresa joven e innovadora que desarrolla software personalizado. Nuestro equipo de apasionados de la tecnología combina creatividad y conocimiento técnico para crear soluciones digitales que mejoran la vida de las personas y impulsan el crecimiento empresarial.</p>
                    </div>
                    <div className="description">
                        <p className="subtitle">¿Qué hacemos?</p>
                        <p className="textdesc">Somos una empresa joven e innovadora que desarrolla software personalizado. Nuestro equipo de apasionados de la tecnología combina creatividad y conocimiento técnico para crear soluciones digitales que mejoran la vida de las personas y impulsan el crecimiento empresarial.</p>
                    </div>
                </div>
                <div className="location">
                    <div className="contlac">
                        <p className="subtitle">¿Dónde nos encontramos?</p>
                        <iframe
                            title="Ubicación Resort Manager"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.56721822767!2d-99.13320868509422!3d19.43260798688724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d5d9f1bfb%3A0x1234567890abcdef!2sCiudad%20de%20México!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="map"
                        ></iframe>
                    </div>
                </div>
            </div>

    )
}

export default HomePage;
