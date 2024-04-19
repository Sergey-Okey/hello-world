import '../assets/css/modal.css'

export default function Modal(closeModal, username, setUsername, password, setPassword) {
	return (
		<div className="modal-login">
			<form onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
