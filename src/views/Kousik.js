import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './component/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${theme.typography.pxToRem(10)}`,
    fontFamily: 'Roboto',
    width: '100%',
  },
}));
function Kousik() {
  const classes = useStyles();
  return (
    <div className={classes.appFrame}>
      <div className={classes.root}>
        <Header />
      </div>
    </div>
  );
}

export default Kousik;
