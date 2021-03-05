import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

export const pxToRem22_5 = (px) => {
  return `${px / 22.5}rem`;
};

const styles = () => ({
  parent: {},
  child: {
    paddingTop: '0.31rem',
  },
  firstChild: {},
});

const defaultProps = {
  width: 0,
  height: 0,
  rx: 0,
  ry: 0,
  circle: false,
  duration: '2s',
  opacity: '0.61',
  ring: false,
  classes: {},
  count: 1,
  strokeWidth: 0,
  fill: 'transparent',
  outerOpacity: '0.9',
  top: '0%',
  bottom: '0%',
  left: '0%',
  right: '100%',
};
const propTypes = {
  /**
   * Required width for the Icon -> Please provide one element to render one icon or a array to render multiple
   */
  width: PropTypes.any,
  /**
   * Required height for the Icon -> Please provide one element to render one icon or a array to render multiple
   */
  height: PropTypes.any,
  /**
   * Required radius in horizontal for the Icon -> Please provide one element to render one icon or a array to render multiple
   */
  /*  */
  rx: PropTypes.any,
  /**
   *  Required radius in vertical for the Icon -> Please provide one element to render one icon or a array to render multiple
   */
  ry: PropTypes.any,
  /**
   * Required bool to render a circle as the Icon -> Required only singuler value
   */
  circle: PropTypes.bool,
  /**
   * Required string to set render duration for the animation in the Icon -> Required only singuler value
   */
  duration: PropTypes.string,
  /**
   * Required stopcolors to render custom colors for the animations in the Icon -> Please provide array of two elements for a circle,ring,donut or four for a rectangle,square
   */
  stopColors: PropTypes.array,
  /**
   * Required string to render opacity for the full or inner body of the Icon -> Required only singuler value
   */
  opacity: PropTypes.string,
  /**
   * Required bool to render a ring or a donut as the Icon -> Required only singuler value
   */
  ring: PropTypes.bool,
  /**
   * Required string to render viewBox of the Icon -> Required only singuler value
   */
  viewBox: PropTypes.string,
  /**
   * Required classes for customizing the layout of the Icon
   */
  classes: PropTypes.object,
  /**
   * Required string to set the fill color for the Icon -> Required only singuler value
   */
  fill: PropTypes.string,
  /**
   * Required string to render opacity for the outer stroke of the Icon -> Required only singuler value
   */
  outerOpacity: PropTypes.string,
  /**
   * Required number to render the outer stroke of the Icon -> Required only singuler value
   */
  strokeWidth: PropTypes.number,
  /**
   * Required number to render count of Icons -> Required only singuler value
   */
  count: PropTypes.number,
  /**
   * Required string to render top of the animation, sets the top threshold for the freeze-wave, where 0% means animation starting from that direction and 100% means animation will end there -> Required only singuler value with percent
   */
  top: PropTypes.string,
  /**
   * Required string to render bottom, sets the bottom threshold for the freeze-wave, where 0% means animation starting from that direction and 100% means animation will end there -> Required only singuler value with percent
   */
  bottom: PropTypes.string,
  /**
   * Required string to render left, sets the left threshold for the freeze-wave, where 0% means animation starting from that direction and 100% means animation will end there -> Required only singuler value with percent
   */
  left: PropTypes.string,
  /**
   * Required string to render right, sets the right threshold for the freeze-wave, where 0% means animation starting from that direction and 100% means animation will end there -> Required only singuler value with percent
   */
  right: PropTypes.string,
};

const getSkeletonRectIcon = (
  width,
  height,
  rx,
  viewBoxes,
  duration,
  opacity,
  stopColor,
  strokeWidth,
  outerOpacity,
  top,
  bottom,
  left,
  right
) => {
  let viewBox = `0 0 ${width} ${height}`;
  if (viewBoxes) {
    viewBox = viewBoxes;
  }
  let stopColors = ['#000', '#62717C', '#90AAB9', '#62717C'];
  if (stopColor) {
    stopColors = stopColor;
  }
  return (
    <svg
      width={pxToRem22_5(width)}
      height={pxToRem22_5(height)}
      viewBox={viewBox}
      opacity={opacity}
    >
      <defs>
        <linearGradient id='g1' x1={left} x2={right} y2={bottom} y1={top}>
          {stopColors.map((value, index) => {
            if (index === 0) return <stop stopColor={value} stopOpacity='0' />;
            if (index === 1) return <stop stopColor={value} />;
            if (index === 2)
              return (
                <>
                  <stop offset='0' stopColor={value}>
                    <animate
                      dur={duration}
                      attributeName='offset'
                      fill='freeze'
                      from='0'
                      to='1'
                      repeatCount='indefinite'
                    />
                  </stop>
                  <stop offset='1' stopColor={value}>
                    <animate
                      dur={duration}
                      attributeName='offset'
                      fill='freeze'
                      from='1'
                      to='0'
                      repeatCount='indefinite'
                    />
                  </stop>
                </>
              );
            return <stop stopColor={value} />;
          })}
        </linearGradient>
      </defs>
      <g>
        <rect
          width='100%'
          height='100%'
          rx={rx - strokeWidth}
          ry={rx - strokeWidth}
          fill='url(#g1)'
          strokeWidth={strokeWidth}
          strokeOpacity={outerOpacity}
          stroke='url(#g1)'
          fillOpacity={opacity}
        />
      </g>
    </svg>
  );
};

