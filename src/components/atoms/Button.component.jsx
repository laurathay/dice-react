import React from 'react'
//A. je créer mon petit composant, ma props que je vais reutiliser
export const Button = ({ text, handleClick }) =>
// disponible au clique
 <button onClick={() => handleClick()}>{text}</button>