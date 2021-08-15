import React, { Fragment, useState } from "react";
import App from "./app.jsx";

//create your first component
const Home = () => {
	const [color, setColor] = useState({
		redLight: "stop",
		yellowLight: "warning",
		greenLight: "go"
	});

	const changeColor = () => {};

	return (
		<Fragment>
			<div className="lightBox">
				<div className="lights">
					<App
						color={color.redLight}
						clickChange={() => {
							setColor({
								redLight: "stop glow",
								yellowLight: "warning",
								greenLight: "go"
							});
						}}
					/>

					<App
						color={color.yellowLight}
						clickChange={() => {
							setColor({
								redLight: "stop",
								yellowLight: "warning glow",
								greenLight: "go"
							});
						}}
					/>

					<App
						color={color.greenLight}
						clickChange={() => {
							setColor({
								redLight: "stop",
								yellowLight: "warning",
								greenLight: "go glow "
							});
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};
export default Home;
