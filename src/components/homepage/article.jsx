import React from "react";
import { Link } from "react-router-dom";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="homepage-article-content">
				<div className="homepage-article-date">
					|&nbsp;&nbsp;&nbsp;{date}
				</div>
				<div className="homepage-article-title">{title}</div>
				<div className="homepage-article-description">
					{description}
				</div>
				<div className="homepage-article-link">
					<Link to={link}>Read article ➡️ </Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
