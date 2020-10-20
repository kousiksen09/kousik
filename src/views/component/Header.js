import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { pxToRem, pxToVw } from './../../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    padding: `0 ${theme.typography.pxToRem(10)}`,
    fontFamily: 'Roboto',
    width: '100%',
    height: '15vh',
  },
  logoImg: {
    position: 'relative',
    height: '15vh',
    width: '12vw',
  },
  rightSection: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    justifyContent: 'flex-end',
    right: pxToVw(90),
  },
  linkTxt: {
    padding: pxToRem(24),
    fontSize: '1.4rem',
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <img
            className={classes.logoImg}
            src={require('../../assets/logo.png')}
            alt='logo'
          />
          <div className={classes.rightSection}>
            <Typography className={classes.linkTxt}>About</Typography>
            <Typography className={classes.linkTxt}>Education</Typography>
            <Typography className={classes.linkTxt}>Project</Typography>
            <Typography className={classes.linkTxt}>Contact</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
