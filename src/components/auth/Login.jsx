import { useState } from "react";
import "./Login.css";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	
	const [isLoading, setIsLoading] = useState(false);
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

		// if (!userInfo.email) {
		// 	setError((prev) => ({
		// 		...prev,
		// 		email: "Email is a required field",
		// 	}));
		// 	return;
		// }
		// if (!userInfo.password) {
		// 	setError((prev) => ({
		// 		...prev,
		// 		password: "Password is a required field",
		// 	}));
		// 	return;
		// }
		// if (!userInfo.role) {
		// 	setError((prev) => ({
		// 		...prev,
		// 		role: "Role is a required field",
		// 	}));
		// 	return;
		// }

		if (!userInfo.email || !userInfo.password || !userInfo.role) {
			toast.error("All fields are required");
			return;
		}

		localStorage.setItem("user", JSON.stringify(userInfo));

		setIsLoading(true);
		setTimeout(() => {
			toast.success("Login successful");
			setIsLoading(false);
			setTimeout(() => {
				if (userInfo.role === "ADMIN") {
					navigate("/admin/dashboard");
				} else {
					navigate("/dashboard");
				}
			}, 3000);
			setUserInfo({
				email: "",
				password: "",
				role: "",
			});
		}, 5000);
	};

	useEffect(() => {
		setError((prev) => ({
			...prev,
			email: "",
			password: "",
			role: "",
		}));
	}, [userInfo.email, userInfo.password, userInfo.role]);

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
				<p>{error.password}</p>
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
				<p>{error.role}</p>
			</div>
			{/* <button type="submit">
				{isLoading ? "Submitting.." : "Submit"}
			</button> */}
			<button type="submit">
				{isLoading ? (
					<ClipLoader
						color={"#fff"}
						loading={isLoading}
						size={30}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				) : (
					"Submit"
				)}
			</button>
		</form>
	);
};

export default Login;
