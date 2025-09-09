import React, { useState } from "react";
import { useFetchTienda } from "../../CustomHooks/useFetchTienda";

function ReMascotCard (){
    const dogBreeds = [
  "Affenpinscher","Africano","Airedale Terrier","Akita","Appenzeller","Pastor Australiano",
  "Bakharwal","Basenji","Beagle","Bluetick Coonhound","Borzoi","Bouvier","Bóxer",
  "Bruselas Griffon (Brabançon)","Briard","Buhund Noruego","Bulldog","Bull Terrier","Perro Boyero",
  "Cavapoo","Chihuahua","Chippiparai","Chow Chow","Clumber Spaniel","Cockapoo","Collie",
  "Coonhound","Corgi","Coton de Tulear","Dachshund (Salchicha)","Dálmata","Gran Danés",
  "Perro Danés","Deerhound Escocés","Dhole","Dingo","Dóberman","Elkhound Noruego","Entlebucher",
  "Esquimal Americano","Spitz Finlandés","Bichón Frisé","Gaddi","Pastor Alemán","Galgo",
  "Groenendael","Habanero (Bichón Habanero)","Sabueso (Hound)","Husky Siberiano","Keeshond","Kelpie Australiano","Kombai",
  "Komondor","Kuvasz","Labradoodle","Labrador Retriever","Leonberger","Lhasa Apso","Malamute de Alaska",
  "Pastor Belga Malinois","Bichón Maltés","Mastín","Xoloitzcuintle (Perro sin pelo mexicano)","Mezcla","Perro de Montaña","Mudhol",
  "Terranova (Newfoundland)","Otterhound","Ovcharka (Pastor caucásico)","Papillón","Pariah","Pekines","Corgi Galés de Pembroke",
  "Pinscher","Pitbull","Pointer","Pomerania","Caniche (Poodle)","Pug (Carlino)",
  "Puggle","Montaña de los Pirineos","Rajapalayam","Redbone Coonhound","Retriever","Ridgeback",
  "Rottweiler","Saluki","Samoyedo","Schipperke","Schnauzer","Segugio Italiano","Setter",
  "Shar Pei","Pastor (Sheepdog)","Shiba Inu","Shih Tzu","Spaniel","Spitz","Springer Spaniel",
  "San Bernardo","Terrier","Tervueren (Pastor Belga)","Braco Húngaro (Vizsla)","Perro de Agua","Weimaraner","Whippet",
  "Wolfhound Irlandés"
];
    const catBreed = [
  "Abisinio","Egeo","American Bobtail","American Curl","American Ringtail",
  "American Shorthair","American Wirehair","Aphrodite Giant","Mau árabe",
  "Asiático","Semi-peludo Asiático","Australian Mist","Balinés","Bambino",
  "Bengalí","Birmano","Bombay","Brazilian Shorthair","British Longhair",
  "British Shorthair","Burmés","Burmilla","California Spangled",
  "Chartreux (Cartujo)","Chantilly-Tiffany","Chausie","Li Hua chino",
  "Colorpoint Pelo Largo","Colorpoint Persa","Colorpoint Pelo Corto",
  "Cornish Rex","Cymric (Manx de pelo largo)","Devon Rex","Don Sphynx (Donskoy)",
  "Dragon Li","Dwelf","Egyptian Mau","European Shorthair","Exótico (Pelo Corto)",
  "Foldex","German Rex","Havana Brown","Highlander","Himalayo",
  "Bobtail Japonés","Javanés","Kanaani","Khao Manee","Kinkalow",
  "Korat","Bobtail Coreano","Bobtail Kurilian","Lambkin","LaPerm",
  "Lykoi","Maine Coon","Manx","Mekong Bobtail","Minskin","Minuet",
  "Munchkin","Nebelung","Neva Masquerade","Bosque de Noruega",
  "Ocicat","Oriental (Largo/Corto)","Persa","Peterbald","Pixiebob",
  "Ragamuffin","Ragdoll","Azul Ruso","Savannah","Scottish Fold",
  "Selkirk Rex","Serengeti","Siamés","Siberiano","Singapura","Snowshoe",
  "Sokoke","Somalí","Sphynx (Esfinge)","Suphalak","Tailandés",
  "Tonkinés","Toybob","Toyger","Angora Turco","Van Turco",
  "Levkoy Ucraniano","York Chocolate","Otro"
];
    const birdType = [
  "Budgerigar (Periquito)", "Canario", "Agapornis (Lovebird)", "Cacatúa", "Loro gris africano","Loro Senegalés", 
  "Loros Amazónicos", "Guacamayo (Macaw)", "Loro Eclectus", "Periquito Brotogeris", "Caiqué", "Periquito Poicephalus", 
  "Periquito Psittacula (Ringneck)", "Loro Pionus", "Tucán"
];
    const reptilesTYpe = [
  "Gecko leopardo","Gecko crestado","Dragón barbudo","Uromastyx","Anolis verde","Camaleón velado",  "Pitón bola",
  "Serpiente de maíz","Serpiente rey de California","Serpiente leche","Tortuga de orejas rojas","Tortuga rusa","Tortuga griega",
  "Tortuga de caja","Tortuga sulcata"
];





    const [specie,setSpecie]=useState("");

    return(
        <>
            <div>
                <h1>Mascota</h1>
                <p>Formulario para la informacion de su mascota </p>
                <form action="">
                    <label > Nombre:</label>
                    <input type="text" name="name" placeholder="Nombre de la mascota" />
                    <label >Foto</label>
                    <input type="file" name="photo"/>
                    <label >Edad:</label>
                    <input type="number" name="age" />
                    <label>Sexo:</label>
                    <select name="gender">
                        <option value="">--Selecciona--</option>
                        <option value="M">Macho</option>
                        <option value="F">Hembra</option>
                        
                    </select>
                    <label>Peso</label>
                    <input type="number" name="weigth" min={0} />
                    <label >Especie</label>
                    <select name="specie" value={specie} onChange={(e)=> setSpecie(e.target.value)}>
                        <option value="">--Selecciona</option>
                        <option value="D">Perro</option>
                        <option value="C">Gato</option>
                        <option value="R">Reptil</option>
                        <option value="B">Ave</option>
                    </select>
                    {specie ==="D" && (
                        <div>
                            <label>Raza:</label>
                            <select name="breed" >
                                <option value="">--Selecciona raza--</option>
                                {dogBreeds.map((breed,i)=>(
                                    <option key={i} value={breed}>{breed}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    {specie === "C" && (
                        <div>
                            <label>Raza:</label>
                            <select name="breed">
                                <option value="">--Selecciona raza--</option>
                                {catBreed.map((breed,i)=>(
                                    <option key={i} value={{breed}}>{breed}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    {specie === "B" && (
                        <div>
                            <label>Tipo de Ave:</label>
                            <select name="type">
                                <option value="">--Selecciona tipo</option>
                                {birdType.map((breed,i)=>(
                                    <option key={i} value={breed}>{breed}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    {specie === "R" && (
                        <div>
                            <label >Tipo de Reptil:</label>
                            <select name="type">
                                <option value="">--Seleciona tipo--</option>
                                {reptilesTYpe.map((type,i)=>(
                                    <option key={i} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}

export default ReMascotCard