import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '8vh',
  },
  mobileRoot: {
    width: '100%',
    height: '9vh',
    position: 'absolute',
    top: '85vh',
  },
  footerContainer: {
    position: 'relative',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',

    // backgroundColor: 'rgba(255, 255, 255, .12)',
    // // borderTop: '0.1rem solid #e38c44',
    // backdropFilter: 'blur(0.6rem)',
  },
  nextPage: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    justifyContent: 'flex-end',

    right: '1vw',
  },
  pageRoute: {
    position: 'relative',
    display: 'flex',
    top: 0,
  },
  prevPage: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    justifyContent: 'flex-start',
    left: '1vw',
  },
  nextPageBtn: {
    height: '3rem',
    width: '100%',
    padding: '0.9rem',
    backgroundColor: '#CB218E',
    backgroundImage: 'linear-gradient(147deg, #CB218E 0%, #6617CB 74%)',
    textDecoration: 'none',
    color: '#FFFFFF',
    borderRadius: '2rem',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#a80f4a',
    },
  },
  prevPageBtn: {
    height: '3rem',
    width: '100%',
    padding: '0.9rem',
    backgroundColor: '#FE0944',
    backgroundImage: 'linear-gradient(147deg, #FE0944 0%, #FEAE96 74%)',
    textDecoration: 'none',
    color: '#FFFFFF',
    borderRadius: '2rem',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#bd4c0b',
    },
  },
  btnTxt: {
    fontSize: 'clamp(1.2rem, 3vw, 1.25rem)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '1vh',
  },
  copyrightTxt: {
    display: 'inline-block',
    position: 'relative',
    fontSize: 'clamp(1.2rem, 7vw, 1.35rem)',
    color: '#e4ecf2',
    textAlign: 'center',
    overflow: 'hidden',
  },
}));
function Footer(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const screenChange = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <div className={classes.footerContainer}>
        <div className={classes.pageRoute}>
          <div className={classes.prevPage}>
            {props.prevPage ? (
              <Link to={props.prevLink} style={{ textDecoration: 'none' }}>
                <Button
                  startIcon={
                    <ArrowBackIcon style={{ height: '2rem', width: '2rem' }} />
                  }
                  className={classes.prevPageBtn}
                  classes={{ label: classes.btnTxt }}
                >
                  {props.prevPage}
                </Button>
              </Link>
            ) : (
              ''
            )}
          </div>
          <div className={classes.copyright}>
            <Typography className={classes.copyrightTxt}>
              © Copyright 2021 Kousik Sen. All Rights Reserved
            </Typography>
          </div>

          <div className={classes.nextPage}>
            {props.nextPage ? (
              <Link to={props.nextLink} style={{ textDecoration: 'none' }}>
                <Button
                  endIcon={
                    <ArrowForwardIcon
                      style={{
                        height: '2rem',
                        width: '2rem',
                        position: 'relative',
                      }}
                    />
                  }
                  className={classes.nextPageBtn}
                  classes={{ label: classes.btnTxt }}
                >
                  {props.nextPage}
                </Button>
              </Link>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
