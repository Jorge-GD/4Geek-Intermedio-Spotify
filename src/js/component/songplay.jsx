import React, { useEffect, useState, Fragment } from "react";
import CardSong from "./cardsong.jsx";
const Spotify = () => {
	const UrlSound = "https://assets.breatheco.de/apis/sound/";
	const [musicList, setMusicList] = useState("");
	const [cardMusic, setCardMusic] = useState("");
	const [urlMusic, setUrlMusic] = useState("nada por aqui");

	useEffect(() => {
		fetch(UrlSound.concat("songs"), {
			method: "GET"
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(responseAsJson => {
				setMusicList(responseAsJson);
			})
			.catch(error => {
				console.log("Error 999", error);
			});
	}, []);

	const changeMusic = url => {
		let song = UrlSound.concat(url);

		setUrlMusic(song);
	};

	useEffect(() => {
		if (musicList.length > 0) {
			setCardMusic(
				musicList.map((element, index) => {
					return (
						<CardSong
							name={element.name}
							number={element.id}
							key={index}
							url={element.url}
							change={changeMusic}
						/>
					);
				})
			);
		}
	}, [musicList]);

	return (
		<Fragment>
			<div>
				<h1>Todas las Canciones</h1>
				<div className="capsule">{cardMusic}</div>
				<div className="songify">
					<audio src={urlMusic} controls></audio>
				</div>
			</div>
		</Fragment>
	);
};

export default Spotify;
