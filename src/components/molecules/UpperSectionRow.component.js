import React from 'react';
import './UpperSectionRow.css';
import {TextField} from '../atoms/TextField.component';


export const UpperSectionRow = ({ image, description, diceValue }) => (
    <div className="container">
        {/* si image affiche image */}
        {/* {image && <img src={image} alt="dice"/>}  */}
        { image ?  <img src={image} alt="dice"/>: null }
        <p>{description}</p>
        <TextField value={diceValue} />
    </div>
)

