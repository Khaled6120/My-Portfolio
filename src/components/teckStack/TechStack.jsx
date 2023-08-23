import React from "react";
import SingleCard from "./SingleCard";
import INFO from "../../data/user";
import "./styles/allTeckStack.css";

const TeckStack = () => {
	return (
		<>
			<div className="all-teckStack-container">
				{INFO.teckStack.map((item, index) => (
					<div className="all-teckStack" key={index}>
						<SingleCard logo={item.logo} title={item.title} />
					</div>
				))}
			</div>
			<hr className="section-line-end" />
		</>
	);
};

export default TeckStack;
