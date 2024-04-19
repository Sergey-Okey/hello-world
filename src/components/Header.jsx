import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/header.css';
import Logo from '../assets/images/logo.svg';

export default function Header() {
	const modalLogin = () => {
		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');

		return (
			<div className="modal-login">
				<form action="">
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="submit">Login</button>
				</form>
			</div>
		);
	};

	return (
		<>
			<header>
				<nav>
					<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>
					<Link to="/pages/Fresh.jsx"><span className='logo-text'>Hello World</span></Link>
					<button><Link className={modalLogin}>Login</Link></button>
				</nav>
			</header>
		</>
	);
}