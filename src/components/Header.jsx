import { Link } from 'react-router-dom'
import '../assets/css/header.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Siderbar from './Sidebar'


export default function Header() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	return (
		<>

			<header>
				<nav>
					<FontAwesomeIcon icon={faBars} style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsSidebarVisible(!isSidebarVisible)} />
					<Link to="/"><span className='logo'>Hello World</span></Link>
					<button><Link to="/" className='login'>Login</Link></button>
				</nav>
			</header>
			{isSidebarVisible && <Siderbar />}
		</>
	)
}