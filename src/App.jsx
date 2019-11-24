import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import Main from './pages/main';
import './style.css';


const StyledButton = withStyles({
  maxWidthXl: {
    maxWidth: 1600,
  },
})(Container);

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Main} className="pageContainer" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
