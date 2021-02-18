import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../common/pageTrasition';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { currPageAction } from '../../Redux/actions/CurrPageAction';
import { Typography, Grid } from '@material-ui/core';
import Header from './Header';
import Timeline from '../../utils/Timeline';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NonClickableCard from '../../utils/NonClickableCard';
import MyHistogram from '../../utils/component/Histogram';
import Footer from './Footer';
import { pxToRem } from '../../utils/theme';
import aboutBg from '../../assets/aboutBg.png';

const xAxisLabelStyles = {
  color: 'white',
  fontSize: 'clamp(0.83rem, 2vw, 1rem)',
  fontFamily: 'Roboto',
  opacity: 0.6,
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
    '&:before': {
      content: `""`,
      background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${aboutBg})`,
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      position: 'absolute',
      opacity: '0.75',
    },
  },
  drawerOpenCon: {
    width: '82vw',
    left: '17vw',
    height: '100%',
    position: 'absolute',
  },
  drawerNotOpenCon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  education: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    height: '84vh',
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0',
    },
  },
  heightManager: {
    position: 'relative',
    height: '92vh',
    width: '100%',
  },

  eduIcon: {
    width: '2.6rem',
    height: '2.6rem',
    border: '0.2rem solid #db630d',
    borderRadius: '50%',
    padding: '0.6rem',
    color: '#FFFFFF',
  },
  connect: {
    marginLeft: '2rem',
    marginTop: '1rem',
  },
  coonectRoot: {
    marginLeft: '1rem',
  },
  flex: {
    height: '100%',
    width: '100%',
    marginLeft: '0.80vw !important',
    display: 'flex',
  },
  eduTimeline: {
    position: 'relative',

    justifyContent: 'center',
    margin: '1rem 1rem 0 2rem ',
  },
  eduDetails: {
    position: 'relative',
    height: '80vh',
    width: '95%',
    marginRight: '1rem',
    borderRadius: '0.4rem',
    left: '1vw',
  },
  contentArea: {
    position: 'relative',
    paddingTop: '0px !important',

    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0',
    },
  },
  eduLabel: {
    fontSize: 'clamp(1.8rem, 6vw, 2rem)',
    color: '#e2dae6',
    fontWeight: '600',
    fontFamily: " 'Yeon Sung', cursive",
  },
  eduBody: {
    position: 'relative',
    left: '1vw',
    width: '96%',
    paddingBottom: '0.5rem',

    paddingTop: '0px',
    paddingInlineStart: '2vw',
    marginBlockStart: '0vh',
    marginBlockEnd: '0vh',
  },
  eduBodytxt: {
    opacity: 0.9,
    color: '#f5f4f2',
    fontFamily: 'Roboto',
    fontSize: pxToRem(24),
    fontWeight: 500,
    textAlign: 'justify',
    lineHeight: pxToRem(48),
  },
  verticalDivider: {
    position: 'relative',
    left: '1%',
    top: '10vh',
    bottom: 0,
    right: '1%',
    borderLeft: '0.2rem dotted #375970',
  },
  mobileHeightManager: {
    position: 'relative',
    height: '92vh',
    width: '100%',
  },
  skillsArea: {
    position: 'relative',
    height: '80vh',
    width: '95%',
    marginRight: '1rem',
    borderRadius: '0.4rem',

    boxShadow: 'none',
  },

  mobileHeight: {
    position: 'relative',
    height: '40vh',
    width: '99%',

    boxShadow: 'none',
  },
}));

function Education(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const screenChange = useMediaQuery(theme.breakpoints.up('md'));

  const [animation, setanimation] = React.useState(true);
  const [size, setsize] = useState(window.innerWidth / 65.6);
  const [xPadding, setxPadding] = useState(window.innerHeight / 54);
  const [chartMargin, setChartMargin] = useState([
    window.innerHeight / 12,
    0,
    window.innerHeight / 54,
    0,
  ]);
  const resize = () => {
    setsize(window.innerWidth / 25.6);
    setxPadding(window.innerHeight / 54);
    setChartMargin([window.innerHeight / 12, 0, window.innerHeight / 54, 0]);
  };

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  const [animFlag, setanimFlag] = React.useState(true);
  const setanimationfunction = (open, setanimation, setanimFlag, animFlag) => {
    if (open && animFlag) {
      setanimation(false);
      setanimFlag(false);
    }
  };

  setanimationfunction(setanimation, setanimFlag, animFlag);

  return (
    dispatch(currPageAction({ currPage: 'Education & Skill' })),
    (
      <div className={classes.root}>
        <div
          className={clsx(
            screenChange ? classes.heightManager : classes.mobileHeightManager
          )}
        >
          <Header />
          <motion.div
            className={classes.education}
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div
                  className={clsx(
                    screenChange ? classes.eduDetails : classes.mobileHeight
                  )}
                >
                  <NonClickableCard classes={{ root: classes.contentArea }}>
                    {/* <div
                      className={classes.title}
                      style={{ marginTop: '1rem', marginBottom: '1rem' }}
                    >
                      <Typography variant='h3' className={classes.titleText}>
                        Education
                      </Typography>
                    </div> */}
                    <div className={classes.eduTimeline}>
                      <Timeline
                        classes={{
                          connectorLine: classes.connect,
                          connectorLineRoot: classes.coonectRoot,
                        }}
                        labelIcon={<MenuBookIcon className={classes.eduIcon} />}
                        label={
                          <div className={classes.flex}>
                            <Typography className={classes.eduLabel}>
                              B.Tech in Elelctronics and Communication
                            </Typography>
                          </div>
                        }
                        body={
                          <div className={classes.eduBody}>
                            <Typography className={classes.eduBodytxt}>
                              Kalinga Institute of Industrial Technology, Deemed
                              to be University. <br /> Bhubneswar, Patia,
                              Odisha, 751024 <br /> (2017 - Present)
                            </Typography>
                          </div>
                        }
                      />
                    </div>

                    <div className={classes.eduTimeline}>
                      <Timeline
                        classes={{
                          connectorLine: classes.connect,
                          connectorLineRoot: classes.coonectRoot,
                        }}
                        labelIcon={<MenuBookIcon className={classes.eduIcon} />}
                        label={
                          <div className={classes.flex}>
                            <Typography className={classes.eduLabel}>
                              Higher Secondary Education
                            </Typography>
                          </div>
                        }
                        body={
                          <div className={classes.eduBody}>
                            <Typography className={classes.eduBodytxt}>
                              Kotulpur High School. <br /> Kotulpur, Bankura,
                              West Bengal, 722141. <br /> (2014-2016)
                            </Typography>
                          </div>
                        }
                      />
                    </div>

                    <div className={classes.eduTimeline}>
                      <Timeline
                        classes={{
                          connectorLine: classes.connect,
                          connectorLineRoot: classes.coonectRoot,
                        }}
                        labelIcon={<MenuBookIcon className={classes.eduIcon} />}
                        label={
                          <div className={classes.flex}>
                            <Typography className={classes.eduLabel}>
                              Secondary Education
                            </Typography>
                          </div>
                        }
                        body={
                          <div className={classes.eduBody}>
                            <Typography className={classes.eduBodytxt}>
                              Ramakrishna Mission Boys' Home. <br /> Rahara,
                              Khardaha, West Bengal 700118 <br /> (2007-2014)
                            </Typography>
                          </div>
                        }
                      />
                    </div>
                  </NonClickableCard>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div
                  className={clsx(
                    screenChange ? classes.skillsArea : classes.mobileHeight
                  )}
                >
                  <NonClickableCard>
                    <MyHistogram
                      xAxisLabelStyles={xAxisLabelStyles}
                      xPadding={xPadding}
                      chartMargin={chartMargin}
                      animation={animation}
                      pointWidth={size}
                      chartHeight='78vh'
                    />
                  </NonClickableCard>
                </div>
              </Grid>
            </Grid>
          </motion.div>
          <Footer
            prevPage='About Me'
            nextPage='Project'
            prevLink='/'
            nextLink='/project'
          />
        </div>
      </div>
    )
  );
}

export default Education;
