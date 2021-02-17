import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../common/pageTrasition';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Header from './Header';
import NonClickableCard from '../../utils/NonClickableCard';
import ProjectCard from '../../utils/ProjectCard';
import github from '../../assets/github.png';
import Footer from './Footer';
import projectBg from '../../assets/projectBg.jpg';
import { currPageAction } from '../../Redux/actions/CurrPageAction';
import { projectData } from './../../data/projectData';

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
      background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${projectBg})`,
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
    top: '1vh',
    height: '82vh',
    width: '100%',
    padding: '0.444rem',
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '0',
    },
  },

  moreProjectCard: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    border: '0.1rem solid #d0d1d5',
    borderRadius: '0.3rem',
    width: '92%',
    padding: '0.5rem',
    height: '60vh',
    backgroundColor: 'rgba(255, 255, 255, .12)',
    backdropFilter: 'blur(0.6rem)',
    overflow: 'hidden',
  },

  heightManager: {
    position: 'relative',
    height: '92vh',
    width: '100%',
  },
  mobileHeightManager: {
    position: 'relative',
    height: '86vh',
    width: '100%',
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
    fontSize: 'clamp(2.2rem, 7.1vw, 2.4rem)',
    color: '#5DAAE0',
    lineHeight: '2.5rem',
    textAlign: 'center',
  },
}));

function Project(props) {
  const classes = useStyles();
  const open = useSelector((state) => state.DrawerReducer.open);
  const dispatch = useDispatch();
  const theme = useTheme();
  const screenChange = useMediaQuery(theme.breakpoints.up('md'));
  return (
    dispatch(currPageAction({ currPage: 'Project' })),
    (
      <div
        className={clsx(
          open ? classes.drawerOpenCon : classes.drawerNotOpenCon
        )}
      >
        <div className={classes.projectBg}>
          <div
            className={clsx(
              screenChange ? classes.heightManager : classes.mobileHeightManager
            )}
          >
            <Header />
            <motion.div
              className={classes.projectContainer}
              initial='initial'
              animate='in'
              exit='out'
              variants={pageVariants}
              transition={pageTransition}
            >
              <Grid container spacing={3}>
                {projectData.map((project, key) => (
                  <Grid xs={12} sm={12} md={4} lg={4} xl={4} key={key}>
                    <ProjectCard
                      title={project.title}
                      subtitle={project.subtitle}
                      avatarImg={project.avatar}
                      bodyContent={project.content}
                      bodyImage={project.projectImg}
                      technology={project.skills}
                      link={project.link}
                    />
                  </Grid>
                ))}
                <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                  <NonClickableCard
                    classes={{ root: classes.moreProjectCard }}
                    onClick={() =>
                      window.open(
                        'https://github.com/kousiksen09?tab=repositories'
                      )
                    }
                  >
                    <img
                      src={github}
                      alt='github'
                      style={{
                        position: 'absolute',
                        display: 'flex',

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
            </motion.div>
          </div>

          <Footer
            prevPage='Education'
            nextPage='Training & Internship'
            prevLink='/education'
            nextLink='/training'
          />
        </div>
      </div>
    )
  );
}

export default Project;
