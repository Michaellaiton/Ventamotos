import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/login.css';

export const Login = () => {
 const users = [
  { id: 1, email: 'maicol@gmail.com', password: 123 }
 ]

 const [email, setEmail] = useState('maicol@gmail.com');
 const [password, setPassword] = useState(123);
 const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && Number(user.password) === Number(password));
    if (user) {
    console.log('Usuario autenticado:', user);
    navigate('/');
    } else {
    console.log('Credenciales incorrectas');
    }
  };
 

 return (
   <div className="login-container">
     <h2>Login</h2>
     <form onSubmit={handleLogin}>
       <label>
         Email:
         <input type="text" value={email} onChange={handleEmailChange} />
       </label>
       <br />
       <label>
         Password:
         <input type="password" value={password} onChange={handlePasswordChange} />
       </label>
       <br />
       <button type="submit" className="loginButtonUnique">Inicar</button>
     </form>
     <p>
       ¿No tienes una cuenta? <Link to="/registrar">Regístrate aquí</Link>.
     </p>
   </div>
 );
};

export default Login;