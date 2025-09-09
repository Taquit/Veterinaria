import React from "react";
import "../Css/CardsCss/ReDueñoCard.css"

function ReDueñoCard (){


    return(
        <>
            <div className="owner-container">
                <h1>Dueño</h1>
                <p>El siguiente registro es para tomar los datos del dueño de la mascota que esta ingresando</p> 
                <form action="">
                    <label>Nombre:</label>
                    <input type="text" name="ame" placeholder="Escribe tu nombre"/>
                    <input type="text" name="lastName" placeholder="Escribe tus apellidos"/>
                    <input type="number" name="age" min="0" step="0" placeholder="42" />
                    <label>Sexo:</label>
                    <select name="gender">
                        <option value="">--Selecciona--</option>
                        <option value="M">Hombre</option>
                        <option value="F">Mujer</option>
                        <option value="O">Otro</option>
                    </select>
                    <label >Correo:</label>
                    <input type="email" name="email"  placeholder="ejemplo@correo.com"/>
                    <label >Contraseña:</label>
                    <input type="password" name="password" />
                    <label>Telefono:</label>
                    <input type="tel" name="phone" placeholder="+52 555-555-555"/>
                    <div>
                        <h2>Domicilio</h2>
                        <label>Calle:</label>
                        <input type="text" name="street" placeholder="Calle principal" />
                        <label>Colonia:</label>
                        <input type="text" name="block" placeholder="Colonia"/>
                        <label>Numero:</label>
                        <input type="number"  name="number" min="0" step="1" placeholder="324"/>
                        <label >Codigo Postal</label>
                        <input type="number" name="postCode" min="0" step="1" placeholder="05300" />
                    </div>
                    <div>
                        <label> Datos fiscales</label>
                        <input type="text" name="RFC" placeholder="RFC" />
                        <input type="text" name="RS" placeholder="Razon Social"/>
                    </div>
                    <div> 
                        <h2>Contacto de emergencia</h2>
                        <label>Nombre:</label>
                        <input type="text" name="ame" placeholder="Escribe su nombre"/>
                        <input type="text" name="lastName" placeholder="Escribe sus apellidos"/>
                        <input type="number" name="age" min="0" step="0" placeholder="42" />
                        <label >Correo:</label>
                        <input type="email" name="email"  placeholder="ejemplo@correo.com"/>
                        <label>Telefono:</label>
                        <input type="tel" name="phone" placeholder="+52 555-555-555"/>
                    </div>
                </form>   
            </div> 
        </>
    )
}
export default ReDueñoCard