import React from "react";
import { Link } from "react-router-dom";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="article-link">Read Article ➡️</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Article;
