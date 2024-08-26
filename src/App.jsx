import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import UpdateUser from "./components/update-user/UpdateUser";
import User from "./components/user/User";
import Counter from "./components/counter/Counter";
import Login from "./components/auth/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./components/dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import TodoList from "./components/todo-list/TodoList";

function App() {
	// const [firstName, setFirstName] = useState("Omotola");
	// const [lastName, setLastName] = useState("Jinadu");
	// const [email, setEmail] = useState("tolajinadu1123@gmail.com");
	// const [age, setAge] = useState("40");
	// const [profession, setProfession] = useState("Software Engineer");

	const [user, setUser] = useState({
		firstName: "Omotola",
		lastName: "Jinadu",
		email: "tolajinadu1123@gmail.com",
		age: "40",
		profession: "Software Engineer",
	});

	// const [updatedFirstName, setUpdatedFirstName] = useState("");
	// const [updatedLastName, setUpdatedLastName] = useState("");
	// const [updatedEmail, setUpdatedEmail] = useState("");
	// const [updatedAge, setUpdatedAge] = useState("");
	// const [updatedProfession, setUpdatedProfession] = useState("");

	const [updatedUser, setUpdatedUser] = useState({
		updatedFirstName: "",
		updatedLastName: "",
		updatedEmail: "",
		updatedAge: "",
		updatedProfession: "",
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		setUpdatedUser((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const {
			updatedFirstName,
			updatedLastName,
			updatedEmail,
			updatedAge,
			updatedProfession,
		} = updatedUser;

		if (
			!updatedFirstName ||
			!updatedLastName ||
			!updatedEmail ||
			!updatedAge ||
			!updatedProfession
		) {
			alert("All fields are required");
			return;
		}

		setUser({
			firstName: updatedFirstName,
			lastName: updatedLastName,
			email: updatedEmail,
			age: updatedAge,
			profession: updatedProfession,
		});

		//I want to see a notification that tells me profile has been updated successfully here
		alert("Profile Updated Successfully");
		//I want you to clear the form for me here
		setUpdatedUser({
			updatedFirstName: "",
			updatedLastName: "",
			updatedEmail: "",
			updatedAge: "",
			updatedProfession: "",
		});
	};

	return (
		<>
			<div className="home">
				<Navbar />
				<div className="event">
					{/* <Login /> */}
					<TodoList />
				</div>
				<Toaster position="top-right" />
			</div>
			{/* <div className="home">
				<Dashboard />
				<Toaster position="top-right" />
			</div> */}
		</>
	);
}

export default App;
