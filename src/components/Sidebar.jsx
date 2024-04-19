import { Link } from 'react-router-dom'
import '../assets/css/sidebar.css'
import { useState } from 'react'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faMugHot, faBriefcase, faPaperPlane, faBookmark, faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function Siderbar() {
	const [activeLink, setActiveLink] = useState(null);

	const handleLinkClick = (link) => {
		setActiveLink(link);
	};

	return (
		<div className="sidebar">
			<Link to="/pages/Popular.jsx" onClick={() => handleLinkClick('popular')} className={activeLink === 'popular' ? 'active' : ''}>
				<FontAwesomeIcon icon={faArrowTrendUp} /> Популярное
			</Link>
			<Link to="/pages/Fresh.jsx" onClick={() => handleLinkClick('fresh')} className={activeLink === 'fresh' ? 'active' : ''}>
				<FontAwesomeIcon icon={faMugHot} /> Свежее
			</Link>
			<Link to="/pages/Jobs.jsx" onClick={() => handleLinkClick('jobs')} className={activeLink === 'jobs' ? 'active' : ''}>
				<FontAwesomeIcon icon={faBriefcase} /> Вакансии
			</Link>
			<Link to="/pages/Channels.jsx" onClick={() => handleLinkClick('channels')} className={activeLink === 'channels' ? 'active' : ''}>
				<FontAwesomeIcon icon={faPaperPlane} /> Каналы
			</Link>
			<Link to="/pages/Saved.jsx" onClick={() => handleLinkClick('saved')} className={activeLink === 'saved' ? 'active' : ''}>
				<FontAwesomeIcon icon={faBookmark} /> Сохраненные
			</Link>
			<Link to="/pages/Topics.jsx" onClick={() => handleLinkClick('topics')} className={activeLink === 'topics' ? 'active' : ''}>
				<FontAwesomeIcon icon={faHashtag} /> Темы
			</Link>
		</div>
	)
}