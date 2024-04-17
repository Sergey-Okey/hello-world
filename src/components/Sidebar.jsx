import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../assets/css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

export default function Siderbar() {
	return (
		<div className="sidebar">
			<Link to="/pages/Popular.jsx" >
				<FontAwesomeIcon icon={faArrowTrendUp} /> Популярное
			</Link>
			<Link to="/pages/Fresh.jsx">
				<FontAwesomeIcon icon={faMugHot} /> Свежее
			</Link>
			<Link to="/pages/Jobs.jsx">
				<FontAwesomeIcon icon={faBriefcase} /> Вакансии
			</Link>
			<Link to="/pages/Channels.jsx">
				<FontAwesomeIcon icon={faPaperPlane} /> Каналы
			</Link>
			<Link to="/pages/Saved.jsx">
				<FontAwesomeIcon icon={faBookmark} /> Сохраненные
			</Link>
			<Link to="/pages/Topics.jsx">
				<FontAwesomeIcon icon={faHashtag} /> Темы
			</Link>
		</div>
	)
}