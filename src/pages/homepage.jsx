import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faInstagram,
	faMedium,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import TechStack from "../components/teckStack/TechStack";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="name homepage-title ">
									<span style={{ color: "#27272A" }}>
										I'm
									</span>{" "}
									{INFO.homepage.name}
								</div>
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
								<div className="homepage-socials">
									<a
										href={INFO.socials.github}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.linkedin}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.medium}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faMedium}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.instagram}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faInstagram}
											className="homepage-social-icon"
										/>
									</a>
									<a
										href={`mailto:${INFO.main.email}`}
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faMailBulk}
											className="homepage-social-icon"
										/>
									</a>
									<button className="resume-btn">
										<a
											target="_blank"
											href="https://www.canva.com/design/DAFgThYfEyI/W6Ztmk7YrDbK5lja0llI7g/edit?utm_content=DAFgThYfEyI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
										>
											Résumé
										</a>
									</button>
								</div>
							</div>

							<div className="homepage-first-area-right-side ">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div>
							<p className="subtitle-header homepage-title mt-xl">
								Teck Stack
							</p>

							<TechStack />
						</div>

						<div className="homepage-projects">
							<p className="subtitle-header homepage-title">
								Projects
							</p>

							<AllProjects />
						</div>

						<div>
							<p className="subtitle-header homepage-title">
								Articles
							</p>

							<div className="homepage-after-title">
								<div className="homepage-articles">
									{myArticles.map((article, index) => (
										<div
											className="homepage-article"
											key={(index + 1).toString()}
										>
											<Article
												key={(index + 1).toString()}
												date={article().date}
												title={article().title}
												description={
													article().description
												}
												link={"/article/" + (index + 1)}
											/>
										</div>
									))}
								</div>

								<div className="homepage-works">
									<Works />
								</div>
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
