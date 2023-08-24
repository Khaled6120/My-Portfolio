import React from "react";

function Certificate({ certificate }) {
	return (
		<iframe
			style={{
				border: "1px solid rgba(0, 0, 0, 0.1)",
			}}
			src={certificate.url}
			allowFullScreen
		></iframe>
	);
}

export default Certificate;
