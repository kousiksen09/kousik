// eslint-disable-next-line func-names
module.exports = function(api) {
	api.cache(false);

	const presets = [
		[
			"@babel/preset-env",
			{
				// Pass a config object to the preset
				// debug: true, // Output the targets/plugins used when compiling

				// Configure how @babel/preset-env handles polyfills from core-js.
				// https://babeljs.io/docs/en/babel-preset-env
				useBuiltIns: "usage",

				// Specify the core-js version. Must match the version in package.json
				corejs: 3

				// Specify which environments we support/target. (We have chosen to specify
				// targets in .browserslistrc, so there is no need to do it here.)
				// targets: "",
			}
		],

		// The react preset includes several plugins that are required to write
		// a React app. For example, it transforms JSX:
		// <div> -> React.createElement('div')
		"@babel/preset-react"
	];
	const plugins = [
		["@babel/plugin-proposal-optional-chaining"],
		[
			"@babel/plugin-proposal-class-properties",
			{
				loose: true
			}
		]
	];

	// For React HMR
	const sourceType = "unambiguous";

	return { presets, plugins, sourceType };
};
