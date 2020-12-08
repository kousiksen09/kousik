import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { pxToVh } from './theme';
import { drawerAction } from './../Redux/actions/DrawerAction';
import { Button } from '@material-ui/core';

const styles = (theme) => ({
  leftBar: {
    height: '100%',
    width: 'calc(3.35% + 36px)',
    // padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#141414',
    filter: 'drop-shadow(3px 0px 6px rgba(0, 0, 0, 0.2))',
    position: 'fixed',
    [theme.breakpoints.between('sm', 'xl')]: {},
    [theme.breakpoints.up('xl')]: {},
  },
  hamBurgerIconButton: {
    height: '3.55rem',
    paddingLeft: '0px',
    paddingRight: '0px',
    color: '#fff',
    justifyContent: 'center',
    // width: '80%',
    '&:hover': {
      opacity: 1,
    },
    // [theme.breakpoints.between('sm', 'xl')]: {
    //     padding: '0px',
    //     height: '48px',
    //     width: '48px'
    // },
    // [theme.breakpoints.up('xl')]: {
    //     padding: '0px',
    //     height: '64px',
    //     width: '64px'

    // },
  },
  hamBurgerIcon: {
    [theme.breakpoints.between('sm', 'xl')]: {
      // padding : '12px'
    },
    [theme.breakpoints.up('xl')]: {
      // padding : '16px',
      // fontSize: '1rem'
    },
    color: theme.palette.common.white,
  },
  closedLogo: {
    [theme.breakpoints.between('sm', 'xl')]: {
      marginBottom: '15px',
    },
    [theme.breakpoints.up('xl')]: {
      marginBottom: '20px',
    },
  },
  actionListItemButton: {
    '&:hover': {
      opacity: 1,
      backgroundColor: '#5092C0',
    },
  },
  openDrawer: {
    backgroundColor: '#141414',
    [theme.breakpoints.between('sm', 'xl')]: {
      width: '338px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '476px',
    },
    paddingLeft: theme.spacing.unit * 2,
  },
  expandedMenuButton: {
    // height : '48px',
    color: 'white',
    // paddingRight : theme.spacing.unit * 2
  },
  menuText: {
    color: theme.palette.text.primary,
    fontSize: '32px',
    // paddingLeft: theme.spacing.unit * 2
  },
  topItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: pxToVh(50),
  },
  logoutButton: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.background.paper,
    height: '48px',
    width: '120px',
    boxShadow: 'none',
    '&:hover': {
      opacity: 1,
      backgroundColor: theme.palette.background.paper,
    },
  },
  listItemTextRoot: {
    padding: 0,
    fontSize: '1.4 rem',
    color: '#FFFFFF',
  },
  closedDivider: {
    backgroundColor: theme.palette.common.white,
    opacity: 0.5,
  },
});

const emptyFunction = () => {};
const propTypes = {
  /**
   * name in JSON format with firstName and lastName fields for filling up Avatar.
   */
  closedBar: PropTypes.object,

  /**
   * Used to render Icons or text elements inside Conatact Panel along the Avatar,
   * this can be an element, or just a string.
   */
  openDrawerContents: PropTypes.object,

  /**
   * boolean to keep the drawer open or closed the first time.
   */
  open: PropTypes.bool,

  /**
   * function to tell what happens when drawer is opened.
   */
  onOpen: PropTypes.func,

  /**
   * function to tell what happens when drawer is closed.
   */
  onClose: PropTypes.func,
  /**
   * combination of first name and last name
   */
  username: PropTypes.string.isRequired,
  /**
   * call back when clicking logout
   */
  onLogout: PropTypes.func,
  /**
   * font Size for Avatar
   */
  drawerAvatarFontSize: PropTypes.string,
  /**
   * Size for Avatar
   */
  drawerAvatarSize: PropTypes.string,
  /**
   * Width of Swipe Area
   */
  swipeAreaWidth: PropTypes.number,
};

const defaultProps = {
  closedBar: null,
  open: false,
  openDrawerContents: null,
  onClose: emptyFunction,
  onOpen: emptyFunction,
  username: 'Kousik Sen',
  onLogout: emptyFunction,
  drawerAvatarSize: '',
  drawerAvatarFontSize: '',
  swipeAreaWidth: 20,
};

export const CustomDrawer = (props) => {
  const {
    classes,

    openDrawerContents,
    swipeAreaWidth,
  } = props;

  const theme = useTheme();
  const hideNavBar = useMediaQuery(theme.breakpoints.up('md'));
  const open = useSelector((state) => state.DrawerReducer.open);
  const dispatch = useDispatch();

  const Navigator = (props) => {
    const { classes } = props;

    return (
      <>
        <div className={classes.topItems}>
          <Button
            classes={{
              root: classes.hamBurgerIconButton,
            }}
            onClick={() => {
              dispatch(drawerAction({ open: true }));
            }}
          >
            <MenuIcon className={classes.hamBurgerIcon} fontSize='large' />
          </Button>
        </div>
      </>
    );
  };
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      {!hideNavBar ? (
        <>
          <Navigator classes={classes} />
          <Drawer
            disableEnforceFocus
            BackdropProps={{ invisible: true }}
            swipeAreaWidth={swipeAreaWidth}
            transitionDuration={500}
            classes={{
              root: classes.openDrawerRoot,
              paper: classes.openDrawer,
            }}
            open={open}
            onClose={() => {
              dispatch(drawerAction({ open: false }));
            }}
            onOpen={() => {
              dispatch(drawerAction({ open: true }));
            }}
          >
            <div
              style={{
                justifyContent: 'space-between',
              }}
            >
              <div
                // onClick={this.toggleDrawer(false)}
                onKeyDown={() => dispatch(drawerAction({ open: false }))}
              >
                {openDrawerContents}
              </div>
            </div>
          </Drawer>
        </>
      ) : (
        <>
          <Navigator classes={classes} />
          <Drawer
            disableEnforceFocus
            BackdropProps={{ invisible: true }}
            swipeAreaWidth={swipeAreaWidth}
            transitionDuration={500}
            classes={{
              root: classes.openDrawerRoot,
              paper: classes.openDrawer,
            }}
            open={open}
            onClose={() => {
              dispatch(drawerAction({ open: false }));
            }}
            onOpen={() => {
              dispatch(drawerAction({ open: true }));
            }}
          >
            <div
              style={{
                justifyContent: 'space-between',
              }}
            >
              <div
                // onClick={this.toggleDrawer(false)}
                onKeyDown={() => dispatch(drawerAction({ open: false }))}
              >
                {openDrawerContents}
              </div>
            </div>
          </Drawer>
        </>
      )}
    </div>
  );
};

CustomDrawer.defaultProps = defaultProps;
CustomDrawer.propTypes = propTypes;
const DrawerNative = Drawer;
export { DrawerNative };
export default withStyles(styles, { withTheme: true })(CustomDrawer);
