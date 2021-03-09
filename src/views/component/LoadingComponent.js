import React from "react";
import "../../utils/styles/LoadingStyle.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	root: {
		height: "100vh",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));
function LoadingComponent() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className="stage">
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
				<div className="layer"></div>
			</div>
		</div>
	);
}

export default LoadingComponent;
