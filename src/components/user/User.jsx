import React, { useState } from "react";
import ProfilePic from "../../assets/lady.jpg";
import styles from "./User.module.css";

const User = () => {
	const [firstName, setFirstName] = useState("Omotola");
	const [userInput, setUserInput] = useState("");

	console.log(userInput);
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
				<p className={styles.details}>Lastname: Jinadu</p>
				<p className={styles.details}>Email: tolajinadu1123</p>
				<p className={styles.details}>Age: 40</p>
				<p className={styles.details}>Profession: Software Engineer</p>
			</div>
			<form className={styles.form}>
				<h1>Update Profile</h1>
				<div className={styles.field}>
					<label htmlFor="">Firstname</label>
					<input
						type="text"
						onChange={(event) => setUserInput(event.target.value)}
					/>
				</div>
				<button
					onClick={() => {
						setFirstName(userInput);
					}}
					type="button"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default User;
