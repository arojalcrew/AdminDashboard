import React, {useState} from 'react';
import "../App.css";
import Axios from 'axios';
import { useEffect } from 'react';

const Login = () => {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/register", {username: usernameReg, password: passwordReg}).then((response) => {
            console.log(response);
        });
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {username: username, password: password}).then((response) => {
            
        if (response.data.message)
        {
            setLoginStatus(response.data.message);
        }
        else
        {
            setLoginStatus(response.data[0].username);
        }

        console.log(response.data);
        });
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
         if (response.data.loggedIn == true)
         {
            setLoginStatus(response.data.user[0].username);
         }   
        });
    }, []);

  return (
    <div className="mt-12">
        <div className='container-fluid register'>
        <h1>Rejestracja</h1>
        <label htmlFor="">Nazwa użytkownika</label>
        <input type="text" onChange={(e) => {
            setUsernameReg(e.target.value);
        }} />
        <label htmlFor="">Hasło</label>
        <input type="password" onChange={(e) => {
            setPasswordReg(e.target.value);
        }} />
        <button onClick={register} className='border border-current bg-sky-500 hover:bg-sky-700'>Zarejestruj się</button>
    </div>
    <div className="container-fluid register">
        <h1>Logowanie</h1>
        <input type="text" placeholder='Nazwa użytkownika' onChange={(e) => {
            setUsername(e.target.value);
        }} /> <br />
        <input type="password" placeholder='Hasło' onChange={(e) => {
            setPassword(e.target.value);
        }} /> <br />
        <button onClick={login} className='border border-current bg-sky-500 hover:bg-sky-700'>Zaloguj się</button>
    </div>
    <h1>{loginStatus}</h1>
    </div>
    
  )
}

export default Login