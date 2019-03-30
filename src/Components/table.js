import React, { Component } from 'react';
import cardBack from '../Images/cardBack.png';
import '../Styles/table.css'

const pokerTable = props => (

    <div className="Table">
            <div className='tableCards'><img src={cardBack} alt="emptyCard" className='tableCard'></img></div>
            <div className='tableCards'><img src={cardBack} alt="emptyCard" className='tableCard'></img></div>
            <div className='tableCards'><img src={cardBack} alt="emptyCard" className='tableCard'></img></div>
            <div className='tableCards'><img src={cardBack} alt="emptyCard" className='tableCard'></img></div>
            <div className='tableCards'><img src={cardBack} alt="emptyCard" className='tableCard'></img></div>
        </div>
)

export default pokerTable;