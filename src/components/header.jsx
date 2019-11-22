import React from 'react';

const styles = {
  height: '200px',
  backgroundColor: 'red',
  fontFamily: 'Open Sans',
};

function Header() {
  return (
    <header style={styles}>
      <h1>The spectacle before us was indeed sublime.</h1>
      <p> Some header</p>
    </header>
  );
}

export default Header;
