import React from 'react';
import BurgerLines from '../../assets/images/burger-lines.png';
import Logo from '../../assets/images/logo.png';
import './header.css'; 
import {TextField} from '../atoms/TextField.component';
import {UpperSectionRow} from './UpperSectionRow.component';

export const Header = () => (
    <div className="headerContainer">
        <p className="playerName"> Player name </p>
        
        <div className="header">
            <img className="buger1" src={BurgerLines} alt="deco burger"/>
                <img className="logo" src={Logo} alt="logo du jeu"/>
            <img className="buger" src={BurgerLines} alt="deco burger"/>
        </div>

        <UpperSectionRow/>
        <TextField/>
    </div>
) 