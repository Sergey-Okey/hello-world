import '../assets/css/modal.css'

export const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) return null
	const handleFormSubmit = (event) => {
		event.preventDefault()
		onClose()
	}
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-title">
					<h2>Login in</h2>
					<span className="close" onClick={onClose}>&times;</span>
				</div>
				<form onSubmit={handleFormSubmit}>
					<label htmlFor="username">Name:</label>
					<input type="text" id="username" name="username" required />
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" required />
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" required />
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};
