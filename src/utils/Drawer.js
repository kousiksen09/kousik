import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ComputerIcon from '@material-ui/icons/Computer';
import ContactsIcon from '@material-ui/icons/Contacts';
import Divider from '@material-ui/core/Divider';
import Avatar from './Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { pxToVh } from './theme';
import { Tooltip } from '@material-ui/core';
import { drawerAction } from './../Redux/actions/DrawerAction';

const styles = (theme) => ({
  leftBar: {
    height: '100%',
    width: 'calc(3.35% + 36px)',
    // padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
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
    backgroundColor: '#2d3547',
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
  },
  closedDivider: {
    backgroundColor: theme.palette.common.white,
    opacity: 0.5,
  },
});

const LeftClosedBar = (props) => (
  <div className={props.classes.leftBar}>{props.children}</div>
);

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

export const Drawer = (props) => {
  const {
    classes,

    openDrawerContents,

    username,
    drawerAvatarSize,
    drawerAvatarFontSize,
    swipeAreaWidth,
  } = props;

  const theme = useTheme();
  const hideNavBar = useMediaQuery(theme.breakpoints.up('lg'));
  const open = useSelector((state) => state.DrawerReducer.open);
  const dispatch = useDispatch();
  const Navigator = (props) => {
    const { classes } = props;
    return (
      <LeftClosedBar classes={classes}>
        <div className={classes.topItems}>
          <ListItem
            button
            aria-label='Open drawer'
            classes={{
              root: classes.hamBurgerIconButton,
            }}
            onClick={() => {
              dispatch(drawerAction({ open: true }));
            }}
            disableRipple={true}
            disableTouchRipple={true}
          >
            <MenuIcon className={classes.hamBurgerIcon} fontSize='large' />
          </ListItem>
          <Divider className={classes.closedDivider} />
          <ListItem
            button
            classes={{
              root: classes.hamBurgerIconButton,
            }}
            onClick={() => {
              dispatch(drawerAction({ open: true }));
            }}
            disableRipple={true}
            disableTouchRipple={true}
          >
            <Tooltip title='About Me'>
              <AccountCircleIcon
                className={classes.hamBurgerIcon}
                fontSize='large'
              />
            </Tooltip>
          </ListItem>
          <Divider className={classes.closedDivider} />
          <ListItem
            button
            classes={{
              root: classes.hamBurgerIconButton,
            }}
            onClick={() => {
              dispatch(drawerAction({ open: true }));
            }}
            disableRipple={true}
            disableTouchRipple={true}
          >
            <Tooltip title='Education'>
              <MenuBookIcon
                className={classes.hamBurgerIcon}
                fontSize='large'
              />
            </Tooltip>
          </ListItem>
          <Divider className={classes.closedDivider} />
          <ListItem
            button
            classes={{
              root: classes.hamBurgerIconButton,
            }}
            onClick={() => {
              //drawerOpen({ open: true });
            }}
            disableRipple={true}
            disableTouchRipple={true}
          >
            <Tooltip title='Project'>
              <ComputerIcon
                className={classes.hamBurgerIcon}
                fontSize='large'
              />
            </Tooltip>
          </ListItem>
          <Divider className={classes.closedDivider} />
          <ListItem
            button
            classes={{
              root: classes.hamBurgerIconButton,
            }}
            onClick={() => {
              //drawerOpen({ open: true });
            }}
            disableRipple={true}
            disableTouchRipple={true}
          >
            <Tooltip title='Contact'>
              <ContactsIcon
                className={classes.hamBurgerIcon}
                fontSize='large'
              />
            </Tooltip>
          </ListItem>
        </div>
        <div className={classes.closedLogo}>
          <Avatar
            fontColor='#5daae0'
            color='white'
            size={drawerAvatarSize}
            fontSize={drawerAvatarFontSize}
          >
            {username}
          </Avatar>
        </div>
      </LeftClosedBar>
    );
  };

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      {!hideNavBar ? (
        <Navigator classes={classes} />
      ) : (
        <>
          <Navigator classes={classes} />
          <SwipeableDrawer
            disableEnforceFocus
            BackdropProps={{ invisible: true }}
            swipeAreaWidth={swipeAreaWidth}
            transitionDuration={500}
            classes={{
              root: classes.openDrawerRoot,
              paper: classes.openDrawer,
            }}
            open={open}
            // onClose={() => {
            //   toggleDrawer(false);
            // }}
            // onOpen={() => {
            //   toggleDrawer(true);
            // }}
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
                <List
                  style={{
                    paddingBottom: '0px',
                    paddingTop: '0px',
                    height: '3.5556rem',
                  }}
                >
                  <ListItem
                    button
                    style={{
                      paddingLeft: '1.696rem',
                      height: '100%',
                    }}
                    onClick={() => {
                      dispatch(drawerAction({ open: false }));
                    }}
                    classes={{ button: classes.actionListItemButton }}
                  >
                    <ListItemIcon>
                      <MenuIcon className={classes.hamBurgerIcon} />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        root: classes.listItemTextRoot,
                      }}
                    ></ListItemText>
                  </ListItem>
                </List>
                {openDrawerContents}
              </div>
            </div>
          </SwipeableDrawer>
        </>
      )}
    </div>
  );
};

Drawer.defaultProps = defaultProps;
Drawer.propTypes = propTypes;
const DrawerNative = Drawer;
export { DrawerNative };
export default withStyles(styles, { withTheme: true })(Drawer);
