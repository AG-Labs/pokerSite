import React from 'react'

const NumberPopper = props => {
    return(
        <div id = {'numPopup' + props.idAddition} className="popper numberPopper" style = {{display: 'none'}}>
            <p id = 'one' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >1</p>
            <p id = 'two' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >2</p>
            <p id = 'three' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >3</p>
            <p id = 'four' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >4</p>
            <p id = 'five' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >5</p>
            <p id = 'six' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >6</p>
            <p id = 'seven' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >7</p>
            <p id = 'eight' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >8</p>
            <p id = 'nine' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >9</p>
            <p id = 'ten' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >10</p>
            <p id = 'jack' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >J</p>
            <p id = 'queen' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >Q</p>
            <p id = 'king' className ='numPopper' onClick ={(e)=>props.numHandler(e)} >K</p>

            <div className="popper__arrow" x-arrow = 'true'></div>
        </div>
    )

}

export default NumberPopper;
