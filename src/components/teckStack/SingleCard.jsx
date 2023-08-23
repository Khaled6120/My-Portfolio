import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const SingleCard = (props) => {
	const { logo, title, link } = props;

	return (
		<React.Fragment>
			<div className="items">
				<Link to={link}>
					<div className="card-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default SingleCard;
