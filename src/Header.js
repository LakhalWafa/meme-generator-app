import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';

//  <img src={img} alt="Problem?" />

function Header() {
  return (
    <Paper>
      <AppBar color="inherit" position="relative" className="shadow bg-danger">
        <h1 style={{ color: 'white' }}>Meme Generator</h1>
      </AppBar>
    </Paper>
  );
}

export default Header;
