import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://avatars.githubusercontent.com/u/113393076?s=280&v=4"
								alt="intern2grow"
								className="work-image"
							/>
							<div className="work-title">Intern2Grow</div>
							<div className="work-subtitle">
								Javascript Developer
							</div>
							<div className="work-duration">
								Remotely internship
							</div>
						</div>

						<div className="work">
							<img
								src="https://www.karabuk.edu.tr/wp-content/uploads/2019/08/baykus.jpg"
								alt="KBU"
								className="work-image"
							/>
							<div className="work-title">IT section - KBÜ</div>
							<div className="work-subtitle">
								IT and Networking technician
							</div>
							<div className="work-duration">
								Full time internship
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
