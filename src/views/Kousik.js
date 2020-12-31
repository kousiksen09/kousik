import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AnimatePresence } from 'framer-motion';
import About from './component/About';
import Education from './component/Education';
import Project from './component/Project';
import Training from './component/Training';
import Contact from './component/Contact';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
}));
function Kousik() {
  const classes = useStyles();
  return (
    <div className={classes.appFrame}>
      <div className={classes.root}>
        <BrowserRouter>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/education' component={Education} />
              <Route path='/project' component={Project} />
              <Route path='/training' component={Training} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Kousik;
