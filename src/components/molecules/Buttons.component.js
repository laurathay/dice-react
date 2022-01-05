import React from 'react';
import './buttons.css';
// B. je limporte 
import {Button} from '../atoms/Button.component';
// import {Link} from 'react-router';

export const Buttons = ({handleNextTurn}) => (
    <div className="keepPlayOrNah">
        {/* C. je le reutilise ici en faisant appelle à la props créer dans A et je marque le texte que je veux qu'il écrit */}
        <Button text="Keep dicing ?"/>

        {/* <Link to={"/secondplayer"} activeClassName={"active"}> Stop here </Link> */}
        <Button text="Keep it safe, stop here" handleClick={() => handleNextTurn()}  />     {/* au lieu de lui passer un texte on lui passe une fonction */}
        {/* 2.enfant qui va rececvoir le parametre */}
    </div>
)