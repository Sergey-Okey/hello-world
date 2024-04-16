import { Link } from "react-router-dom"
import '../assets/css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGrid2 } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function Siderbar() {
	return (
		<div className="sidebar">
			<span><FontAwesomeIcon icon={faArrowTrendUp} /><Link to="/">Популярное</Link></span>
			<span><FontAwesomeIcon icon={faMugHot} /><Link to="/">Свежее</Link></span>
			<span><FontAwesomeIcon icon={faBriefcase} /><Link to="/">Вакансии</Link></span>
			<span><FontAwesomeIcon icon={faGrid2} /><Link to="/">Каналы</Link></span>
			<span><FontAwesomeIcon icon={faBookmark} /><Link to="/">Сохраненные</Link></span>
			<span><Link to="/">Темы</Link></span>
		</div>
	)
}