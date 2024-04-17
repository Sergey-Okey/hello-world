import { Link } from 'react-router-dom'
import '../assets/css/header.css'

export default function Header() {
	return (
		<>
			<header>
				<nav>
					<div className="logo">
					</div>
					<Link to="/pages/Fresh.jsx"><span className='logo'>Hello World</span></Link>
					<button><Link className='login'>Login</Link></button>
				</nav>
			</header>
		</>
	)
}