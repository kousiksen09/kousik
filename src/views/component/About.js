import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Skeleton from "../../utils/component/Skeleton";
import { Typography, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import GetAppIcon from "@material-ui/icons/GetApp";
import prc from "../../assets/prc.jpg";
import Header from "./Header";
import { pxToVw, pxToRem, pxToVh } from "../../utils/theme";
import Resume from "../../assets/Kousik_Resume.pdf";
import { currPageAction } from "../../Redux/actions/CurrPageAction";
import Footer from "./Footer";
import { pageVariants, pageTransition } from "../../common/pageTrasition";

const useStyles = makeStyles(() => ({
	drawerOpenCon: {
		width: "82vw",
		height: "100vh",
		left: "17vw",
		position: "absolute",
	},
	drawerNotOpenCon: {
		width: "100vw",
		height: "100vh",
		position: "absolute",
	},
	about: {
		height: "100%",
		width: "100%",
		position: "relative",
	},
	titleText: {
		fontFamily: "'lato', sans-serif",
		position: "relative",
		letterSpacing: "1rem",
		paddingTop: "2%",
		fontWeight: "600",
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
		fontSize: "clamp(3rem, 10vw, 3.8rem)",
		background: "-webkit-linear-gradient(white, #38495a)",
		"-webkit-background-clip": "text",
		"-webkit-text-fill-color": "transparent",
	},
	imgPr: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		height: "30vh",
	},
	prImg: {
		marginTop: pxToRem(50),
		cursor: "pointer",
		height: "25vh",
		borderRadius: "50%",
		objectFit: "cover",
		objectPosition: "center center",
		border: "0.3rem solid #3d3b3b",
	},
	zoomImageDiv: {
		position: "relative",
		display: "flex",
		flexGrow: 1,
		height: "80%",
		width: "82%",
		left: "11vw",
		justifyContent: "center",
	},
	zoomImage: {
		position: "absolute",
		margin: pxToRem(20),
		height: "100%",
		border: "0.3rem solid #3d3b3b",
	},
	closeIcon: {
		position: "relative",
		cursor: "pointer",
		height: "4vh",
		width: "4vw",
		top: pxToVh(22),
		right: pxToVw(22),
		color: "#fff",
		border: "0.2rem solid #fff",
	},
	rightSection: {
		display: "flex",
		flexGrow: 1,
		justifyContent: "flex-end",
	},
	objective: {
		position: "relative",
		display: "flex",
		flexGrow: 1,
		justifyContent: "center",
		height: "40vh",
	},
	subTitle: {
		fontFamily: " 'Yeon Sung', cursive",
		position: "absolute",
		fontWeight: "500",
		textAlign: "center",
		fontSize: "2.5rem",
		background: "-webkit-linear-gradient(white, #38495a)",
		"-webkit-background-clip": "text",
		"-webkit-text-fill-color": "transparent",
	},
	tagLine: {
		fontFamily: " 'Yeon Sung', cursive",
		position: "absolute",
		top: "10vh",
		margin: "0 2rem 2rem 0",
		fontWeight: "500",
		textAlign: "center",
		fontSize: "clamp(1.8rem, 12vw, 2.5rem)",
		padding: pxToRem(4),
		background: "-webkit-linear-gradient(white, #38495a)",
		"-webkit-background-clip": "text",
		"-webkit-text-fill-color": "transparent",
	},
	resumeButton: {
		position: "absolute",
		marginTop: "25vh",
		height: "3rem",
		width: "auto",
		background: "#ed8728",
		color: "#FFFFFF",
		borderRadius: "2rem",
		"&:hover": {
			opacity: 1,
			backgroundColor: "#ba9013",
		},
	},

	btnTxt: {
		fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
	},
	heightManager: {
		position: "relative",
		height: "92vh",
		width: "100%",
	},
	mobileHeightManager: {
		position: "relative",
		height: "86vh",
		width: "100%",
	},
}));

function About() {
	const open = useSelector((state) => state.DrawerReducer.open);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};
	const classes = useStyles();
	const theme = useTheme();
	const screenChange = useMediaQuery(theme.breakpoints.up("md"));

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	}, [loading]);

	useEffect(() => {
		dispatch(currPageAction({ currPage: "About Me" }));
	}, [dispatch]);

	return (
		<div className={clsx(open ? classes.drawerOpenCon : classes.drawerNotOpenCon)}>
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>

			<motion.div
				className={classes.about}
				initial={false}
				animate="in"
				exit="out"
				variants={pageVariants}
				transition={pageTransition}
			>
				<div
					className={clsx(
						screenChange ? classes.heightManager : classes.mobileHeightManager
					)}
				>
					<Header />
					<div className={classes.imgPr}>
						{!loading ? (
							<img
								src={prc}
								alt="Kousik Sen"
								className={classes.prImg}
								onClick={() => handleModalOpen()}
							/>
						) : (
							<Skeleton height={280} width={280} circle />
						)}
					</div>
					<Modal
						open={modalOpen}
						onClose={handleModalClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						<>
							<div className={classes.rightSection}>
								<CloseIcon
									onClick={() => handleModalClose()}
									className={classes.closeIcon}
								/>
							</div>
							<div className={classes.zoomImageDiv}>
								<img src={prc} alt="Kousik Sen" className={classes.zoomImage} />
							</div>
						</>
					</Modal>
					{loading ? (
						<Skeleton height={75} width={580} classes={{ parent: classes.titleText }} />
					) : (
						<Typography variant="h3" className={classes.titleText}>
							KOUSIK SEN
						</Typography>
					)}

					<div className={classes.objective}>
						{loading ? (
							<Skeleton
								height={65}
								width={723}
								rx={5}
								classes={{ parent: classes.subTitle }}
							/>
						) : (
							<Typography variant="h3" className={classes.subTitle}>
								WEB DEVELOPER | IoT Architect
							</Typography>
						)}
						{loading ? (
							<Skeleton
								height={60}
								width={1875}
								rx={2}
								left={12}
								top={25}
								count={2}
								classes={{ parent: classes.tagLine }}
							/>
						) : (
							<Typography variant="h3" className={classes.tagLine}>
								Inovation + Design + Develop make the world beautiful. Have 3 years
								of experience in responsive UI Design and 2 years of experience in
								IoT.
							</Typography>
						)}

						{loading ? (
							<Skeleton
								height={67}
								width={246}
								rx={25}
								top={12}
								classes={{ parent: classes.resumeButton }}
							/>
						) : (
							<Button
								variant="contained"
								className={classes.resumeButton}
								classes={{ label: classes.btnTxt }}
								onClick={() => window.open(Resume)}
								startIcon={<GetAppIcon style={{ height: "2rem", width: "2rem" }} />}
							>
								Resume
							</Button>
						)}
					</div>
				</div>
				<Footer nextPage="Education & Skill" nextLink="/education" />
			</motion.div>
		</div>
	);
}

export default About;
