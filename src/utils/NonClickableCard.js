import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import combineStyles from "./styles/combineStyles";
import Card from "./HRCard";
import { baseStyle } from "./styles/baseStyle";

const styles = (theme) => ({
	root: {
		boxShadow: theme.shadows[0],
		cursor: "pointer",
	},
});

const defaultProps = {};

const propTypes = {
	/** Styles of card. Must be a class */
	customCard: PropTypes.string,
};

// Card component with one Title and non clickable
class NonClickableCard extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return <Card rootStyle={classes.root} {...rest} />;
	}
}

NonClickableCard.propTypes = propTypes;
NonClickableCard.defaultProps = defaultProps;

export { NonClickableCard };
const combinedStyle = combineStyles(styles, baseStyle);
export default withStyles(combinedStyle, { withTheme: true })(NonClickableCard);
