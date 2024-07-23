import React, { useState } from "react";

const ComponentA = () => {
	const [os, setOs] = useState("Android");
	return (
		<div className="liftingStates">
			<h1>Component {os}</h1>
			<p>This is an {os} component</p>
		</div>
	);
};

export default ComponentA;
