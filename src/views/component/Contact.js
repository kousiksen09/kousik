import React, { useState, useEffect } from "react";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../common/pageTrasition";
import { useDispatch } from "react-redux";
import { currPageAction } from "../../Redux/actions/CurrPageAction";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import contactBg from "../../assets/contactBg.jpg";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "../../utils/component/Modal";

const useStyles = makeStyles((theme) => ({
	drawerOpenCon: {
		width: "82vw",
		left: "17vw",
		height: "100vh",
		position: "absolute",
	},
	drawerNotOpenCon: {
		width: "100vw",
		height: "100vh",
		position: "absolute",
	},
	mobileHeightManager: {
		position: "relative",
		height: "86vh",
		width: "100%",
	},
	conatctBg: {
		height: "100vh",
		width: "100%",
		position: "relative",

		"&:before": {
			content: `""`,
			background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(${contactBg})`,
			height: "100%",
			width: "100%",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			backgroundAttachment: "fixed",
			position: "absolute",
			opacity: "0.8",
		},
	},
	contactContainer: {
		position: "relative",
		boxSizing: "border-box",
		height: "72vh",
		width: "100%",
		overflowX: "hidden",
		overflowY: "auto",
		"&::-webkit-scrollbar": {
			width: "0",
		},
	},

	heightManager: {
		position: "relative",
		height: "92vh",
		width: "100%",
	},

	title: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		textAlign: "center",

		"&:after": {
			position: "absolute",
			width: "5%",
			bottom: "0%",
			border: "0.1rem solid #229db3",
		},
	},

	titleText: {
		fontFamily: "'Fondamento', cursive",
		fontSize: "2.4rem",
		color: "#e2dae6",
		fontWeight: "600",
	},
	contactDetails: {
		position: "relative",
		display: "flex",
		height: "50%",
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
	},
	socialMedia: {
		position: "relative",
		display: "flex",
		height: "50%",
		width: "100%",
		justifyContent: "center",
	},
	contacts: {
		display: "flex",
		flexDirection: "row",
		height: "18%",
		width: "70%",
		position: "relative",
		left: "30%",
	},
	contactIcon: {
		display: "inline-block",
		position: "relative",
		fontSize: "2rem",
		color: "#FFFFFF",
	},
	contactTxt: {
		display: "inline-block",
		position: "relative",
		overflow: "hidden",
		left: "2vw",
		fontSize: "1.9rem",
		lineHeight: "2.1rem",
		color: "#FFFFFF",
	},
	ulluSocial: {
		margin: 0,
		padding: 0,
		display: "flex",
	},
	liicSocial: {
		listStyle: "none",
		margin: "0 1rem",
	},
	iconSocial: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "5rem",
		height: "5rem",

		borderRadius: "50%",
		fontSize: "2.5rem",
		color: "#fff",
		transition: "0.5s",

		"&:hover": {
			color: "#fff",
		},
	},
	socialIconBtn: {
		position: "relative",
		height: "2.5rem",
		width: "2.5rem",
		borderRadius: "50%",
		fontSize: "3rem",
		color: "#fff",
	},
	nameModal: {
		position: "relative",
		top: "50%",
		left: "50%",
	},
}));

function Contact() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const theme = useTheme();
	const screenChange = useMediaQuery(theme.breakpoints.up("md"));
	const [isModalOpen, setModalState] = useState(false);

	const handleOpen = () => {
		setModalState(true);
	};
	const onModalClose = () => {
		setModalState(false);
	};
	useEffect(() => {
		dispatch(currPageAction({ currPage: "Contact" }));
	}, [dispatch]);
	return (
		<div className={classes.conatctBg}>
			<div
				className={clsx(screenChange ? classes.heightManager : classes.mobileHeightManager)}
			>
				<Header />
				<div className={classes.title} style={{ marginBottom: "1rem" }}>
					<Typography variant="h3" className={classes.titleText}>
						Contact Me
					</Typography>
				</div>
				<motion.div
					className={classes.contactContainer}
					initial="initial"
					animate="in"
					exit="out"
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
							<a href="tel:+919382117960">
								<CallIcon className={classes.contactIcon} />
								<Typography className={classes.contactTxt}>
									+91-9382117960
								</Typography>
							</a>
						</div>
						<div className={classes.contacts}>
							<a href="mailto:kousiksen09@gmail.com">
								<EmailIcon className={classes.contactIcon} />
								<Typography className={classes.contactTxt}>
									kousiksen09@gmail.com
								</Typography>
							</a>
						</div>
					</div>
					<div className={classes.title} style={{ marginBottom: "2rem" }}>
						<Typography variant="h3" className={classes.titleText}>
							Follow Me
						</Typography>
					</div>
					<div className={classes.socialMedia}>
						<ul className={classes.ulluSocial}>
							<li className={classes.liicSocial}>
								<div
									className={classes.iconSocial}
									style={{ backgroundColor: "#4267B2" }}
								>
									<Button
										onClick={() =>
											window.open("https://www.facebook.com/kousik.sen.09")
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
										background: "#4AC959",
									}}
								>
									<Button onClick={handleOpen}>
										<WhatsAppIcon className={classes.socialIconBtn} />
									</Button>
								</div>
							</li>
							<li className={classes.liicSocial}>
								<div
									className={classes.iconSocial}
									style={{ backgroundColor: "#1DA1F2" }}
								>
									<TwitterIcon className={classes.socialIconBtn} />
								</div>
							</li>
							<li className={classes.liicSocial}>
								<div
									className={classes.iconSocial}
									style={{ backgroundColor: "#171515 " }}
								>
									<Button
										onClick={() =>
											window.open("https://github.com/kousiksen09")
										}
									>
										<GitHubIcon className={classes.socialIconBtn} />
									</Button>
								</div>
							</li>
							<li className={classes.liicSocial}>
								<div
									className={classes.iconSocial}
									style={{ backgroundColor: "#2867B2" }}
								>
									<Button
										onClick={() =>
											window.open(
												"https://www.linkedin.com/in/kousik-sen-26b391187/"
											)
										}
									>
										<LinkedInIcon className={classes.socialIconBtn} />
									</Button>
								</div>
							</li>
						</ul>
					</div>
					<div className={classes.nameModal}>
						<Modal open={isModalOpen} onClose={onModalClose} />
					</div>
				</motion.div>
			</div>
			<Footer prevPage="Training" prevLink="/training" />
		</div>
	);
}

export default Contact;
