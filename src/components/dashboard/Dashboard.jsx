import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
	const userData = localStorage.getItem("user");
	const convertedUserData = JSON.parse(userData);
	console.log(convertedUserData);

	const { role, email } = convertedUserData;

	return (
		<div className="dashboard">
			<div className="sidebar">
				<h1>Logo</h1>
				{role === "ADMIN" ? (
					<div className="links">
						<div className="route">Vendors</div>
						<div className="route">Orders</div>
						<div className="route">Reports</div>
						<div className="route">Settings</div>
					</div>
				) : (
					<div className="links">
						<div className="route">Vendors</div>
						<div className="route">Settings</div>
					</div>
				)}
			</div>
			<div className="container">
				<div className="header">
					{role === "ADMIN" ? (
						<p>Welcome back, {email}</p>
					) : (
						<p>Welcome back, {email}</p>
					)}
				</div>
				<div className="content">
					<div className="view">
						{role === "ADMIN" ? (
							<h1>Welcome to the Admin Dashboard</h1>
						) : (
							<h1>Welcome to the User Dashboard</h1>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
