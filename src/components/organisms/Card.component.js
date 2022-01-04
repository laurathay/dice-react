import {UpperSectionRow} from '../molecules/UpperSectionRow.component';
import {Header} from '../molecules/Header.component';
import Dice1 from '../../assets/images/die-1.png';
import Dice2 from '../../assets/images/die-2.png';
import Dice3 from '../../assets/images/die-3.png';
import Dice4 from '../../assets/images/die-4.png';
import Dice5 from '../../assets/images/die-6.png';
import Dice6 from '../../assets/images/die-6.png';
import './card.css';

const array = [
    {
        image: Dice1,
        description: 'Count and add 100',
        value: '100', 
    },
    {
        image: Dice2,
        description: 'Count and add nothing',
        value: '0', 
    },
    {
        image: Dice3,
        description: 'Count and add nothing',
        value: '0', 
    },
    {
        image: Dice4,
        description: 'Count and add nothing',
        value: '0', 
    },
    {
        image: Dice5,
        description: 'Count and add 50',
        value: '50', 
    },
    {
        image: Dice6,
        description: 'Count and add nothing',
        value: '0', 
    },
]


export const Card = () => (
  <div className="cardContainer">
    <Header/>
    {array.map((row, index) => (
        <UpperSectionRow 
            key={index} // TO DO : remplacer par la valeur unique de l'objet : surement l'id 
            image={row.image} 
            description={row.description} 
            diceValue={row.value}  
        />
    ))}
  </div>
) 