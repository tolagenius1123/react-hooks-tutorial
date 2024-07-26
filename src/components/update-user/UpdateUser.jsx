import { useState } from "react";
import styles from "./Update.module.css";

const UpdateUser = ({
	handleSubmit,
	updatedFirstName,
	setUpdatedFirstName,
	updatedLastName,
	setUpdatedLastName,
	updatedAge,
	setUpdatedAge,
	updatedEmail,
	setUpdatedEmail,
	updatedProfession,
	setUpdatedProfession,
}) => {
	const isFormValid = () => {
		return (
		  updatedFirstName.trim() !== '' && 
		  updatedLastName.trim() !== '' &&
		  updatedEmail.trim() !== '' &&
		  !isNaN(updatedAge) &&
		  updatedProfession.trim() !== ''
		);
	  };
	
	return (
		<div>
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
					 {updatedFirstName.trim() === '' }

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
					{updatedLastName.trim() === '' }
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
					 {updatedEmail.trim() === '' }
					 {!/\S+@\S+\.\S+/.test(updatedEmail) }
				</div>
				<div className={styles.field}>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="age"
						value={updatedAge}
						onChange={(event) => setUpdatedAge(event.target.value)}
					/>
					 {updatedAge.trim() === ''}
					 {isNaN(updatedAge) }
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
					{updatedProfession.trim() === ''}
				</div>
				<button type="submit" disabled={!isFormValid()}  >Submit</button>
			</form>
		</div>
	);
};

export default UpdateUser;
