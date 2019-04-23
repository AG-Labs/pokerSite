import React from 'react'

import club from '../Images/club.png';
import diamond from '../Images/diamond.png';
import heart from '../Images/heart.png';
import spade from '../Images/spade.png';

const SuitPopper = props => {
    console.log(props)
    return(
        <div id = {'popup'} className="popper" style = {{display: 'none'}}>
            <img src = {heart} id = 'heart' alt = 'heart suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {club} id = 'club' alt = 'club suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {diamond} id = 'diamond' alt = 'diamond suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {spade} id = 'spade' alt = 'spade suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <div className="popper__arrow" x-arrow = 'true'></div>
        </div>
    )

}

export default SuitPopper;
