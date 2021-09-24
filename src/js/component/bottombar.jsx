import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
const BottombBar = props => {
	const UrlSound = "https://assets.breatheco.de/apis/sound/";
	let UrlFinal = UrlSound.concat(props.urlMusic);

	return (
		<Fragment>
			<div className="songify">
				<audio src={UrlFinal} controls autoPlay></audio>
			</div>
		</Fragment>
	);
};
BottombBar.propTypes = {
	urlMusic: PropTypes.string
};
export default BottombBar;
