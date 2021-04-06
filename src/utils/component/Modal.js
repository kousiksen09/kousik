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
	paper: {
		// margin: "25% auto",
		width: "50%",
		height: "25%",
	},
	paperWidthSm: {
		maxWidth: pxToVw(600),
	},
	dialogTitle: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	reportTitle: {
		overflow: "hidden",
		fontSize: pxToRem(22),
		color: theme.palette.text.primary,
		fontWeight: "700",
	},

	nameField: {
		overflow: "hidden",
		fontSize: pxToRem(20),
		height: "5vh",
		width: "70%",
		border: "0.1rem solid #FFFFFF",
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
			classes={{ paper: classes.paper, paperWidthSm: classes.paperWidthSm }}
		>
			<DialogTitle id="alert-dialog-title" className={classes.dialogTitle} disableTypography>
				<Typography variant="h5">What's your name?</Typography>
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
