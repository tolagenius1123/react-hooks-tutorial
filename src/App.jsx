import { useState } from "react";
import Counter from "./components/counter/Counter";
import Navbar from "./components/navbar/Navbar";
import UpdateUser from "./components/update-user/UpdateUser";
import User from "./components/user/User";
import ComponentA from "./components/lifting-states/ComponentA";
import ComponentB from "./components/lifting-states/ComponentB";

function App() {
	const [firstName, setFirstName] = useState("Omotola");
	const [lastName, setLastName] = useState("Jinadu");
	const [email, setEmail] = useState("tolajinadu1123@gmail.com");
	const [age, setAge] = useState("40");
	const [profession, setProfession] = useState("Software Engineer");

	const [updatedFirstName, setUpdatedFirstName] = useState("");
	const [updatedLastName, setUpdatedLastName] = useState("");
	const [updatedEmail, setUpdatedEmail] = useState("");
	const [updatedAge, setUpdatedAge] = useState("");
	const [updatedProfession, setUpdatedProfession] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setFirstName(updatedFirstName);
		setLastName(updatedLastName);
		setEmail(updatedEmail);
		setAge(updatedAge);
		setProfession(updatedProfession);

		// I want to see a notification that tells me profile has been updated successfully here
		alert("Pofile Updated Successfully");
		// I want you to clear the form for me here
		setUpdatedFirstName("");
		setUpdatedLastName("");
		setUpdatedEmail("");
		setUpdatedAge("");
		setUpdatedProfession("");
	};

	return (
		<div className="home">
			<Navbar />
			<div className="event">
				{/* <Counter /> */}
				{/* <User
					firstName={firstName}
					lastName={lastName}
					email={email}
					age={age}
					profession={profession}
				/> */}
				{/* <UpdateUser
					handleSubmit={handleSubmit}
					updatedFirstName={updatedFirstName}
					setUpdatedFirstName={setUpdatedFirstName}
					updatedLastName={updatedLastName}
					setUpdatedLastName={setUpdatedLastName}
					updatedEmail={updatedEmail}
					setUpdatedEmail={setUpdatedEmail}
					updatedAge={updatedAge}
					setUpdatedAge={setUpdatedAge}
					updatedProfession={updatedProfession}
					setUpdatedProfession={setUpdatedProfession}
				/> */}
				<ComponentA />
				<ComponentB />
			</div>
		</div>
	);
}

export default App;
