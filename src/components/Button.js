import React from 'react';
import RollItImg from '../assets/images/rollit.png';

export const Button = () => (
    <div onClick={() => console.log("je marche")} className="container">
        <img src={RollItImg} alt="rollit"/>
    </div>
)
