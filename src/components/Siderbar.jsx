import { Link } from "react-router-dom"

export default function Siderbar() {
	return (
		<div className="sidebar">
			<nav>
				<Link to="/">Главная</Link>
				<Link to="/">О нас</Link>
				<Link to="/">Контакты</Link>
			</nav>
		</div>
	)
}