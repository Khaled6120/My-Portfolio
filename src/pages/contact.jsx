import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import "./styles/contact.css";

const Contact = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		const nameInput = form.current.from_name;
		const emailInput = form.current.from_email;
		const messageInput = form.current.message;

		if (nameInput.value.trim() === "") {
			alert("Please enter your name.");
			nameInput.focus();
			return;
		}

		if (emailInput.value.trim() === "") {
			alert("Please enter your email.");
			emailInput.focus();
			return;
		}

		if (messageInput.value.trim() === "") {
			alert("Please enter your message.");
			messageInput.focus();
			return;
		}
		setLoading(true); // Set loading state to true when sending starts

		emailjs
			.sendForm(
				"service_nfmg2zb",
				"template_2p9qftj",
				form.current,
				"GY_SKTqwJXBMnaTdV"
			)
			.then(
				(result) => {
					form.current.reset();
					alert("Email sent successfully", result.text);
				},
				(error) => {
					alert("An error occured, please try again!", error.text);
				}
			)
			.finally(() => {
				setLoading(false); // Set loading state to false when sending is done
			});
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch 😊
						</div>

						<div className="subtitle contact-subtitle">
							I appreciate your interest in reaching out to me.
							I'm here to address any questions or inquiries you
							may have. Whether you have a specific question or
							wish to share your thoughts, please don't hesitate
							to use this form to send me an email directly . Thanks again for your
							interest, and I look forward to hearing from you!
						</div>

						<form ref={form} onSubmit={sendEmail}>
							<div className="form-row">
								<label htmlFor="from_name">Name</label>
								<input
									type="text"
									id="from_name"
									name="from_name"
								/>
							</div>
							<div className="form-row">
								<label htmlFor="from_email">Email</label>
								<input
									type="email"
									id="from_email"
									name="from_email"
								/>
							</div>
							<div className="form-row">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									rows="10"
								/>
							</div>
							<div className="form-row">
								<button type="submit" disabled={loading}>
									{loading ? "Sending..." : "Send"}
								</button>
							</div>
						</form>
					</div>

					<div className="contact-socials">
						<Socials />
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Contact;
