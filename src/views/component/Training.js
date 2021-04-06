import React, { useEffect } from "react";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Typography, Grid, Button } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { pageVariants, pageTransition } from "../../common/pageTrasition";

import NonClickableCard from "../../utils/NonClickableCard";
import Header from "./Header";
import Footer from "./Footer";
import { trainingData } from "../../data/trainingData";
import { currPageAction } from "../../Redux/actions/CurrPageAction";
import aboutBg from "../../assets/aboutBg.png";
import theme from "../../utils/theme";

const useStyles = makeStyles(() => ({
	root: {
		height: "100%",
		width: "100%",
		position: "relative",
		"&:before": {
			content: `""`,
			background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${aboutBg})`,
			height: "100%",
			width: "100%",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			backgroundAttachment: "fixed",
			position: "absolute",
			opacity: "0.75",
		},
	},
	mobileHeightManager: {
		position: "relative",
		height: "86vh",
		width: "100%",
	},
	trainingContainer: {
		position: "relative",
		display: "flex",
		padding: "1.6rem",
		justifyContent: "center",
		boxSizing: "border-box",
		height: "82vh",
		width: "100%",
		overflowX: "hidden",
		overflowY: "auto",
		"&::-webkit-scrollbar": {
			width: "0",
		},
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
	heightManager: {
		position: "relative",
		height: "92vh",
		width: "100%",
	},

	titleText: {
		fontFamily: "'Fondamento', cursive",
		fontSize: "clamp(2.4rem, 4.3vw, 2.5rem)",
		color: "#e2dae6",
		fontWeight: "600",
	},
	projectCard: {
		position: "relative",
		display: "flex",

		border: `0.1rem solid #d0d1d5`,
		borderRadius: "0.3rem",
		width: "93%",
		padding: "0.5rem",
		// marginBottom: '2vh',
		backdropFilter: "blur(0.6rem)",
	},
	projectHeader: {
		display: "flex",
		position: "relative",
		height: "22%",
		width: "100%",
		marginBottom: "1vh",
	},
	headerTxt: {
		display: "inline-block",
		position: "relative",
		overflow: "hidden",
		justifyContent: "center",
		fontFamily: "Noto Sans JP, sans-serif",
		color: theme.palette.text.title,
		textOverflow: "ellipsis",
		left: "1.2rem",
		top: "1rem",
		alignItems: "center",
		width: "100%",
		fontSize: "1.2rem",
	},
	trainingIns: {
		display: "inline-block",
		position: "relative",
		justifyContent: "flex-start",
		height: "6vh",
		width: "6vw",
	},
	cardBody: {
		display: "inline-block",
		position: "relative",
		width: "100%",
		height: "78%",
		marginTop: "1vh",
	},
	crdBdyTxt: {
		position: "relative",
		overflow: "hidden",
		fontFamily: "Roboto, sans-serif",
		textOverflow: "ellipsis",
		padding: "0 0 0 0.5rem",
		width: "100%",
		fontSize: "clamp(1.2rem, 18vw, 1.35rem)",
		color: "#FFFFFF",
	},
	viewCertificate: {
		display: "flex",
		justifyContent: "center",
		position: "relative",

		height: "10%",
	},
	showBtn: {
		width: "auto",
		height: "3rem",
		backgroundColor: "#7123e2",
		boxShadow: "0 2px 5px 0 rgb(0 0 0 / 10%)",
		background: "linear-gradient(-45deg ,#705aef, #9f69fe, #c827c8, #3f00b5)",
		backgroundSize: "800% 400%",
		animation: "upgradeGradient 10s infinite cubic-bezier(.62,.28,.23,.99) both",
	},
}));

