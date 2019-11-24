import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';


const StyledContainer = withStyles({
  maxWidthXl: {
    maxWidth: 1600,
  },
})(Container);

function IBContainer(props) {
  return (
    <StyledContainer maxWidth="xl" {...props} />
  );
}

export default IBContainer;
