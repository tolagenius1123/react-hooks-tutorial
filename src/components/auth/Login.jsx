import { useState } from "react";
import "./Login.css";
import { useEffect } from "react";

const Login = () => {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
		role: "",
	});

	const [error, setError] = useState({
		email: "",
		password: "",
		role: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserInfo((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!userInfo.email) {
			setError((prev) => ({
				...prev,
				email: "Email is a required field",
			}));
			return;
		}

		console.log(userInfo);
	};

	useEffect(() => {
		setError((prev) => ({
			...prev,
			email: "",
		}));
	}, [userInfo.email]);

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login to Dashboard</h2>
			<div className="input-field">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter a valid email address"
					value={userInfo.email}
					onChange={handleChange}
				/>
				<p>{error.email}</p>
			</div>
			<div className="input-field">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter password"
					value={userInfo.password}
					onChange={handleChange}
				/>
			</div>
			<div className="input-field">
				<label htmlFor="password">Role</label>
				<select
					name="role"
					id="role"
					value={userInfo.role}
					onChange={handleChange}
				>
					<option value="">Select role</option>
					<option value="ADMIN">Admin</option>
					<option value="USER">User</option>
				</select>
			</div>
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
