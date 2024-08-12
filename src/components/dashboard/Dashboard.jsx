import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Dashboard.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Dashboard = () => {
	const userData = localStorage.getItem("user");
	const convertedUserData = JSON.parse(userData);
	console.log(convertedUserData);
	const { role, email } = convertedUserData;

	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	const [showConfirmLogout, setShowConfirmLogout] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		setShowConfirmLogout(true);
	};

	const handleConfirmLogout = () => {
		localStorage.removeItem("user");
		navigate("/");
		toast.success("Logged out successfully");
		onCloseModal();
	};

	const handleCancelLogout = () => {
		onCloseModal();
	};

	return (
		<>
			<div className="dashboard">
				<div className="sidebar">
					<h1>Logo</h1>
					{role === "ADMIN" ? (
						<div className="links">
							<div className="route">Vendors</div>
							<div className="route">Orders</div>
							<div className="route">Reports</div>
							<div className="route">Settings</div>
							<div className="logout" onClick={onOpenModal}>
								Logout
							</div>
						</div>
					) : (
						<div className="links">
							<div className="route">Vendors</div>
							<div className="route">Settings</div>
							<div
								className="logout"
								onClick={() => setShowConfirmLogout(true)}
							>
								Logout
							</div>
						</div>
					)}
				</div>
				<div className="container">
					<div className="header">
						<p>Welcome back, {email}</p>
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
			<Modal open={open} onClose={onCloseModal} center>
				<div className="modal">
					<p>Are you sure you want to logout?</p>
					<div className="modal-btn">
						<button onClick={handleConfirmLogout}>Yes</button>
						<button onClick={handleCancelLogout}>Cancel</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Dashboard;
