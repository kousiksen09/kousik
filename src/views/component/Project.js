import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Header from './Header';
import NonClickableCard from '../../utils/NonClickableCard';
import iccs from '../../assets/iccs.png';
import skillcrux from '../../assets/skillcrux.png';
import kiitfest from '../../assets/kiitfest.jpg';
import automotive from '../../assets/automotive.png';
import github from '../../assets/github.png';
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
  projectBg: {
    height: '100vh',
    width: '100%',
    position: 'relative',

    '&:before': {
      content: `""`,
      background:
        'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://i.pinimg.com/originals/a8/65/28/a86528f02aecc26d016a9d6152f07c60.jpg)',
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      position: 'absolute',
      opacity: '0.75',
    },
  },
  projectContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    height: '77vh',
    width: '100%',
    padding: '0.444rem',
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
  },
  titleText: {
    fontFamily: "'Fondamento', cursive",
    fontSize: '2.4rem',
    color: '#e2dae6',
    fontWeight: '600',
  },
  projectCard: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: '59vh',
    width: '93%',
    padding: '0.5rem',
    marginBottom: '2vh',
    backgroundColor: 'rgba(255, 255, 255, .12)',
    backdropFilter: 'blur(0.6rem)',
    overflow: 'hidden',
  },
  projectHeader: {
    position: 'relative',
    height: '4vh',
    width: '100%',
    top: '-2vh',
  },
  headerTxt: {
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: '0 0 0 3.5rem',
    position: 'relative',
    width: '100%',
    fontSize: '2rem',
  },
  cardContent: {
    display: 'inline-block',
    position: 'relative',
    top: '1vh',
    width: '100%',
    height: '35vh',
  },
  projectImg: {
    position: 'relative',
    display: 'block',
    height: '100%',
    width: '100%',
  },
  cardBody: {
    display: 'inline-block',
    position: 'relative',
    top: '1.5vh',
    width: '100%',
    height: '15vh',
  },
  crdBdyTxt: {
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: '0 0 0 0.5rem',
    width: '100%',
    fontSize: '1rem',
    color: '#e2dae6',
  },
  moreProject: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  showMore: {
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '2.1rem',
    color: '#5DAAE0',
    lineHeight: '2.5rem',
  },
}));

