import React from 'react';
import PropTypes from 'prop-types';
import { Step, StepLabel, StepContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  iconContainer: {
    paddingRight: '0',
  },
  labelContainer: {
    marginLeft: '.80vw !important',
  },
  connectorLine: {
    position: 'relative',
    top: '-1rem',
    borderLeft: 'solid 0.2rem #FFFFFF',
  },
  noBorder: {
    border: '0px !important',
  },
  stepLabelRoot: {
    alignItems: 'flex-start',
  },
});

const propTypes = {
  /**
   * A React element as the body of Timeline Event
   */
  body: PropTypes.element,
  /**
   * A React element as label of the Timeline Event
   */
  label: PropTypes.element,
  /**
   * A React element as LabelIcon of the Timeline Event
   */
  labelIcon: PropTypes.element,
  /**
   * If true, custom style will be applied for the last element
   */
  last: PropTypes.bool,
};

const defaultProps = {
  body: null,
  label: null,
  labelIcon: null,
  last: false,
};

export const Timeline = (props) => {
  const { classes, labelIcon, label, last, body } = props;

  return (
    <Step>
      <StepLabel
        icon={labelIcon}
        classes={{
          root: classes.stepLabelRoot,
          iconContainer: classes.iconContainer,
          labelContainer: classes.labelContainer,
        }}
      >
        {label}
      </StepLabel>
      <StepContent
        classes={{
          root: `${classes.connectorLine} ${last ? classes.noBorder : ''}`,
        }}
        active
        icon={null}
      >
        {body}
      </StepContent>
    </Step>
  );
};

Timeline.propTypes = propTypes;
Timeline.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Timeline);
