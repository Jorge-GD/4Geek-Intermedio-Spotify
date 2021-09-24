import React from "react";
import Spotify from "./songplay.jsx";
import Navbar from "./navbar.jsx";
import Sidebard from "./sidebard.jsx";
import BottomBar from "./bottombar.jsx";
import "../../styles/home.scss";
import { useState } from "react";
//create your first component
const Home = () => {
	const [urlMusic, setUrlMusic] = useState("nada por aqui");

	const changeMusic = url => {
		setUrlMusic(url);
	};
	return (
		<div className="position">
			<Sidebard />
			<Navbar />
			<Spotify urlMusicFunc={changeMusic} />
			<BottomBar urlMusic={urlMusic} />
		</div>
	);
};
export default Home;
