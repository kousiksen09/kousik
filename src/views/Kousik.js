import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from './component/Header';
import About from './component/About';

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
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Kousik;
