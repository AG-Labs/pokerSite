import React from 'react'

import club from '../Images/club.png';
import diamond from '../Images/diamond.png';
import heart from '../Images/heart.png';
import spade from '../Images/spade.png';

const SuitPopper = props => {

    return(
        <div id = {'popup'+props.id} className="popper" style = {{display: 'none'}}>
            <img src = {heart} id = 'heart' alt = 'heart suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {club} id = 'club' alt = 'club suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {diamond} id = 'diamond' alt = 'diamond suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <img src = {spade} id = 'spade' alt = 'spade suit' className = 'suitPopper' onClick = {(e)=>props.suitHandler(e)}></img>
            <div className="popper__arrow"></div>
        </div>
    )

}

export default SuitPopper;