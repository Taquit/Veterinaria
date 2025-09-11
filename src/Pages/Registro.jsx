import React, { useState } from "react";
import ReMascotCard from "./Cards/ReMascotCard";
import ReOwnerCard from "./Cards/ReOwnerCard";

function Registro(){
    const [owner,setOwner]=useState({
        name:"",lastName:"",age:"",sex:"",email:"",password:"",phone:"",street:"",
        block:"",postCode:"",RFC:"", RS:"",emName:"",emLastName:"",emAge:"",emEmail:"",emPhone:""
    })

    const emptyPet=()=>({
        name: "", photo: null, age: "", gender: "", weight: "",
        senas: "", color1: "", color2: "", pattern: "",
        specie: "", breed: "", type: "",rabia: false, parvovirus: false, moquillo: false, hepatitis: false,
        leptospirosis: false, bordetella: false, parainfluenza: false,
        desparasitacion: false, certificado: false, esterilizado: false,
        triple_felina: false, leucemia_felina: false,psitacosis_negativa: false, newcastle_vacuna: false,
        muda_plumas: false, arranca_plumas: false,salmonella_test: false, terrario: "", muda_piel: false,padecimientos:""
    })

    const [pets,setPets]=useState([emptyPet()])

    const addPet=()=>{
        setPets([...pets,{
            ame: "", photo: null, age: "", gender: "", weight: "",
        senas: "", color1: "", color2: "", pattern: "",
        specie: "", breed: "", type: "",rabia: false, parvovirus: false, moquillo: false, hepatitis: false,
        leptospirosis: false, bordetella: false, parainfluenza: false,
        desparasitacion: false, certificado: false, esterilizado: false,
        triple_felina: false, leucemia_felina: false,psitacosis_negativa: false, newcastle_vacuna: false,
        muda_plumas: false, arranca_plumas: false,salmonella_test: false, terrario: "", muda_piel: false,padecimientos:""
        }])
    }

    const updatePet = (idx, next) =>{
        setPets(pets.map((p,i)=>(i == idx ? next :p)));
    }

    const removePet =(udx)=>{
        if(pets.length ===1)return
        setPets(pets.filter((_,i)=>i !== idx));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const formData = new Formadata();
        formData.append("owner",JSON.stringify(owner))
        pets.forEach((p, i) => {
        const { photo, ...rest } = p;
        formData.append(`pets[${i}]`, JSON.stringify(rest));
        if (photo) formData.append(`pets[${i}][photo]`, photo);

        console.log({ owner, pets });
        alert("Formulario listo (revisa la consola). Aquí harías el POST a tu API.");
    });
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <ReOwnerCard owner={owner} onChange={setOwner}/>
            <hr />

            <h1>Mascotas</h1>
            {pets.map((pet, idx) => (
                <ReMascotCard
                key={idx}
                index={idx}
                pet={pet}
                onChange={(next) => updatePet(idx, next)}
                onRemove={pets.length > 1 ? () => removePet(idx) : undefined}
                />
            ))}

            <div className="actions">
                <button type="button" onClick={addPet}>➕ Agregar otra mascota</button>
            </div>

            <hr />

            <div className="actions">
                <button type="submit">Guardar registro</button>
            </div>
        </form>
            
            
        </>
    )
}

export default Registro