import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../common/pageTrasition';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import NonClickableCard from '../../utils/NonClickableCard';
import Header from './Header';
import Footer from './Footer';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { trainingData } from './../../data/trainingData';
import { currPageAction } from '../../Redux/actions/CurrPageAction';

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
  mobileHeightManager: {
    position: 'relative',
    height: '86vh',
    width: '100%',
  },
  trainingContainer: {
    position: 'relative',
    display: 'flex',
    padding: '1.6rem',
    justifyContent: 'center',
    boxSizing: 'border-box',
    height: '82vh',
    width: '100%',
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
  heightManager: {
    position: 'relative',
    height: '92vh',
    width: '100%',
  },

  titleText: {
    fontFamily: "'Fondamento', cursive",
    fontSize: 'clamp(2.4rem, 4.3vw, 2.5rem)',
    color: '#e2dae6',
    fontWeight: '600',
  },
  projectCard: {
    position: 'relative',
    display: 'flex',

    border: `0.1rem solid #d0d1d5`,
    borderRadius: '0.3rem',
    width: '92%',
    padding: '0.5rem',
    // marginBottom: '2vh',
    backdropFilter: 'blur(0.6rem)',
  },
  projectHeader: {
    display: 'flex',
    position: 'relative',
    height: '10%',
    width: '100%',
    marginBottom: '3vh',
  },
  headerTxt: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    textOverflow: 'ellipsis',
    padding: '0 0 0 1.9rem',
    width: '100%',
    fontSize: 'clamp(1.3rem, 12vw, 1.5rem)',
  },
  trainingIns: {
    display: 'inline-block',
    position: 'relative',
    justifyContent: 'flex-start',
    height: '6vh',
    width: '6vw',
  },
  cardBody: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    height: '90%',
  },
  crdBdyTxt: {
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0 0 0 0.5rem',
    width: '100%',
    fontSize: 'clamp(1.2rem, 18vw, 1.35rem)',
    color: '#e2dae6',
  },
  viewCertificate: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '2rem',
    height: '10%',
  },
  showBtn: {
    width: 'auto',
    height: '3rem',
    borderRadius: '2rem',
    backgroundColor: '#20A4F3',
    backgroundImage: 'linear-gradient(147deg, #20A4F3 0%, #182B3A 74%)',
  },
}));

function Training() {
  const classes = useStyles();
  const open = useSelector((state) => state.DrawerReducer.open);
  const dispatch = useDispatch();
  const theme = useTheme();
  const screenChange = useMediaQuery(theme.breakpoints.up('md'));

  return (
    dispatch(currPageAction({ currPage: 'Training & Internship' })),
    (
      <div
        className={clsx(
          open ? classes.drawerOpenCon : classes.drawerNotOpenCon
        )}
      >
        <div
          className={clsx(
            screenChange ? classes.heightManager : classes.mobileHeightManager
          )}
        >
          <Header />
          <motion.div
            className={classes.trainingContainer}
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
          >
            <Grid container justify='space-evenly' spacing={3}>
              {trainingData.map((data, key) => (
                <Grid
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  key={key}
                  style={{ marginBottom: '4vh' }}
                >
                  <NonClickableCard classes={{ root: classes.projectCard }}>
                    <div className={classes.projectHeader}>
                      <div className={classes.trainingIns}>
                        <img
                          src={data.traingIns}
                          alt={data.name}
                          style={{
                            height: '3rem',
                            width: '3rem',
                            borderRadius: '50%',
                          }}
                        />
                      </div>
                      <Typography className={classes.headerTxt}>
                        {data.title}
                      </Typography>
                    </div>
                    <div className={classes.cardBody}>
                      <Typography className={classes.crdBdyTxt}>
                        <span
                          style={{
                            fontSize: 'clamp(1.4rem, 18vw, 1.5rem)',
                            fontWeight: '600',
                            color: '#c29415',
                          }}
                        >
                          Skill Learn :{' '}
                        </span>{' '}
                        {data.skills}
                      </Typography>
                      <Typography className={classes.crdBdyTxt}>
                        <span
                          style={{
                            fontSize: 'clamp(1.4rem, 18vw, 1.5rem)',
                            fontWeight: '600',
                            color: '#c29415',
                          }}
                        >
                          Trainer :{' '}
                        </span>{' '}
                        {data.trainer}
                      </Typography>
                      <Typography className={classes.crdBdyTxt}>
                        <span
                          style={{
                            fontSize: 'clamp(1.4rem, 18vw, 1.5rem)',
                            fontWeight: '600',
                            color: '#c29415',
                          }}
                        >
                          Duration :{' '}
                        </span>{' '}
                        {data.duration}
                      </Typography>
                      <div className={classes.viewCertificate}>
                        <Button
                          startIcon={
                            <VisibilityIcon
                              style={{
                                height: '1.5rem',
                                width: '1.5rem',
                                position: 'relative',
                                left: '0.4rem',
                              }}
                            />
                          }
                          className={classes.showBtn}
                        >
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </NonClickableCard>
                </Grid>
              ))}

              <Grid xs={6} sm={6} md={4} lg={4} xl={4}>
                <NonClickableCard classes={{ root: classes.projectCard }}>
                  <div className={classes.projectHeader}>
                    <div className={classes.trainingIns}>
                      <img
                        src='https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5f5fbc084df8500001b65083/picture'
                        alt='hrc'
                        style={{
                          height: '3rem',
                          width: '3rem',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                    <Typography className={classes.headerTxt}>
                      Internship at Highradius
                    </Typography>
                  </div>
                  <div className={classes.cardBody}>
                    <Typography className={classes.crdBdyTxt}>
                      <span
                        style={{
                          fontSize: 'clamp(1.4rem, 18vw, 1.5rem)',
                          fontWeight: '600',
                          color: '#c29415',
                        }}
                      >
                        Role :
                      </span>{' '}
                      Autonomous UI Developer
                    </Typography>
                    <Typography className={classes.crdBdyTxt}>
                      <span
                        style={{
                          fontSize: 'clamp(1.4rem, 18vw, 1.5rem)',
                          fontWeight: '600',
                          color: '#c29415',
                        }}
                      >
                        Technology used :
                      </span>{' '}
                      React Js, Redux, Saga, Asterisk
                    </Typography>
                    <Typography className={classes.crdBdyTxt}>
                      <span
                        style={{
                          fontSize: 'clamp(1.4rem, 18vw, 1.5rem)',
                          fontWeight: '600',
                          color: '#c29415',
                        }}
                      >
                        Duration :{' '}
                      </span>{' '}
                      1 st June, 2020 - Present
                    </Typography>
                    <div className={classes.viewCertificate}>
                      <Button
                        startIcon={
                          <VisibilityIcon
                            style={{
                              height: '1.5rem',
                              width: '1.5rem',
                              position: 'relative',
                              left: '0.4rem',
                            }}
                          />
                        }
                        className={classes.showBtn}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </NonClickableCard>
              </Grid>
            </Grid>
          </motion.div>
        </div>
        <Footer
          prevPage='Project'
          nextPage='Contact'
          prevLink='/project'
          nextLink='/contact'
        />
      </div>
    )
  );
}

export default Training;