function Project(props) {
  const classes = useStyles();
  const open = useSelector((state) => state.DrawerReducer.open);
  return (
    <div
      className={clsx(open ? classes.drawerOpenCon : classes.drawerNotOpenCon)}
    >
      <div className={classes.projectBg}>
        <Header />

        <div className={classes.title} style={{ marginBottom: '1rem' }}>
          <Typography variant='h3' className={classes.titleText}>
            My Projects
          </Typography>
        </div>
        <div className={classes.projectContainer}>
          <Grid container justify='space-evenly' spacing={3}>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <NonClickableCard
                classes={{ root: classes.projectCard }}
                onClick={() => window.open('https://ic3s.kiit.ac.in/')}
              >
                <div className={classes.projectHeader}>
                  <Typography className={classes.headerTxt}>
                    IC3S 2020
                  </Typography>
                </div>
                <div className={classes.cardContent}>
                  <img
                    src={iccs}
                    alt='ic3s.kiit.ac.in'
                    className={classes.projectImg}
                  />
                </div>
                <div className={classes.cardBody}>
                  <Typography className={classes.crdBdyTxt}>
                    Ic3s.kiit.ac.in , is an anual science conference website of
                    School Of Electronics, KIIT.
                    <br /> <b style={{ color: '#b8cc99' }}>Skills used </b>-
                    HTML, CSS, Javascript, PHP, SQL
                  </Typography>
                </div>
              </NonClickableCard>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              {' '}
              <NonClickableCard
                classes={{ root: classes.projectCard }}
                onClick={() => window.open('https://skillcrux.com/')}
              >
                <div className={classes.projectHeader}>
                  <Typography className={classes.headerTxt}>
                    SKILLCRUX
                  </Typography>
                </div>
                <div className={classes.cardContent}>
                  <img
                    src={skillcrux}
                    alt='skillcrux.com'
                    className={classes.projectImg}
                  />
                </div>
                <div className={classes.cardBody}>
                  <Typography className={classes.crdBdyTxt}>
                    skillcrux.com is a freelancer based website. Their mission
                    is to curate individual skills and build a passive income
                    stream bridging the gap between companies and individuals. I
                    design the front end of this website.
                    <br /> <b style={{ color: '#b8cc99' }}>Skills used </b>-
                    HTML, CSS, Javascript, PHP, SQL
                  </Typography>
                </div>
              </NonClickableCard>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <NonClickableCard
                classes={{ root: classes.projectCard }}
                onClick={() => window.open('https://kiitfest.org/')}
              >
                <div className={classes.projectHeader}>
                  <Typography className={classes.headerTxt}>
                    KIITFEST 6.0
                  </Typography>
                </div>
                <div className={classes.cardContent}>
                  <img
                    src={kiitfest}
                    alt='kiitfest'
                    className={classes.projectImg}
                  />
                </div>
                <div className={classes.cardBody}>
                  <Typography className={classes.crdBdyTxt}>
                    KIIT FEST is a three day Annual techno-cultural college fest
                    of KIIT University, Bhubaneswar. It is one of the largest
                    Festivals of the Eastern paradise of India. I contribute in
                    the web team of this event.
                    <br /> <b style={{ color: '#b8cc99' }}>Skills used </b>-
                    HTML, CSS, Javascript.
                  </Typography>
                </div>
              </NonClickableCard>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <NonClickableCard classes={{ root: classes.projectCard }}>
                <div className={classes.projectHeader}>
                  <Typography className={classes.headerTxt}>DETECTO</Typography>
                </div>
                <div className={classes.cardContent}>
                  <iframe
                    src='https://drive.google.com/file/d/130d2ck3lKwZDwq9RxJdHmAbZOBFw14yO/preview'
                    frameborder='0'
                    allowfullscreen=''
                    allow='autoplay'
                    title='Embedded post'
                    className={classes.projectImg}
                  />
                </div>
                <div className={classes.cardBody}>
                  <Typography className={classes.crdBdyTxt}>
                    This is a web app which can detect diseases and predict
                    medicine with accuracy of 91 percent. I connect the ML model
                    to a web application.
                    <br /> <b style={{ color: '#b8cc99' }}>Skills used </b>-
                    HTML, CSS, Javascript, PHP, SQL, Flusk.
                  </Typography>
                </div>
              </NonClickableCard>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <NonClickableCard classes={{ root: classes.projectCard }}>
                <div className={classes.projectHeader}>
                  <Typography className={classes.headerTxt}>
                    Automotive Car Model
                  </Typography>
                </div>
                <div className={classes.cardContent}>
                  <img
                    src={automotive}
                    alt='Automotive car'
                    className={classes.projectImg}
                  />
                </div>
                <div className={classes.cardBody}>
                  <Typography className={classes.crdBdyTxt}>
                    The automotive car build using opencv can detect lane,
                    obstacles, traffic signal using our powerful image
                    processing and ml algorithm.
                    <br /> <b style={{ color: '#b8cc99' }}>Skills used </b>-
                    Machine Learning, Opencv, C++, IOT, Raspberry PI
                  </Typography>
                </div>
              </NonClickableCard>
            </Grid>

            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
              <NonClickableCard
                classes={{ root: classes.projectCard }}
                onClick={() =>
                  window.open('https://github.com/kousiksen09?tab=repositories')
                }
              >
                <img
                  src={github}
                  alt='github'
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                />
                <div className={classes.moreProject}>
                  <Typography className={classes.showMore}>
                    More Projects in my Github.
                  </Typography>
                </div>
              </NonClickableCard>
            </Grid>
          </Grid>
        </div>
        <Footer
          prevPage='Education'
          nextPage='Training & Internship'
          prevLink='/education'
          nextLink='/training'
        />
      </div>
    </div>
  );
}

export default Project;
