/* eslint-disable react/prop-types */
import { IconButton, makeStyles, Typography, TextField } from "@material-ui/core";
import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { pxToVw, pxToRem } from "../theme";
import nameAction from "../../Redux/actions/nameAction";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "absolute",
	},
	paper: {
		margin: "25% auto",
		width: "50%",
		height: "25%",
	},
	mobilePaper: {
		width: "30vw",
		height: "15vh",
	},
	paperWidthSm: {
		maxWidth: pxToVw(600),
	},
	nameTitle: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		fontSize: pxToRem(26),
	},
	reportTitle: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		overflow: "hidden",
		fontSize: pxToRem(22),
		color: theme.palette.text.primary,
		fontWeight: "700",
	},

	nameField: {
		overflow: "hidden",
		fontSize: pxToRem(26),

		width: "20vw",
		fontWeight: "bold",
		color: "#ffffff",
		margin: 0,
		border: "0.1rem solid #FFFFFF",
	},
	backdrop: {
		position: "absolute",
		borderRadius: pxToRem(10),
	},
	submitBtn: {
		position: "relative",

		height: "3rem",
		width: "8rem",
		background: "#468E2F",
		color: "#FFFFFF",
		borderRadius: "3rem",
		"&:hover": {
			opacity: 1,
			backgroundColor: "#5DAB45",
		},
	},
	btnTxt: {
		fontSize: "1.4rem",
	},
}));
function Modal(props) {
	const classes = useStyles();
	const { open, onClose } = props;
	const dispatch = useDispatch();

	const viewerName = useSelector((state) => state.NameReducer.name);
	const handleChange = (name) => {
		dispatch(nameAction({ name: name.target.value }));
	};
	const handleSubmitButton = () => {
		onClose();
		window.open(
			`https://api.whatsapp.com/send?phone=918768106645&text=Hello%2C%20I'm%20${viewerName}`
		);
	};
	const handleOnCloseButton = () => {
		onClose();
	};
	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			classes={{
				root: classes.root,
			}}
		>
			<DialogTitle id="alert-dialog-title" className={classes.reportTitle} disableTypography>
				<Typography className={classes.nameTitle} variant="h5">
					What's your name?
				</Typography>
				<IconButton onClick={handleOnCloseButton}>
					<Close />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<TextField
					className={classes.nameField}
					variant="outlined"
					onChange={handleChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={handleSubmitButton}
					className={classes.submitBtn}
					classes={{ label: classes.btnTxt }}
				>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default Modal;
