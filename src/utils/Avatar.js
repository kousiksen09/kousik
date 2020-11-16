/**
 * @author Mayank Khandelwal  <mayank.k@highradius.com>
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar as MuiAvatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const styles = (theme) => ({
  avatar: {
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    fontSize: '1rem',
  },
});

const defaultProps = {
  component: 'Avatar',
  color: 'primary',
  isSingle: false,
  size: '',
  fontFamily: 'Roboto',
  fontColor: '',
  fontSize: '',
};

const propTypes = {
  /**
   * Image url that will be rendered on Avatar
   */
  src: PropTypes.string,

  /**
   * Alternative text to be rendered, if image is not able to render
   */
  alt: PropTypes.string,

  /**
   * Used to render Icons or text elements inside Avatar,
   * this can be an element, or just a string
   */
  children: PropTypes.node,

  /**
   * color of avatar, accepts primary secondary and white colors
   */
  color: PropTypes.string,

  /**
   * size of the avatar to be rendered on screen
   */
  size: PropTypes.string,

  /**
   * Font style of the avatar
   */
  fontFamily: PropTypes.string,

  /**
   * Font size of the avatar
   */
  fontSize: PropTypes.string,

  /**
   * Font color of the avatar
   */
  fontColor: PropTypes.string,

  /**
   * Used for single char avatar, the values can be either true/false
   */
  isSingle: PropTypes.bool,
};

const getClassName = (color, classes, className) => {
  switch (color) {
    case 'primary':
      return clsx(className, classes.root, classes.primaryAvatar);
    case 'secondary':
      return clsx(className, classes.root, classes.secondaryAvatar);
    case 'white':
      return clsx(className, classes.root, classes.whiteAvatar);
    case 'dark':
      return clsx(className, classes.root, classes.darkAvatar);
    default:
      return clsx(className, classes.root);
  }
};

const Avatar = (props) => {
  const {
    src,
    alt,
    classes,
    children,
    color,
    className,
    size,
    fontFamily,
    fontColor,
    fontSize,
    isSingle,
    ...rest
  } = props;

  const avatarClassName = getClassName(color, classes, className);

  return (
    <MuiAvatar
      // {...props}
      src={src === '' ? alt : src}
      alt={alt}
      className={avatarClassName}
      isSingle={isSingle}
      style={{
        height: size,
        width: size,
        fontFamily: fontFamily,
        color: fontColor,
        fontSize: fontSize,
        lineHeight: size,
      }}
      {...rest}
    />
  );
};

Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;

const AvatarNative = Avatar;
export { AvatarNative };

export default withStyles(styles, { withTheme: true })(Avatar);
