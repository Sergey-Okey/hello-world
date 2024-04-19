import { Link } from 'react-router-dom';

import '../assets/css/header.css';
import Logo from '../assets/images/logo.svg';

export default function Header(toggleModal) {
	return (
		<>
			<header>
				<nav>
					<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>
					<Link to="/pages/Fresh.jsx"><span className='logo-text'>Hello World</span></Link>
					<button onClick={toggleModal}>Login</button>
				</nav>
			</header>
		</>
	);
}
