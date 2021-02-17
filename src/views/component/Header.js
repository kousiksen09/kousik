import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ComputerIcon from '@material-ui/icons/Computer';
import ContactsIcon from '@material-ui/icons/Contacts';
import WebIcon from '@material-ui/icons/Web';
import prc from '../../assets/prc.jpg';
import {
  Typography,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pxToRem, pxToVh, pxToVw } from './../../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    fontFamily: 'Roboto',
    width: '100%',
  },
  headerRoot: {
    position: 'relative',
    width: '100%',
    height: pxToVh(82),
    padding: pxToRem(12),
    alignItems: 'center',
  },
  appBar: {
    width: '100%',
    height: pxToVh(90),
    lineHeight: pxToVh(60),
    // boxShadow: `rgba(60, 60, 103, 0.65) ${pxToRem(0)}  ${pxToRem(
    //   13
    // )}  ${pxToRem(27)}  ${pxToRem(-5)}, rgba(0, 0, 0, 0.3) 0rem  ${pxToRem(
    //   8
    // )}  ${pxToRem(16)}  ${pxToRem(-8)}`,
  },
  headerDesk: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  large: {
    position: 'relative',
    alignItems: 'center',
    width: pxToRem(48),
    height: pxToRem(48),
  },
  largeOn: {
    position: 'relative',
    alignItems: 'center',
    width: pxToRem(48),
    height: pxToRem(48),
    color: '#F8BBD0',
  },
  deskTab: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '30%',
    padding: pxToRem(32),
    position: 'relative',
    bottom: '0.4rem',
  },
  mobileTab: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '20%',
    position: 'relative',
    left: pxToVw(40),
    top: pxToVh(15),
    padding: pxToRem(32),
    alignItems: 'center',
  },
  headerText: {
    position: 'relative',
    alignItems: 'center',
    fontSize: pxToRem(38),
    paddingLeft: '1rem',
    // height: pxToVh(77),
    // minWidth: pxToVw(72),
    textAlign: 'center',
  },
  headerTextOn: {
    position: 'relative',
    alignItems: 'center',
    fontSize: pxToRem(38),
    paddingLeft: '1rem',
    color: '#F8BBD0',
    textAlign: 'center',
  },
  trayList: {
    position: 'relative',
    display: 'flex',
    width: '80%',
  },
}));

const desktopView = (classes, currentPage) => {
  console.log('cuur page about', currentPage === 'About Me');
  return (
    <Toolbar className={classes.headerDesk}>
      <div
        className={classes.deskTab}
        style={{ position: 'relative', top: '0.6rem', left: '1rem' }}
      >
        <Avatar alt='Kousik' src={prc} className={classes.large} />
        <Typography className={classes.headerText}>Kousik Sen</Typography>
      </div>
      <div className={classes.trayList}>
        <Link to='/'>
          <div className={classes.deskTab}>
            <AccountCircleIcon
              className={clsx(
                currentPage === 'About Me' ? classes.largeOn : classes.large
              )}
            />
            <Typography
              className={clsx(
                currentPage === 'About Me'
                  ? classes.headerTextOn
                  : classes.headerText
              )}
            >
              About
            </Typography>
          </div>
        </Link>
        <Link to='/education'>
          <div className={classes.deskTab}>
            <MenuBookIcon
              className={clsx(
                currentPage === 'Education & Skill'
                  ? classes.largeOn
                  : classes.large
              )}
            />
            <Typography
              className={clsx(
                currentPage === 'Education & Skill'
                  ? classes.headerTextOn
                  : classes.headerText
              )}
            >
              Education
            </Typography>
          </div>
        </Link>
        <Link to='/project'>
          <div className={classes.deskTab}>
            <ComputerIcon
              className={clsx(
                currentPage === 'Project' ? classes.largeOn : classes.large
              )}
            />
            <Typography
              className={clsx(
                currentPage === 'Project'
                  ? classes.headerTextOn
                  : classes.headerText
              )}
            >
              Project
            </Typography>
          </div>
        </Link>
        <Link to='/training'>
          <div className={classes.deskTab}>
            <WebIcon
              className={clsx(
                currentPage === 'Training & Internship'
                  ? classes.largeOn
                  : classes.large
              )}
            />
            <Typography
              className={clsx(
                currentPage === 'Training & Internship'
                  ? classes.headerTextOn
                  : classes.headerText
              )}
            >
              Training
            </Typography>
          </div>
        </Link>
        <Link to='/contact'>
          <div className={classes.deskTab}>
            <ContactsIcon
              className={clsx(
                currentPage === 'Contact' ? classes.largeOn : classes.large
              )}
            />
            <Typography
              className={clsx(
                currentPage === 'Contact'
                  ? classes.headerTextOn
                  : classes.headerText
              )}
            >
              Contact
            </Typography>
          </div>
        </Link>
      </div>
    </Toolbar>
  );
};

const mobileView = (classes, currentPage) => {
  return (
    <Toolbar className={classes.headerDesk}>
      <Link to='/'>
        <div className={classes.mobileTab}>
          <AccountCircleIcon
            className={clsx(
              currentPage === 'About Me' ? classes.largeOn : classes.large
            )}
          />
          <Typography
            className={clsx(
              currentPage === 'About Me'
                ? classes.headerTextOn
                : classes.headerText
            )}
          >
            About
          </Typography>
        </div>
      </Link>
      <Link to='/education'>
        <div className={classes.mobileTab}>
          <MenuBookIcon
            className={clsx(
              currentPage === 'Education & Skill'
                ? classes.largeOn
                : classes.large
            )}
          />
          <Typography
            className={clsx(
              currentPage === 'Education & Skill'
                ? classes.headerTextOn
                : classes.headerText
            )}
          >
            Education
          </Typography>
        </div>
      </Link>
      <Link to='/project'>
        <div className={classes.mobileTab}>
          <ComputerIcon
            className={clsx(
              currentPage === 'Project' ? classes.largeOn : classes.large
            )}
          />
          <Typography
            className={clsx(
              currentPage === 'Project'
                ? classes.headerTextOn
                : classes.headerText
            )}
          >
            Project
          </Typography>
        </div>
      </Link>
      <Link to='/training'>
        <div className={classes.mobileTab}>
          <WebIcon
            className={clsx(
              currentPage === 'Training & Internship'
                ? classes.largeOn
                : classes.large
            )}
          />
          <Typography
            className={clsx(
              currentPage === 'Training & Internship'
                ? classes.headerTextOn
                : classes.headerText
            )}
          >
            Training
          </Typography>
        </div>
      </Link>
      <Link to='/contact'>
        <div className={classes.mobileTab}>
          <ContactsIcon
            className={clsx(
              currentPage === 'Contact' ? classes.largeOn : classes.large
            )}
          />
          <Typography
            className={clsx(
              currentPage === 'Contact'
                ? classes.headerTextOn
                : classes.headerText
            )}
          >
            Contact
          </Typography>
        </div>
      </Link>
    </Toolbar>
  );
};

function Header() {
  const classes = useStyles();

  const currentPage = useSelector((state) => state.CurrPageReducer.currPage);
  const theme = useTheme();
  const screenChange = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <div className={classes.headerRoot}>
        <AppBar position='fixed' className={classes.appBar}>
          {screenChange
            ? desktopView(classes, currentPage)
            : mobileView(classes, currentPage)}
        </AppBar>
      </div>
    </div>
  );
}

export default Header;
