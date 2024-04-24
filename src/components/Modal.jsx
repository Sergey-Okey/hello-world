import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/modal.css';

export const Modal = ({ isOpen, onClose }) => {
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const handleLoginSubmit = async event => {
		event.preventDefault();
		const formData = {
			email: event.target.email.value,
			password: event.target.password.value
		};

		try {
			const response = await fetch('your-login-endpoint', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error('Authentication failed');
			}

			const userData = await response.json();
			localStorage.setItem('userData', JSON.stringify(userData));
			onClose();
		} catch (error) {
			console.error('Authentication error:', error);
			setErrorMessage('Authentication failed. Please try again.');
		}
	};

	const handleRegisterSubmit = async event => {
		event.preventDefault();
		const formData = {
			username: event.target.username.value,
			email: event.target.email.value,
			password: event.target.password.value
		};

		try {
			const response = await fetch('your-registration-endpoint', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error('Registration failed');
			}

			setSuccessMessage('Registration successful. You can now login.');
			setIsRegisterModalOpen(false);
		} catch (error) {
			console.error('Registration error:', error);
			setErrorMessage('Registration failed. Please try again.');
		}
	};
	// Register Compled
	const handleRegisterLinkClick = () => {
		setIsRegisterModalOpen(true);
		setErrorMessage('');
		setSuccessMessage('');
	};

	const handleRegisterModalClose = () => {
		setIsRegisterModalOpen(false);
		setErrorMessage('');
		setSuccessMessage('');
	};

	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-title">
					<h2>Login in</h2>
					<span className="close" onClick={onClose}>&times;</span>
				</div>
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				<form onSubmit={handleLoginSubmit}>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" required />
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" required />
					<button type="submit">Login</button>
				</form>
				<p>Dont have an account? <span className="register-link" onClick={handleRegisterLinkClick}><Link className='registr'>Register</Link></span></p>
			</div>
			{isRegisterModalOpen && (
				<div className="modal">
					<div className="modal-content">
						<div className="modal-title">
							<h2>Register</h2>
							<span className="close" onClick={handleRegisterModalClose}>&times;</span>
						</div>
						{errorMessage && <p className="error-message">{errorMessage}</p>}
						{successMessage && <p className="success-message">{successMessage}</p>}
						<form onSubmit={handleRegisterSubmit}>
							<label htmlFor="username">Name:</label>
							<input type="text" id="username" name="username" required />
							<label htmlFor="email">Email:</label>
							<input type="email" id="email" name="email" required />
							<label htmlFor="password">Password:</label>
							<input type="password" id="password" name="password" required />
							<button type="submit">Register</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};
