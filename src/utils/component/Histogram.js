import React from "react";
import Highcharts from "highcharts";
import PropType from "prop-types";
import $ from "jquery";

const emptyFunction = () => {};

var hasNegativeValue = false;

class MyHistogram extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		};
		this.updateDimensions = this.updateDimensions.bind(this);

		this.highChartsRender = this.highChartsRender.bind(this);
	}

	componentDidMount() {
		this.highChartsRender(this.props);
		//resize chart when window is resized
		window.addEventListener("resize", this.updateDimensions);
	}

	componentDidUpdate() {
		this.highChartsRender(this.props);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}
	/**
	 * Configures required chart properties
	 */
	highChartsRender(props) {
		var chart = Highcharts.chart("container", {
			chart: {
				type: "bar",
				backgroundColor: "transparent",
				height: parseInt($("#container").css("height")),
				marginBottom: hasNegativeValue
					? 0.25 * parseInt($("#container").css("height"))
					: undefined,
				animation: {
					duration: 1500,
					easing: "easeOutBounce",
				},
			},
			title: {
				text: "Skills",
				style: {
					fontFamily: "'Fondamento', cursive",
					fontSize: "clamp(1.8rem, 5vw, 2rem)",
					color: "#E8EE0B",
					fontWeight: "600",
				},
			},
			xAxis: {
				lineWidth: 0,
				tickWidth: 0,
				categories: [
					"C",
					"DSA",
					"HTML",
					"CSS",
					"JavaScript",
					"React Js",
					"My SQL",
					"Python",
					"Asterisk",
				],
				title: {
					text: null,
				},
				labels: {
					style: props.xAxisLabelStyles,
					rotation: props.xAxisRotation,
					overflow: props.xAxisOverflow,
					y: props.xPadding,
				},
			},
			yAxis: {
				lineWidth: 0,
				tickWidth: 0,
				min: 0,
				max: 100,
				title: {
					text: "",
					align: "high",
				},
				labels: {
					overflow: "justify",
					style: {
						color: "white",
						fontSize: ".83rem",
						fontFamily: "Roboto",
						opacity: 0.6,
					},
				},
			},
			tooltip: {
				valueSuffix: "%",
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true,
						style: {
							color: "white",
							fontSize: "1rem",
							fontFamily: "Roboto",
							opacity: 0.9,
							lineHeight: "1.2rem",
						},
					},
				},
				series: {
					animation: props.animation,
					colorByPoint: true,
				},
			},
			legend: {
				enabled: false,
			},
			credits: {
				enabled: false,
			},

			series: [
				{
					data: [60, 46, 90, 92, 85, 88, 88, 71, 54],
				},
			],
		});

		return chart;
	}

	updateDimensions() {
		this.highChartsRender(this.props);
		window.addEventListener("resize", this.updateDimensions);
	}

	render() {
		console.log(this.props);
		const { chartHeight, marginBottom, marginTop } = this.props;
		return (
			<div
				style={{
					height: chartHeight,
					fontSize: "1em",
					marginTop: marginTop,
					marginBottom: marginBottom,
				}}
				id="container"
			></div>
		);
	}
}

MyHistogram.defaultProps = {
	animation: true,
	updateWidth: emptyFunction,
	cardName: null,
	divId: null,
	enableCredits: false,
	chartType: "bar",
	chartHeight: "80%",
	legendVisible: true,
	backgroundColor: "transparent",
	legendX: 0,
	legendY: 5,
	legendAlign: "center",
	legendVerticalAlign: "top",
	legendFontSize: "5px",
	titleText: "",
	XAxisLineWidth: 1,
	XAxisTickWidth: 0,
	XAxisLabelColor: "#CCCCCC",
	YAxisVisible: false,
	enableToolTip: false,
	enableDataLabels: true,
	datalabelsColor: "red",
	legendHorizontalAlign: "right",
	xAxisOverflow: "justify",
	pointWidth: 50,

	cursorStyle: "",
	yMinPadding: 0,
	yMaxPadding: 0,
	yMaxValue: 1,
	yMinValue: 0,
	xPadding: 20,
};

MyHistogram.propTypes = {
	/**
	 * id of the element where histogram to be rendered
	 */
	divId: PropType.string.isRequired,
	/**
	 * Points to be plotted
	 */
	data: PropType.array.isRequired,
	/**
	 * X axis labels list
	 */
	xdata: PropType.object,
	/**
	 * To give credits to highcharts
	 */
	enableCredits: false,
	/**
	 * type of chart
	 */
	chartType: PropType.string,
	/**
	 * Total height of chart container
	 */
	chartHeight: PropType.string,
	/**
	 * To show legends for the chart
	 */
	legendVisible: PropType.bool,
	/**
	 * background color of the chart
	 */
	backgroundColor: PropType.string,
	/**
	 * alignment of legend
	 */
	legendAlign: PropType.string,
	/**
	 * vertical alignment of legend
	 */
	legendVerticalAlign: PropType.string,
	/**
	 * font size of legend
	 */
	legendFontSize: PropType.string,
	/**
	 * text of title
	 */
	titleText: PropType.string,
	/**
	 * line width of x axis
	 */
	XAxisLineWidth: PropType.number,
	/**
	 * Width of ticks on x axis
	 */
	XAxisTickWidth: PropType.number,
	/**
	 * Color of x axis labels
	 */
	XAxisLabelColor: PropType.string,
	/**
	 * show or not show y axis
	 */
	YAxisVisible: PropType.bool,
	/**
	 * Enable tool tips for bars
	 */
	enableToolTip: PropType.bool,
	/**
	 * Enable data labels for bars
	 */
	enableDataLabels: PropType.bool,
	/**
	 * Color of data labels to be applied
	 */
	datalabelsColor: PropType.string,
	/**
	 * Horizontal alignment of legend
	 */
	legendHorizontalAlign: PropType.string,
	/**
	 * X axis label overflow
	 */
	xAxisOverflow: PropType.string,
	/**
	 * call back to be fired to render formatter.
	 */
	formatter: PropType.func.isRequired,
	/**
	 * Width of unit point.
	 */
	pointWidth: PropType.number,
	/**
	 * call back to fired clicked aging column value
	 */
	onClickBucket: PropType.func,
	/**
	 * styling of cursor
	 */
	cursorStyle: PropType.string,
	/**
	 * Minimum Value of y-axis
	 */
	yMinValue: PropType.number,
	/**
	 * Maximum Value of y-axis
	 */
	yMaxValue: PropType.number,
	/**
	 * Padding of y-axis from bottom
	 */
	yMinPadding: PropType.number,
	/**
	 * Padding of y-axis from top
	 */
	yMaxPadding: PropType.number,
	/**
	 * Padding of x-axis label from bar
	 */
	xPadding: PropType.any,
};

export default MyHistogram;
