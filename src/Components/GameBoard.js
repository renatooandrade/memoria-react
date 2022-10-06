import React from 'react';
import CardElement from './CardElement';



function GameBoard(props) {
    return ( 
        <div id='gameBoard'>
            {props.cards.map((card,index)=>
            <CardElement handleFlip={props.handleFlip} card={card} key={index}></CardElement>
            )}
        </div>
     );
}

export default GameBoard;