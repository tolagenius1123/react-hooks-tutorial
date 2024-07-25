import React, { useState } from "react";

const ComponentA = ({contentA}) => {
	//const [osA, setOsA] = useState("Andriod");
	return (
		<div className="liftingStates">
			<h1>Component {contentA}</h1>
			<p>This is an {contentA} component</p>
		</div>
	);
};

export default ComponentA;
