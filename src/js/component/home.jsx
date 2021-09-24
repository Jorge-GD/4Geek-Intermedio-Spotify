import React from "react";
import Spotify from "./songplay.jsx";
import Navbar from "./navbar.jsx";
import Sidebard from "./sidebard.jsx";

import "../../styles/home.scss";
//create your first component
const Home = () => {
	return (
		<div className="position">
			<Sidebard />
			<Navbar />
			<Spotify />
		</div>
	);
};
export default Home;
