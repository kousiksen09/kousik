import Card from '@material-ui/core/Card';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { baseStyle } from './styles/baseStyle';
import combineStyles from './styles/combineStyles';

const styles = (theme) => ({
  root: {
    backgroundColor: '#151b21',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '0',
  },

  cardContent: {
    padding: 0,
  },
});

const defaultProps = {};

const propTypes = {
  //styles to the card
  rootStyle: PropTypes.object,
};

// Card component with one Title
const HRCard = (props) => {
  const { classes, ...rest } = props;
  return (
    <Card
      className={clsx(props.customCard, props.rootStyle, classes.root)}
      {...rest}
    >
      {props.children}
    </Card>
  );
};

HRCard.propTypes = propTypes;
HRCard.defaultProps = defaultProps;

const combinedStyle = combineStyles(styles, baseStyle);

export default withStyles(combinedStyle, { withTheme: true })(HRCard);
