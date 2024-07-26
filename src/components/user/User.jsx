import React, { useState } from "react";
import ProfilePic from "../../assets/lady.jpg";
import styles from "./User.module.css";

const User = ({ user }) => {
	const { firstName, lastName, email, age, profession } = user;
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
		</>
	);
};

export default User;
