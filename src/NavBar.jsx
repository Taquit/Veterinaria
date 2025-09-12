    import React from "react";
    import { Link } from "react-router-dom";
    import './Pages/Css/NavBar.css'

    
    const NavBar=()=>{
        return<>
            <nav className="navbar">
                <div className="logo">Resort Manger</div>
                <ul className="links">
                    <li><Link to= '/'>Inicio</Link></li>
                    <li><Link to= '/hotel'>Hotel</Link></li>
                    <li><Link to ='/tienda'>Tienda</Link></li>
                    <li><Link to ='/estetica'>Estetica</Link></li>
                    <li><Link to = '/login' >Inicio de Sesion</Link></li>
                </ul>
            </nav>
        </>
    }

    export default NavBar