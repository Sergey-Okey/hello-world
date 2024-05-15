import { useEffect, useState } from 'react'
import { getPosts } from '../components/api'
import LoadingIndicator from '../components/LoadingIndicator'
import '../assets/css/fresh.css'

export default function Fresh() {
	const [loading, setLoading] = useState(true)
	const [freshPosts, setFreshPosts] = useState([])

	useEffect(() => {
		const fetchFreshPosts = async () => {
			try {
				const response = await getPosts()
				console.log('Response from API:', response)
				if (response && response.data) {
					const currentDate = new Date()
					console.log('Current Date:', currentDate)
					const filteredPosts = response.data.filter(post => {
						const postDate = new Date(post.attributes.Date)
						const oneDayAgo = new Date(currentDate)
						oneDayAgo.setDate(currentDate.getDate() - 1) // Один день назад
						return postDate > oneDayAgo
					})
					console.log('Filtered Posts:', filteredPosts)
					setFreshPosts(filteredPosts)
					setLoading(false)
				} else {
					console.error('Отсутствует ожидаемое свойство "data" в ответе:', response)
				}
			} catch (error) {
				console.error('Ошибка при получении постов:', error)
			}
		}

		fetchFreshPosts()
	}, [])

	return (
		<div className="container">
			<div className="content">
				{loading ? (
					<LoadingIndicator />
				) : (
					Array.isArray(freshPosts) && freshPosts.length > 0 ? (
						<div className="posts">
							{freshPosts.map((post, index) => (
								<div className="post-item" key={index}>
									<div className="post-title">
										<h2>{post.attributes.Title}</h2>
										<span>{post.attributes.Date}</span>
									</div>
									<p>{post.attributes.Content}</p>
									{post.media && <img src={post.media} alt={post.id} />}
								</div>
							))}
						</div>
					) : (
						<p>Нет свежих постов на сегодня</p>
					)
				)}
			</div>
		</div>
	)
}
