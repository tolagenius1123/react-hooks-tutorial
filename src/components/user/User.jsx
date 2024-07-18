import React, { useState } from "react";
import ProfilePic from "../../assets/lady.jpg";
import styles from "./User.module.css";

const User = () => {
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

		// I want you to clear the form for me here
	};

	return (
		<>
			<div className={styles.user}>
				<h1 className={styles.heading}>Your Profile</h1>
				<img
					className={styles.pic}
					src={ProfilePic}
					alt="profile-pic"
				/>
				<p className={styles.details}>Firstname: {firstName}</p>
				<p className={styles.details}>Lastname: {lastName}</p>
				<p className={styles.details}>Email: {email}</p>
				<p className={styles.details}>Age: {age}</p>
				<p className={styles.details}>Profession: {profession}</p>
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1>Update Profile</h1>
				<div className={styles.field}>
					<label htmlFor="firstName">Firstname</label>
					<input
						type="text"
						name="firstName"
						value={updatedFirstName}
						onChange={(event) =>
							setUpdatedFirstName(event.target.value)
						}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor="lastName">Lastname</label>
					<input
						type="text"
						name="lastName"
						value={updatedLastName}
						onChange={(event) =>
							setUpdatedLastName(event.target.value)
						}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						value={updatedEmail}
						onChange={(event) =>
							setUpdatedEmail(event.target.value)
						}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						value={updatedAge}
						onChange={(event) => setUpdatedAge(event.target.value)}
					/>
				</div>
				<div className={styles.field}>
					<label htmlFor="profession">Profession</label>
					<input
						type="text"
						name="profession"
						value={updatedProfession}
						onChange={(event) =>
							setUpdatedProfession(event.target.value)
						}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default User;
