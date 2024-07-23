import React, { useState } from "react";

const ComponentB = () => {
	const [os, setOs] = useState("IOS");
	return (
		<div className="liftingStates">
			<h1>Component {os}</h1>
			<p>This is an {os} component</p>
		</div>
	);
};

export default ComponentB;
