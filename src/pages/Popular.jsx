import '../assets/css/popular.css'
import { useEffect, useState } from 'react'
import { fetchRandomPosts } from '../components/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faEye } from '@fortawesome/free-solid-svg-icons'
import LoadingIndicator from '../components/LoadingIndicator'

export default function Popular() {
	const [randomPosts, setRandomPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const posts = [];
				for (let i = 0; i < 10; i++) {
					const post = await fetchRandomPosts()
					post.likes = Math.floor(Math.random() * 1000)
					post.comments = Math.floor(Math.random() * 1000)
					post.views = Math.floor(Math.random() * 10000)
					posts.push(post)
				}
				setRandomPosts(posts)
				setLoading(false)
			} catch (error) {
				console.error('Ошибка при получении случайных постов:', error)
			}
		};

		fetchData()
	}, []);

	return (
		<div className="container">
			<div className="content">
				{loading ? (
					<LoadingIndicator />
				) : (
					randomPosts.map((post, index) => (
						<div key={index} className='post-item'>
							<h2>{post.title} {post.id}</h2>
							<p>{post.body}</p>
							<img src={post.img || 'https://via.placeholder.com/100%'} alt="Placeholder" />
							<div className="post-info">
								<div className="comment">
									<span><FontAwesomeIcon icon={faThumbsUp} /> {post.likes}</span>
									<span><FontAwesomeIcon icon={faComment} /> {post.comments}</span>
								</div>
								<div className="views">
									<span><FontAwesomeIcon icon={faEye} /> {post.views}</span>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}