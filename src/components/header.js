import React from 'react';

const styles = {
    'height': '200px',
    "backgroundColor": "red"
}

function Header (props) {
    return (
        <header style={styles}>
            <h1>Some header</h1>
        </header>
    )
}

export default Header;
