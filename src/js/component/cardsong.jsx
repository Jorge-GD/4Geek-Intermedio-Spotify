import "../../styles/cardsong.scss";
import PropTypes from "prop-types";
import React, { useEffect, useState, Fragment } from "react";

const CardSong = props => {
	const [musicList, setMusicList] = useState("");

	return (
		<Fragment>
			<div
				className="card-song"
				onClick={() => {
					props.change(props.url);
					console.log(props.url);
				}}>
				<img
					src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2016/12/mario-run.jpg?fit=737%2C480&ssl=1"
					alt=""
					width="100px"
					height="100px"
				/>
				<div>
					<h2>
						{props.number}-{props.name}
					</h2>
					<p>Grandes Hits de la nintendo 64!</p>
				</div>
			</div>
		</Fragment>
	);
};

CardSong.propTypes = {
	number: PropTypes.number,
	name: PropTypes.string,
	url: PropTypes.string,
	change: PropTypes.func
};

export default CardSong;
