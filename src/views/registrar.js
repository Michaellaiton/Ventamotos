import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/registrar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';  

export const Registrar = () =>{
 const [name, setName] = useState('michael');
 const [email, setEmail] = useState('michael1@gmail.');
 const [password, setPassword] = useState('1234');
 const [confirmPassword, setConfirmPassword] = useState('1234');
 
 const handleRegister = (event) => {
  event.preventDefault();
  // Verificar si el usuario ya existe
  const existingUser = JSON.parse(localStorage.getItem(email));
  if (existingUser) {
    alert('Este correo electrónico ya está registrado.');
    return;
  }
  // Guardar el nuevo usuario en el almacenamiento local
  localStorage.setItem(email, JSON.stringify({ name, email, password }));
  console.log('Usuario registrado exitosamente');
 };
 return(


 <div className="form-container">
   <form onSubmit={handleRegister}>
     <label>
       Nombre:
       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
     </label>
     <br />
     <label>
       Correo Electrónico:
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
     </label>
     <br />
     <label>
       Contraseña:
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
     </label>
     <br />
     <label>
       Confirmar Contraseña:
       <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
     </label>
     <br />
     <button type="submit">Registrarse</button>
     <Link to={"/"}>Volver al index </Link>
   </form>
 </div>


 );
}
export default Registrar;