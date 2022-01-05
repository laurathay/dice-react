import React from 'react';
import './rules.css';

export const Rules = () => (
    <div className="rules">
            <h1 className="titlerules"> Standard Farkle rules :</h1><br/><br/>
            <p className="subhead"> 
            #  5 dices with 6 faces <br/>
            #  1 and 5 are scoring <br/>
            # 1 is scoring 100 pts<br/>
            #  5 is scoring 50 pts<br/>
            # others don't scores</p><br/><br/>
            <h2 className="titlerules2"> Bonus for 3 dices with the same value</h2>
            <p className="subhead">
            #   3 ace is scoring 1000 pts<br/>
            #   3 time the same dice value is scoring 100 pts signal the dice value<br/>
            </p>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <div class="player">
                <div class="playerButton">
                    <i class="fas fa-play"></i>
                </div>  
                </div>
    </div>
)