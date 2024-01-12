import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



export const Producto = () =>{


  return(


<div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container">
         <Link to="/" className="navbar-brand">Inicio</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
       </div>
     </nav>

     <div className="text-center container mt-4 ">
       <h2>Productos Destacados</h2>

       <div className="row">
         <div className="col-md-6 mb-4">
           <div className="card">
             <img src="https://grupouma.com/colombia/wp-content/uploads/sites/2/2022/06/1-Boxer-s-negro.png" className="card-img-top" alt="Motos" />
             <div className="card-body">
               <h5 className="card-title">BOXER S</h5>
               <p className="card-text">Motocicleta confiable y eficiente diseñada para el uso diario y aplicaciones comerciales.</p>
             </div>
           </div>
         </div>

         <div className="col-md-6 mb-4">
           <div className="card">
             <img src="https://grupouma.com/colombia/wp-content/uploads/sites/2/2023/08/Discover-125-sr-r-sport-azul-03.webp" className="card-img-top" alt="discover" />
             <div className="card-body">
               <h5 className="card-title">DISCOVER 125 ST-R SPORT</h5>
               <p className="card-text">12.82 caballos de potencia a un precio cómodo. Más rendimiento con bajo consumo de gasolina</p>
             </div>
           </div>
         </div>
       </div>

       <div className="row">
         <div className="md-6 mb-4">
           <div className="card">
             <img src="https://grupouma.com/colombia/wp-content/uploads/sites/2/2023/08/pulsar-ns-125-03.webp" className="card-img-top" alt="pulsar" />
             <div className="card-body">
               <h5 className="card-title">PULSAR NS 125</h5>
               <p className="card-text">La nueva NS 125 es ese tipo de moto urbana deseada por muchos, pero conducida por pocos. La Pulsar NS125 es ágil y rápida</p>
             </div>
           </div>
         </div>
</div>

     <div className='row'>  
         <div className="col-md-6 mb-3">
           <div className="card">
             <img src="https://grupouma.com/colombia/wp-content/uploads/sites/2/2022/08/Dominar-400-negra-1.png" className="card-img-top" alt="dominar" />
             <div className="card-body">
               <h5 className="card-title">DOMINAR 400</h5>
               <p className="card-text"> Dominar 400 UG. Esta motocicleta es la nueva apuesta de la firma india en el país, llega con mejoras en su diseño, incluyendo nuevos colores y modificaciones</p>
             </div>
           </div>
         </div>
       

     
         <div className="col-md-6 mb-2">
           <div className="card">
             <img src="https://triumphcolombia.com/wp-content/uploads/2022/09/Speed-triple-1200-rr-roja-23.png" className="card-img-top" alt="Motos" width="50px" />
             <div className="card-body">
               <h5 className="card-title">SPEED TRIPLE 1200 RR </h5>
               <p className="card-text">EMOCIONANTE MOTOR TRICILÍNDRICO DE 1.160 cc
Desarrollada en base a la experiencia del programa de competición de Moto2™, el motor tricilíndrico de baja inercia de la RR produce unos contundentes 125 Nm de par motor y alcanza en un instante los 180 CV de potencia máxima El cambio rápido Triumph Shift Assist.</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};
export default Producto();