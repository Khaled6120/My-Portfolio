import React from "react";

const linkStyle = {
	color: "gray",
	textDecoration: "none",
	fontWeight: "bold",
};

function article_1() {
	return {
		date: "30 Jun 2023",
		title: "Overview of REST API development for E-Commerce.",
		description:
			"A brief overview of my graduation project API design.",
		keywords: [
			"REST API",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div>
					<h3>
						<a style={linkStyle} href="https://medium.com/@alnaes1234/overview-of-rest-api-development-for-e-commerce-graduation-project-6c91c13aa164">Go to Medium ➡️</a>
					</h3>

				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "24 June 2023",
		title: "E-commerce ERD “Graduation Project”",
		description:
			"A brief overview of my graduation project Database design.",
		style: ``,
		keywords: [
			"Database",
		],
		body: (
			<React.Fragment>
				<h3>
					<a style={linkStyle} href="https://medium.com/@alnaes1234/e-commerce-erd-graduation-project-ed87749bce11">Go to Medium ➡️</a>
				</h3>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "19 May 2023",
		title: "Supercharge Performance and Efficiency in Node.js",
		description:
			"A brief overview of Cache in Node.js",
		style: ``,
		keywords: [
			"Node.js",
		],
		body: (
			<React.Fragment>
				<h3>
					<a style={linkStyle} href="https://medium.com/@alnaes1234/leveraging-cache-in-node-js-supercharge-performance-and-efficiency-51d5ce22bf1b">Go to Medium ➡️</a>
				</h3>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