function Training() {
	const classes = useStyles();

	const dispatch = useDispatch();
	const theme = useTheme();
	const screenChange = useMediaQuery(theme.breakpoints.up("md"));
	useEffect(() => {
		dispatch(currPageAction({ currPage: "Training & Internship" }));
	}, [dispatch]);

	return (
		<div className={classes.root}>
			<div
				className={clsx(screenChange ? classes.heightManager : classes.mobileHeightManager)}
			>
				<Header />
				<motion.div
					className={classes.trainingContainer}
					initial="initial"
					animate="in"
					exit="out"
					variants={pageVariants}
					transition={pageTransition}
				>
					<Grid container justify="space-evenly" spacing={3}>
						{trainingData.map((data, key) => (
							<Grid
								xs={6}
								sm={6}
								md={4}
								lg={4}
								xl={4}
								key={key}
								style={{ marginBottom: "4vh" }}
							>
								<NonClickableCard classes={{ root: classes.projectCard }}>
									<div className={classes.projectHeader}>
										<div className={classes.trainingIns}>
											<img
												src={data.traingIns}
												alt={data.name}
												style={{
													height: "3rem",
													width: "3rem",
													padding: "0.2rem",
													borderRadius: "50%",
													border: "0.2rem solid #6f23e2",
												}}
											/>
										</div>
										<Typography className={classes.headerTxt}>
											{data.title}
										</Typography>
									</div>
									<div className={classes.cardBody}>
										<Typography className={classes.crdBdyTxt}>
											<span
												style={{
													fontSize: "clamp(1.4rem, 18vw, 1.5rem)",
													fontWeight: "600",
													color: "#dfa72f",
												}}
											>
												Skill Learn :{" "}
											</span>{" "}
											{data.skills}
										</Typography>
										<Typography className={classes.crdBdyTxt}>
											<span
												style={{
													fontSize: "clamp(1.4rem, 18vw, 1.5rem)",
													fontWeight: "600",
													color: "#dfa72f",
												}}
											>
												Trainer :{" "}
											</span>{" "}
											{data.trainer}
										</Typography>
										<Typography className={classes.crdBdyTxt}>
											<span
												style={{
													fontSize: "clamp(1.4rem, 18vw, 1.5rem)",
													fontWeight: "600",
													color: "#dfa72f",
												}}
											>
												Duration :{" "}
											</span>{" "}
											{data.duration}
										</Typography>
										<div className={classes.viewCertificate}>
											<Button
												startIcon={
													<VisibilityIcon
														style={{
															height: "1.5rem",
															width: "1.5rem",
															position: "relative",
															left: "0.4rem",
														}}
													/>
												}
												className={classes.showBtn}
											>
												View Certificate
											</Button>
										</div>
									</div>
								</NonClickableCard>
							</Grid>
						))}

						<Grid xs={6} sm={6} md={4} lg={4} xl={4}>
							<NonClickableCard classes={{ root: classes.projectCard }}>
								<div className={classes.projectHeader}>
									<div className={classes.trainingIns}>
										<img
											src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5f5fbc084df8500001b65083/picture"
											alt="hrc"
											style={{
												height: "3rem",
												width: "3rem",
												borderRadius: "50%",
											}}
										/>
									</div>
									<Typography className={classes.headerTxt}>
										Internship at Highradius
									</Typography>
								</div>
								<div className={classes.cardBody}>
									<Typography className={classes.crdBdyTxt}>
										<span
											style={{
												fontSize: "clamp(1.4rem, 18vw, 1.5rem)",
												fontWeight: "600",
												color: "#dfa72f",
											}}
										>
											Role :
										</span>{" "}
										Autonomous UI Developer
									</Typography>
									<Typography className={classes.crdBdyTxt}>
										<span
											style={{
												fontSize: "clamp(1.4rem, 18vw, 1.5rem)",
												fontWeight: "600",
												color: "#dfa72f",
											}}
										>
											Technology used :
										</span>{" "}
										React Js, Redux, Saga, Asterisk
									</Typography>
									<Typography className={classes.crdBdyTxt}>
										<span
											style={{
												fontSize: "clamp(1.4rem, 18vw, 1.5rem)",
												fontWeight: "600",
												color: "#dfa72f",
											}}
										>
											Duration :{" "}
										</span>{" "}
										1 st June, 2020 - Present
									</Typography>
									<div className={classes.viewCertificate}>
										<Button
											startIcon={
												<VisibilityIcon
													style={{
														height: "1.5rem",
														width: "1.5rem",
														position: "relative",
														left: "0.4rem",
													}}
												/>
											}
											className={classes.showBtn}
										>
											View Certificate
										</Button>
									</div>
								</div>
							</NonClickableCard>
						</Grid>
					</Grid>
				</motion.div>
			</div>
			<Footer prevPage="Project" nextPage="Contact" prevLink="/project" nextLink="/contact" />
		</div>
	);
}

export default Training;
