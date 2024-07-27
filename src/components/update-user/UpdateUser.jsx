import styles from "./Update.module.css";

const UpdateUser = ({ updatedUser, handleSubmit, handleChange }) => {
	const {
		updatedFirstName,
		updatedLastName,
		updatedEmail,
		updatedAge,
		updatedProfession,
	} = updatedUser;
	return (
		<div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1>Update Profile</h1>
				<div className={styles.field}>
					<label htmlFor="firstName">Firstname</label>
					<input
						type="text"
						name="updatedFirstName"
						value={updatedFirstName}
						onChange={handleChange}
					/>
					 {updatedFirstName.trim() === '' }

				</div>
				<div className={styles.field}>
					<label htmlFor="lastName">Lastname</label>
					<input
						type="text"
						name="updatedLastName"
						value={updatedLastName}
						onChange={handleChange}
					/>
					{updatedLastName.trim() === '' }
				</div>
				<div className={styles.field}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="updatedEmail"
						value={updatedEmail}
						onChange={handleChange}
					/>
					 {updatedEmail.trim() === '' }
					 {!/\S+@\S+\.\S+/.test(updatedEmail) }
				</div>
				<div className={styles.field}>
					<label htmlFor="age">Age</label>
					<input
						type="number"
						name="updatedAge"
						value={updatedAge}
						onChange={handleChange}
					/>
					 {updatedAge.trim() === ''}
					 {isNaN(updatedAge) }
				</div>
				<div className={styles.field}>
					<label htmlFor="profession">Profession</label>
					<input
						type="text"
						name="updatedProfession"
						value={updatedProfession}
						onChange={handleChange}
					/>
					{updatedProfession.trim() === ''}
				</div>
				<button type="submit" disabled={!isFormValid()}  >Submit</button>
			</form>
		</div>
	);
};

export default UpdateUser;
