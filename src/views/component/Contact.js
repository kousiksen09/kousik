import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../../common/pageTrasition';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import contactBg from '../../assets/contactBg.jpg';
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
      background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(${contactBg})`,
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
    boxSizing: 'border-box',
    height: '72vh',
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

  titleText: {
    fontFamily: "'Fondamento', cursive",
    fontSize: '2.4rem',
    color: '#e2dae6',
    fontWeight: '600',
  },
  contactDetails: {
    position: 'relative',
    display: 'flex',
    height: '50%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  socialMedia: {
    position: 'relative',
    display: 'flex',
    height: '50%',
    width: '100%',
    justifyContent: 'center',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    height: '18%',
    width: '70%',
    position: 'relative',
    left: '30%',
  },
  contactIcon: {
    display: 'inline-block',
    position: 'relative',
    fontSize: '2rem',
    color: '#FFFFFF',
  },
  contactTxt: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    left: '2vw',
    fontSize: '1.9rem',
    lineHeight: '2.1rem',
    color: '#FFFFFF',
  },
  ulluSocial: {
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  liicSocial: {
    listStyle: 'none',
    margin: '0 1rem',
  },
  iconSocial: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '6rem',
    height: '6rem',

    borderRadius: '50%',
    fontSize: '3rem',
    color: '#fff',
    transition: '0.5s',

    '&:hover': {
      color: '#fff',
    },
  },
  socialIconBtn: {
    position: 'relative',
    height: '3rem',
    width: '3rem',
    borderRadius: '50%',
    fontSize: '3rem',
    color: '#fff',
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
        <div style={{ height: '92vh' }}>
          <Header />
          <div className={classes.title} style={{ marginBottom: '1rem' }}>
            <Typography variant='h3' className={classes.titleText}>
              Contact Me
            </Typography>
          </div>
          <motion.div
            className={classes.contactContainer}
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
          >
            <div className={classes.contactDetails}>
              <div className={classes.contacts}>
                <PersonPinCircleIcon className={classes.contactIcon} />
                <Typography className={classes.contactTxt}>
                  Kotulpur, Bankura, West Bengal, 722154
                </Typography>
              </div>
              <div className={classes.contacts}>
                <CallIcon className={classes.contactIcon} />
                <Typography className={classes.contactTxt}>
                  +91-9382117960
                </Typography>
              </div>
              <div className={classes.contacts}>
                <EmailIcon className={classes.contactIcon} />
                <Typography className={classes.contactTxt}>
                  kousiksen09@gmail.com
                </Typography>
              </div>
              <div className={classes.contacts}>
                <WhatsAppIcon className={classes.contactIcon} />
                <Typography className={classes.contactTxt}>
                  +91-8768106645
                </Typography>
              </div>
            </div>
            <div className={classes.title} style={{ marginBottom: '2rem' }}>
              <Typography variant='h3' className={classes.titleText}>
                Follow Me
              </Typography>
            </div>
            <div className={classes.socialMedia}>
              <ul className={classes.ulluSocial}>
                <li className={classes.liicSocial}>
                  <div
                    className={classes.iconSocial}
                    style={{ backgroundColor: '#4267B2' }}
                  >
                    <Button
                      onClick={() =>
                        window.open('https://www.facebook.com/kousik.sen.09')
                      }
                    >
                      <FacebookIcon className={classes.socialIconBtn} />
                    </Button>
                  </div>
                </li>
                <li className={classes.liicSocial}>
                  <div
                    className={classes.iconSocial}
                    style={{
                      background:
                        'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                    }}
                  >
                    <Button
                      onClick={() =>
                        window.open('https://www.instagram.com/kousiksen09/')
                      }
                    >
                      <InstagramIcon className={classes.socialIconBtn} />
                    </Button>
                  </div>
                </li>
                <li className={classes.liicSocial}>
                  <div
                    className={classes.iconSocial}
                    style={{ backgroundColor: '#1DA1F2' }}
                  >
                    <TwitterIcon className={classes.socialIconBtn} />
                  </div>
                </li>
                <li className={classes.liicSocial}>
                  <div
                    className={classes.iconSocial}
                    style={{ backgroundColor: '#171515 ' }}
                  >
                    <Button
                      onClick={() =>
                        window.open('https://github.com/kousiksen09')
                      }
                    >
                      <GitHubIcon className={classes.socialIconBtn} />
                    </Button>
                  </div>
                </li>
                <li className={classes.liicSocial}>
                  <div
                    className={classes.iconSocial}
                    style={{ backgroundColor: '#2867B2' }}
                  >
                    <Button
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/in/kousik-sen-26b391187/'
                        )
                      }
                    >
                      <LinkedInIcon className={classes.socialIconBtn} />
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <Footer prevPage='Training' prevLink='/training' />
      </div>
    </div>
  );
}

export default Contact;
