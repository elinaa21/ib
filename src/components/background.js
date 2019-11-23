import React from 'react';
import  './style.css';




function Background (props) {
    return (
            <div className='adv'>
                <div className= 'col'>  
                        {props.children}
                </div>
            </div>
    )
}

export default Background;