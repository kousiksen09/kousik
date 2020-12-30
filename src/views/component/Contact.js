import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  drawerOpenCon: {
    width: '82vw',
    left: '17vw',
    height: '100vh',
    position: 'absolute',
  },
  drawerNotOpenCon: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  },
  conatctBg: {
    height: '100vh',
    width: '100%',
    position: 'relative',

    '&:before': {
      content: `""`,
      background:
        'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(https://image.freepik.com/free-vector/gradient-background-with-different-shapes_23-2148800691.jpg)',
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      position: 'absolute',
      opacity: '0.8',
    },
  },
  contactContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    height: '74vh',
    width: '98%',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0',
    },
  },

  title: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',

    '&:after': {
      position: 'absolute',
      width: '5%',
      bottom: '0%',
      border: '0.1rem solid #229db3',
    },
  },

  titleText: {
    fontFamily: "'Fondamento', cursive",
    fontSize: '2.4rem',
    color: '#e2dae6',
    fontWeight: '600',
  },
}));

function Contact() {
  const classes = useStyles();
  const open = useSelector((state) => state.DrawerReducer.open);

  return (
    <div
      className={clsx(open ? classes.drawerOpenCon : classes.drawerNotOpenCon)}
    >
      <div className={classes.conatctBg}>
        <Header />
        <div className={classes.title} style={{ marginBottom: '1rem' }}>
          <Typography variant='h3' className={classes.titleText}>
            Contact Me
          </Typography>
        </div>
        <div className={classes.contactContainer}></div>

        <Footer prevPage='Training' prevLink='/training' />
      </div>
    </div>
  );
}

export default Contact;
