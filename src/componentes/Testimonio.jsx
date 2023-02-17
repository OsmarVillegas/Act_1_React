import React from "react";
import '../hojas-de-estilo/Testimonio.css';
import data from '../base-de-datos/Data.json';

export function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}`)} alt={data.nombre}/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

// export function Testimonio(){
//   return (
//     <div className="contenedor-testimonio">
//       {data.map((data) => {
//         const imagen = data.img;
//         console.log(imagen);
//       return(
//       <div>
//         <img className="imagen-testimonio" src={require(`../imagenes/${imagen}`)} alt={data.nombre}/>
//         <div className="contenedor-texto-testimonio">
//           <p className="nombre-testimonio">{data.nombre} en {data.pais}</p>
//           <p className="cargo-testimonio">{data.cargo} en {data.empresa}</p>
//           <p className="texto-testimonio">{data.testimonio}</p>
//         </div>
//       </div>
//       )
//       })}

//     </div>
//   );
// }
