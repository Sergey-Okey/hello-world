import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../assets/css/header.css'
import Logo from '../assets/images/logo.svg'
import { Modal } from './Modal'

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<header>
				<nav>
					<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>
					<Link to="/pages/Fresh.jsx"><span className='logo-text'>Hello World</span></Link>
					<button onClick={openModal}>Login</button>
					<Modal isOpen={isModalOpen} onClose={closeModal} />
				</nav>
			</header>
		</>
	);
}
