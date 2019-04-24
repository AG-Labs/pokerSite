import React from 'react'

import club from '../Images/club.png';
import diamond from '../Images/diamond.png';
import heart from '../Images/heart.png';
import spade from '../Images/spade.png';

const NumberPopper = props => {
    return(
        <div id = {'numPopup'} className="popper numberPopper" style = {{display: 'none'}}>
            <p id = '1' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >1</p>
            <p id = '2' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >2</p>
            <p id = '3' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >3</p>
            <p id = '4' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >4</p>
            <p id = '5' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >5</p>
            <p id = '6' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >6</p>
            <p id = '7' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >7</p>
            <p id = '8' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >8</p>
            <p id = '9' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >9</p>
            <p id = '10' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >10</p>
            <p id = '11' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >J</p>
            <p id = '12' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >Q</p>
            <p id = '13' className ='numPopper' onClick ={(e)=>props.suitHandler(e)} >K</p>

            <div className="popper__arrow" x-arrow = 'true'></div>
        </div>
    )

}

export default NumberPopper;
