import React, { useState, useEffect } from "react";
import Skeleton from "../../utils/component/Skeleton";
// import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

import "../../index.css";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "absolute",
		top: "92vh",
		width: "100%",
		height: "8vh",
	},

	footerContainer: {
		position: "relative",
		alignItems: "center",

		height: "100%",
		width: "100%",
		backgroundColor: "transparent",
	},

	copyright: {
		display: "flex",
		justifyContent: "center",
		position: "relative",
		top: "2vh",
	},
	copyrightTxt: {
		display: "inline-block",
		position: "relative",
		fontSize: "clamp(1.2rem, 7vw, 1.35rem)",
		textAlign: "center",
		overflow: "hidden",
		color: "#f35626",
	},
}));
function Footer(props) {
	const classes = useStyles();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	}, [loading]);

	return (
		<div className={classes.root}>
			<div className={classes.footerContainer}>
				{/* <div className={classes.prevPage}>
            {props.prevPage ? (
              <Link to={props.prevLink} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={() => prevPageClick(props)}
                  startIcon={
                    <ArrowBackIcon style={{ height: '2rem', width: '2rem' }} />
                  }
                  className={classes.prevPageBtn}
                  classes={{ label: classes.btnTxt }}
                >
                  {props.prevPage}
                </Button>
              </Link>
            ) : (
              ''
            )}
          </div> */}
				{loading ? (
					<Skeleton height={46} width={630} classes={{ parent: classes.copyright }} />
				) : (
					<div className={classes.copyright}>
						<Typography
							classes={{ body1: classes.copyrightTxt }}
							className="copyrightTxt"
						>
							© Copyright 2021 Kousik Sen. All Rights Reserved
						</Typography>
					</div>
				)}
				{/* 
          <div className={classes.nextPage}>
            {props.nextPage ? (
              <Link to={props.nextLink} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={() => nextPageClick(props)}
                  endIcon={
                    <ArrowForwardIcon
                      style={{
                        height: '2rem',
                        width: '2rem',
                        position: 'relative',
                      }}
                    />
                  }
                  className={classes.nextPageBtn}
                  classes={{ label: classes.btnTxt }}
                >
                  {props.nextPage}
                </Button>
              </Link>
            ) : (
              ''
            )}
          </div> */}
			</div>
		</div>
	);
}

export default Footer;
