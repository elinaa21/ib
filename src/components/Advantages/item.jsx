import React from 'react';

const styles = {
        'margin': '0',
        'width': '260px',
        'text-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
}

function Item(props){
    return(
        <div className='item'>
            <img src={props.src} alt="icon" className='icon'/>
           <p style={styles}>{props.children}</p>
        </div>
    ) 
}

export default Item;
