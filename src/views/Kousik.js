import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import About from './component/About';
import Education from './component/Education';
import Project from './component/Project';
import Training from './component/Training';

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
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/education' component={Education} />
            <Route path='/project' component={Project} />
            <Route path='/training' component={Training} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Kousik;
