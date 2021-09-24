import "../../styles/navbarstyle.scss";
import PropTypes from "prop-types";
import React, { useEffect, useState, Fragment } from "react";

const Navbar = props => {
	return (
		<Fragment>
			<div className="nav">
				<img
					src="https://nintenduo.com/wp-content/uploads/2021/02/Nintendo-64-Switch-Online.jpg"
					alt=""
				/>
				<div>
					<div className="infoNav">
						<p>Radio</p>
						<h1>Nintendo music!</h1>
						<p>JorgeGD</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Navbar;
