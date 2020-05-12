import React, { useState } from 'react';
import PropTypes from "prop-types";
import { FcGoogle } from 'react-icons/fc';
function Profile(props) {
    return (
        <div className="Profile">
            <div className="card profile-info">
                <div className="row">
                    <div className="col-md-4 col-12 photo">

                    </div>
                    <div className="col-md-8 col-12 photo">
                        <p className="name">{props.user.name}</p>
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
                                <p className="value">{props.habits.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-12 habits">
                    <div className="card">

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
    user: PropTypes.object.isRequired
}
export default Profile;