import {useState, useEffect} from 'react';

const Card = (props) => {
    return (
        <div className={`card ${props.card}`}><h3>{props.card}</h3>
        <span>{String.fromCharCode(parseInt(props.suit))}</span>
        <h3 className="rev">{props.card}</h3></div>
    );
}

export default Card;