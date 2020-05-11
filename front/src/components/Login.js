import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
function Login() {
    console.log("login")
    const [registered, setRegistered] = useState(true);
    if (registered) {
        return (
            <div className="wrapper vh-100 Login">
                <div className="box">
                    <p className="title">Iniciar Sesión</p>
                    <form action="/auth/login" method="post">
                        <div className="inputBox">
                            <input type="email" name="username" required></input>
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required ></input>
                            <label>Contraseña</label>
                        </div>
                        <button className="btn btn-primary centrado-h submit" type="submit">
                            Ingresar
                        </button>
                        <button onClick={() => window.location.reload(false)} className="btn btn-light centrado-h google" >
                            <FcGoogle /> Ingresa con Google
                        </button>
                    </form>
                    <div className='text-light'>
                        ¿No tienes una cuenta?
                        <button className="btn btn-link btn-secondary" onClick={() => setRegistered(false)}>Registrate</button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="wrapper vh-100 Login">
                <div className="box">
                    <p className="title">Registrarse</p>
                    <form action="/users" method="post">
                        <div className="inputBox">
                            <input type="text" name="name" required></input>
                            <label>Nombre</label>
                        </div>
                        <div className="inputBox">
                            <input type="email" name="email" required></input>
                            <label>Email</label>
                        </div>
                        <div className='container'>
                            <div className="row w-10">
                                <div className="col">
                                    <input type="radio" name='gender' value="male" required></input>
                                    <label className='text-light'>Hombre</label>
                                </div>
                                <div className="col">
                                    <input type="radio" name='gender' value="female" required></input>
                                    <label className='text-light'>Mujer</label>
                                </div>
                            </div>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required ></input>
                            <label>Contraseña</label>
                        </div>

                        <button onClick={() =>window.location.reload(false)} className="btn btn-primary centrado-h submit" type="submit">
                            Registrarse
                        </button>

                    </form>
                        <button onClick={() => fetch("/auth/google")} className="btn btn-light centrado-h google" >
                            <FcGoogle/> Ingresa con Google
                        </button>
                    <div className='text-light'>
                        ¿Ya tienes una cuenta?
                    <button className="btn btn-link btn-secondary" onClick={()=>setRegistered(true)}>Ingresa</button>
                    </div>
                </div>
            </div >
        );
    }
}
export default Login;