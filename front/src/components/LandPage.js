import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import logo from "../assets/icuymaslogo.png";
import libreta from "../assets/libreta.png"
function LandPage() {
    return (
        <div className="LandPage">
            <nav>
                <a className="logo" href="/">
                    <img className="centrado-v" alt="Logo iCUY" src={logo}></img>
                </a>
                <Link to="/login">
                    <button className="btn btn-outline btn-primary main-btn centrado-v" href="/login">
                        Ingresa
                </button>
                </Link>
            </nav>
            <div className="intro">
                <div className="cover"></div>
                <div className="row h-100">
                    <div className="col-4">
                        <img className="centrado intro-img" alt="Mascota iCUY" src={libreta}></img>
                    </div>
                    <div className="col-8">
                        <div className="intro-text centrado">
                            <h2 className="title">Transforma tu Vida</h2>
                            <p>Organiza y guia tu vida para ser la mejor version de ti mismo</p>
                            <h3>Haz de la felicidad tu habito</h3>
                        </div>
                        <Link to="/login">
                            <button className="btn btn-primary centrado-h inicio" href="/login">
                                Empieza Ya
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="second">
                <h1 className="centrado-h title">Para que iCUY</h1>
                <p className="subtitle">Crea habitos en Salud, Relaciones y Trabajo para ayudarte a vivir una vida mas sana, feliz y satisfactoria.</p>
                <div className="row">
                    <div className="col-4">
                        <div className="header">
                            {/* <img alt="" src={}></img> */}
                            <h2>Facil de Usar</h2>
                        </div>
                        <div className="description">

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="header">
                            {/* <img alt="" src={}></img> */}
                            <h2>Facil de Usar</h2>
                        </div>
                        <div className="description">

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="header">
                            {/* <img alt="" src={}></img> */}
                            <h2>Facil de Usar</h2>
                        </div>
                        <div className="description">

                        </div>
                    </div>
                </div>
            </div>
            <div className="third">
                <h1 className="title">
                    The Happy Methodology
                </h1>
                <div className="step">
                    <div className="number"><div className="centrado fit num">1</div></div>
                    <h2 className="header">
                        Define Tus Habitos
                    </h2>
                    <p className="description">
                        Puedes crear todos los habitos que creas mejoraran tu vida
                        <br></br>
                        Salud | Relaciones | Trabajo
                    </p>
                </div>
                <div className="step">
                    <div className="number"><div className="centrado fit num">2</div></div>
                    <h2 className="header">
                        Registra tus Logros
                    </h2>
                    <p className="description">

                    </p>
                </div>
                <div className="step">
                    <div className="number"><div className="centrado fit num">3</div></div>
                    <h2 className="header">
                        Dale Seguimiento a Tu Progreso
                    </h2>
                    <p className="description">

                    </p>
                </div>
            </div>
            <div className="fourth">
                <h1 className="title centrado-v">Listo para Mejorar</h1>
                <Link to="/login">
                    <button className="btn btn-primary inicio centrado-v" href="/login">
                        Empieza Ya
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default LandPage;