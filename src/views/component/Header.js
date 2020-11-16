import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ComputerIcon from '@material-ui/icons/Computer';
import ContactsIcon from '@material-ui/icons/Contacts';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { pxToRem, pxToVh, pxToVw } from './../../utils/theme';
import { Drawer } from '../../utils/Drawer';

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
    justifyContent: 'center',
    right: pxToVw(90),
  },
  leftBar: {
    height: '100vh',
    width: `calc(3% + ${theme.typography.pxToRem(32)})`,
    position: 'absolute',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3f5570',
    filter: 'drop-shadow(3px 0px 6px rgba(0, 0, 0, 0.2))',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: pxToVh(8),
    justifyContent: 'space-between',
    color: theme.palette?.secondary.main,
  },
  menuOptionsText: {
    color: theme.palette?.secondary.main,
    fontSize: pxToRem(38),
  },
  menutext: {
    padding: 0,
  },
  backIcon: {
    height: theme.typography.pxToRem(44),
    width: theme.typography.pxToRem(44),
    color: theme.palette?.secondary.main,
  },
  openDrawer: {
    paddingLeft: '0',
    width: '18vw',
  },
  actionListItemButton: {
    '&:hover': {
      opacity: 1,
      backgroundColor: '#3f5570',
    },
  },
  hamBurgerIcon: {
    height: theme.typography.pxToRem(48),
    width: theme.typography.pxToRem(48),
  },
  closedDivider: {
    width: '100%',
    height: `${theme.typography.pxToRem(1)}`,
  },
  menuText: {
    fontSize: theme.typography?.h3.fontSize,
  },
  closedLogo: {
    marginBottom: theme.typography.pxToRem(20),
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.5,
    marginLeft: theme.typography.pxToRem(1),
  },
  linkTxt: {
    padding: pxToRem(24),
    fontSize: '1.4rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#FFFFFF',
    '&:hover': {
      color: '#b338b5',
      transform: 'translateY(-0.2rem)',
    },
  },

  navbar__link: {
    color: '#d69c4b',
    //borderBottom: '0.1rem solid #29b6f6',
    transition: 'border-bottom .5s ease-in-out',
  },
}));
function Header() {
  const classes = useStyles();

  const sideList = (
    <div className={classes.list}>
      <Divider className={classes.divider} />
      <List style={{ padding: '0px' }}>
        <ListItem
          button
          classes={{ button: classes.actionListItemButton }}
          style={{ padding: '0.5rem 1.696rem' }}
        >
          <ListItemIcon>
            {' '}
            <AccountCircleIcon className={classes.backIcon} />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.menutext }}>
            <div className={classes.menuOptionsText}>
              <Typography variant='h4'>About Me</Typography>
            </div>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          button
          classes={{ button: classes.actionListItemButton }}
          style={{ padding: '0.5rem 1.696rem' }}
        >
          <ListItemIcon>
            {' '}
            <MenuBookIcon className={classes.backIcon} />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.menutext }}>
            <div className={classes.menuOptionsText}>
              <Typography variant='h4'>Education</Typography>
            </div>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          button
          classes={{ button: classes.actionListItemButton }}
          style={{ padding: '0.5rem 1.696rem' }}
        >
          <ListItemIcon>
            {' '}
            <ComputerIcon className={classes.backIcon} />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.menutext }}>
            <div className={classes.menuOptionsText}>
              <Typography variant='h4'>Projects </Typography>
            </div>
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem
          button
          classes={{ button: classes.actionListItemButton }}
          style={{ padding: '0.5rem 1.696rem' }}
        >
          <ListItemIcon>
            {' '}
            <ContactsIcon className={classes.backIcon} />
          </ListItemIcon>
          <ListItemText classes={{ root: classes.menutext }}>
            <div className={classes.menuOptionsText}>
              <Typography variant='h4'>Contact</Typography>
            </div>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <Drawer
        drawerAvatarSize='2.1333rem'
        swipeAreaWidth={0}
        openDrawerContents={sideList}
        drawerAvatarFontSize='0.88888rem'
        username={'KS'}
        classes={{
          openDrawer: classes.openDrawer,
          leftBar: classes.leftBar,
          hamBurgerIcon: classes.hamBurgerIcon,
          closedDivider: classes.closedDivider,
          menuText: classes.menuText,
          closedLogo: classes.closedLogo,
        }}
      />
    </div>
  );
}

export default Header;
