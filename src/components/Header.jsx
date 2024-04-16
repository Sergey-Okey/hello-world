import { Link } from 'react-router-dom'
import '../assets/css/header.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Siderbar from './Sidebar'


export default function Header() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	return (
		<>

			<header>
				<nav>
					<div className="logo">
						<FontAwesomeIcon icon={isSidebarVisible ? faXmark : faBars}
							style={{ fontSize: '30px', cursor: 'pointer' }}
							onClick={() => setIsSidebarVisible(!isSidebarVisible)} />
					</div>
					<Link to="/"><span className='logo'>Hello World</span></Link>
					<button><Link to="/" className='login'>Login</Link></button>
				</nav>
			</header>
			{isSidebarVisible && <Siderbar />}
		</>
	)
}