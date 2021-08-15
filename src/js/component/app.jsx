import React from "react";
import PropTypes from "prop-types";

//rendering
const App = props => {
	return (
		<div
			className={"light ".concat(props.color)}
			onClick={() => {
				props.clickChange(props.color);
			}}></div>
	);
};

App.propTypes = {
	color: PropTypes.string,
	clickChange: PropTypes.func
};

export default App;
