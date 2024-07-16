import React from "react";
import styles from "./Update.module.css";

const UpdateUser = () => {
	return (
		<div>
			<form className={styles.form}>
				<h1>Update Profile</h1>
				<div className={styles.field}>
					<label htmlFor="">Firstname</label>
					<input type="text" />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default UpdateUser;
