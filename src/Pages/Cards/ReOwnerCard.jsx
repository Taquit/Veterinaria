import React from "react";
import "../Css/CardsCss/ReDueñoCard.css"

function ReOwnerCard ({owner,onChange}){
    const handle = (e)=>onChange({...owner,[e.target.name]:e.target.value})

    return(
        <>
            <div className="owner-container">
                <h1>Dueño</h1>
                <p>El siguiente registro es para tomar los datos del dueño de la mascota que esta ingresando</p> 
                    <label>Nombre:</label>
                    <input type="text" name="name" placeholder="Escribe tu nombre" value={owner.name || ""} onChange={handle}/>
                    <input type="text" name="lastName" placeholder="Escribe tus apellidos" value={owner.lastName || ""} onChange={handle}/>
                    <label >Edad:</label>
                    <input type="number" name="age" min="0" step="0" placeholder="42" value={owner.age || ""} onChange={handle} />
                    <label>Sexo:</label>
                    <select name="sex" value={owner.sex || ""} onChange={handle}>
                        <option value="">--Selecciona--</option>
                        <option value="M" >Hombre</option>
                        <option value="F">Mujer</option>
                        <option value="O">Otro</option>
                    </select>
                    <label >Correo:</label>
                    <input type="email" name="email"  placeholder="ejemplo@correo.com" value={owner.email || ""} onChange={handle}/>
                    <label >Contraseña:</label>
                    <input type="password" name="password"  value={owner.password || ""} onChange={handle}/>
                    <label>Telefono:</label>
                    <input type="tel" name="phone" placeholder="+52 555-555-555" value={owner.phone || ""} onChange={handle}/>
                    <div>
                        <h2>Domicilio</h2>
                        <label>Calle:</label>
                        <input type="text" name="street" placeholder="Calle principal" value={owner.street || ""} onChange={handle}/>
                        <label>Colonia:</label>
                        <input type="text" name="block" placeholder="Colonia" value={owner.block || ""} onChange={handle}/>
                        <label>Numero:</label>
                        <input type="number"  name="number" min="0" step="1" placeholder="324" value={owner.number || ""} onChange={handle}/>
                        <label >Codigo Postal</label>
                        <input type="number" name="postCode" min="0" step="1" placeholder="05300" value={owner.postCode || ""} onChange={handle}/>
                    </div>
                    <div>
                        <label> Datos fiscales</label>
                        <input type="text" name="RFC" placeholder="RFC" value={owner.RFC || ""} onChange={handle}/>
                        <input type="text" name="RS" placeholder="Razon Social" value={owner.RS || ""} onChange={handle} />
                    </div>
                    <div> 
                        <h2>Contacto de emergencia</h2>
                        <label>Nombre:</label>
                        <input type="text" name="emName" placeholder="Escribe su nombre" value={owner.nameE || ""} onChange={handle}/>
                        <input type="text" name="emLastNameE" placeholder="Escribe sus apellidos" value={owner.lastNameE || ""} onChange={handle}/>
                        <label >Edad</label>
                        <input type="number" name="emAgeE" min="0" step="0" placeholder="42" value={owner.ageE || ""} onChange={handle} />
                        <label >Correo:</label>
                        <input type="email" name="emEmailE"  placeholder="ejemplo@correo.com" value={owner.emailE || ""} onChange={handle}/>
                        <label>Telefono:</label>
                        <input type="tel" name="emPhoneE" placeholder="+52 555-555-555" value={owner.phoneE || ""} onChange={handle}/>
                    </div>
            </div> 
        </>
    )
}
export default ReOwnerCard