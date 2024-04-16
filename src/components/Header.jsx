import { Link } from "react-router-dom"

export default function Header() {
	return (
		<>
			<header>
			<div className="">
			</div>
				<nav>
					<Link to="/">Главная</Link>
					<Link to="/">О нас</Link>
					<Link to="/">Контакты</Link>
				</nav>
			</header>
		</>
	)
}