const getSkeletonEllipseIcon = (
  width,
  height,
  rxs,
  rys,
  viewBoxes,
  duration,
  opacity,
  stopColor,
  ring,
  strokeWidth,
  fill,
  top,
  bottom,
  left,
  right
) => {
  let rx = rxs;
  let ry = rys;
  if (rxs === 0 && rys === 0) {
    rx = width / 2 - strokeWidth;
    ry = height / 2 - strokeWidth;
  }
  let viewBox = `0 0 ${width} ${height}`;
  if (viewBoxes) {
    viewBox = viewBoxes;
  }
  let stopColors = ['#90AAB9', '#62717C'];
  if (stopColor) {
    stopColors = stopColor;
  }
  return (
    <svg
      width={pxToRem22_5(width)}
      height={pxToRem22_5(height)}
      viewBox={viewBox}
      opacity={opacity}
    >
      <defs>
        <linearGradient
          id='left-to-right'
          x1={left}
          x2={right}
          y2={bottom}
          y1={top}
        >
          {stopColors.map((value, index) => {
            if (index === 0)
              return (
                <stop offset='0' stopColor={value}>
                  <animate
                    dur={duration}
                    attributeName='offset'
                    fill='freeze'
                    from='0'
                    to='1'
                    repeatCount='indefinite'
                  />
                </stop>
              );
            return (
              <stop offset='1' stopColor={value}>
                <animate
                  dur={duration}
                  attributeName='offset'
                  fill='freeze'
                  from='0'
                  to='1'
                  repeatCount='indefinite'
                />
              </stop>
            );
          })}
        </linearGradient>
      </defs>
      <g>
        <ellipse
          cx={width / 2}
          cy={height / 2}
          rx={rx}
          ry={ry}
          stroke='url(#left-to-right)'
          strokeWidth={strokeWidth}
          fill={ring ? fill : 'url(#left-to-right)'}
        />
      </g>
    </svg>
  );
};

const Skeleton = ({
  classes,
  width,
  height,
  circle,
  count,
  rx,
  ry,
  viewBox,
  duration,
  stopColors,
  opacity,
  ring,
  strokeWidth,
  fill,
  outerOpacity,
  top,
  bottom,
  left,
  right,
}) => {
  const rxs = Array.isArray(rx);
  const rys = Array.isArray(ry);
  const widths = Array.isArray(width);
  const heights = Array.isArray(height);
  try {
    if (count > 1) {
      if (circle || ring) {
        return (
          <div className={classes.parent}>
            {[...Array(count)].map((value, i) => {
              if (i === 0) {
                return (
                  <div className={classes.firstChild}>
                    {getSkeletonEllipseIcon(
                      widths ? width[i] : width,
                      heights ? height[i] : height,
                      rxs ? rx[i] : rx,
                      rys ? ry[i] : ry,
                      viewBox,
                      duration,
                      opacity,
                      stopColors,
                      ring,
                      strokeWidth,
                      fill,
                      top,
                      bottom,
                      left,
                      right
                    )}
                  </div>
                );
              }
              return (
                <div className={classes.child}>
                  {getSkeletonEllipseIcon(
                    widths ? width[i] : width,
                    heights ? height[i] : height,
                    rxs ? rx[i] : rx,
                    rys ? ry[i] : ry,
                    viewBox,
                    duration,
                    opacity,
                    stopColors,
                    ring,
                    strokeWidth,
                    fill,
                    top,
                    bottom,
                    left,
                    right
                  )}
                </div>
              );
            })}
          </div>
        );
      }
      return (
        <div className={classes.parent}>
          {[...Array(count)].map((value, i) => {
            if (i === 0) {
              return (
                <div className={classes.firstChild}>
                  {getSkeletonRectIcon(
                    widths ? width[i] : width,
                    heights ? height[i] : height,
                    rxs ? rx[i] : rx,
                    viewBox,
                    duration,
                    opacity,
                    stopColors,
                    strokeWidth,
                    outerOpacity,
                    top,
                    bottom,
                    left,
                    right
                  )}
                </div>
              );
            }

            return (
              <div className={classes.child}>
                {getSkeletonRectIcon(
                  widths ? width[i] : width,
                  heights ? height[i] : height,
                  rxs ? rx[i] : rx,
                  viewBox,
                  duration,
                  opacity,
                  stopColors,
                  strokeWidth,
                  outerOpacity,
                  top,
                  bottom,
                  left,
                  right
                )}
              </div>
            );
          })}
        </div>
      );
    }
    if (circle || ring) {
      return (
        <div className={classes.parent}>
          {getSkeletonEllipseIcon(
            width,
            height,
            rx,
            ry,
            viewBox,
            duration,
            opacity,
            stopColors,
            ring,
            strokeWidth,
            fill,
            top,
            bottom,
            left,
            right
          )}
        </div>
      );
    }
    return (
      <div className={classes.parent}>
        {getSkeletonRectIcon(
          width,
          height,
          rx,
          viewBox,
          duration,
          opacity,
          stopColors,
          strokeWidth,
          outerOpacity,
          top,
          bottom,
          left,
          right
        )}
      </div>
    );
  } catch (e) {
    console.log('Error in Skeleton Component->', e);
    return null;
  }
};

Skeleton.propTypes = propTypes;
Skeleton.defaultProps = defaultProps;

export default withStyles(styles)(Skeleton);
