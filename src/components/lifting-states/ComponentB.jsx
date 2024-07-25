import React, { useState } from "react";

const ComponentB = ({contentB}) => {
	//const [osB, setOsB] = useState("IOS");
	return (
		<div className="liftingStates">
			<h1>Component {contentB}</h1>
			<p>This is an {contentB} component</p>
		</div>
	);
};

export default ComponentB;
