import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";

const Header = () => {
	// const images = [img1, img2, img3];
	// const index = Math.floor(Math.random() * 3);
	// const img = images[index];

	return (
		<>
			<Switch>
				<Route
					path="/"
					exact
					render={() => <img src={img1} alt="city"></img>}
				/>
				<Route
					path="/products"
					render={() => <img src={img2} alt="city"></img>}
				/>
				<Route
					path="/contact"
					render={() => <img src={img3} alt="city"></img>}
				/>
				<Route path="/admin" render={() => <img src={img3} alt="city"></img>} />
				<Route render={() => <img src={img1} alt="city"></img>} />
			</Switch>
			{/* <img src={img} alt="city" /> */}
		</>
	);
};

export default Header;
