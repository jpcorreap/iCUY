import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    useLocation,
    Link
} from "react-router-dom";
import PropTypes from "prop-types";
import defaultPhoto from "../assets/user.png"
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';

function Profile(props) {
    props.location(useLocation().pathname)
    return (
        <div className="Profile">
            <div className="card profile-info">
                <div className="row">
                    <div className="photo">
                        <img className="centrado-h" alt="foto de perfil" src={props.user.image ? props.user.image : defaultPhoto}></img>
                        <button className="btn btn-primary edit centrado-h">
                            <FiEdit3/> Editar
                        </button>
                    </div>
                    <div className="col information">
                        <h3 className="name">{props.user.name}</h3>
                        <p className="basic-info">
                            Edad: {'35'}
                            <br></br>
                            Telefono : {props.user.phone}
                            <br></br>
                            Direccion : {props.user.address}
                        </p>
                        <hr></hr>
                        <div className="stats">
                            <div className="stat">
                                <h6 className="title centrado-h">Habitos</h6>
                                <p className="value">{`${props.habits.length>9?'':'0'}${props.habits.length}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-12 habits">
                    <div className="card">
                        <div className="header">
                            <h2 className="title fit">Mis Habitos</h2>
                            <button className="add centrado-v">
                                <BsFillPlusSquareFill />
                            </button>
                        </div>
                        <hr></hr>
                        <div className="body">
                            <div className="row habits-list no-gutters">
                                {
                                    props.habits.map((ele, i) => {
                                        return (
                                            <div className="col-6 habit" key={`profile-habit-${i}`}>
                                                <span className="centrado-v d-block title">
                                                    {ele.title}
                                                </span>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="edit row">
                            <form action="/users" method="post">
                                <div className="col-12 ">
                                    <div className="inputBox">
                                        <input type="text" name="title" required></input>
                                        <label>Nombre del Habito</label>
                                    </div>
                                </div>

                                <div className="col-12 ">
                                    <div className="inputBox">
                                        <input type="text" name="description" required></input>
                                        <label>Descripcion</label>
                                    </div>
                                </div>

                                <div className="col-6 ">
                                    <div className="inputBox">
                                        <input type="checkbox" name="isDaily" required></input>
                                        <label>Registro Diario</label>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="inputBox">
                                        <select name="inputType" required>
                                            <option value="number">Numerico</option>
                                            <option value="checkbox">Si/No</option>
                                            <option value="time">Hora</option>
                                        </select>
                                        <label>Tipo de Registro</label>
                                    </div>
                                </div>
                                <button className="btn btn-danger">
                                    Cancelar
                                </button>
                                <button className="btn btn-primary" type="submit">
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 board">
                    <div className="card">

                    </div>
                </div>
            </div>
        </div>
    )
}
Profile.propTypes = {
    user: PropTypes.object.isRequired,
    habits: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    location: PropTypes.func.isRequired
}
export default Profile;