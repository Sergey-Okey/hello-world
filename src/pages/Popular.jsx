import '../assets/css/popular.css';
import { useEffect, useState } from 'react';
import { getPosts } from '../components/api';
import LoadingIndicator from '../components/LoadingIndicator';

export default function Popular() {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getPosts();
				console.log('Response from API:', response);
				if (response && response.data) {
					setPosts(response.data);
					setLoading(false);
				} else {
					console.error('Отсутствует ожидаемое свойство "data" в ответе:', response);
				}
			} catch (error) {
				console.error('Ошибка при получении постов:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container">
			<div className="content">
				{loading ? (
					<LoadingIndicator />
				) : (
					Array.isArray(posts) && posts.length > 0 ? (
						posts.map((post) => (
							<div className="posts">
								<div className='post-item'>
									<div className="post-title">
										<h2>{post.attributes.Title}</h2>
										<span>{post.attributes.Date}</span>
									</div>
									<p>{post.attributes.Content}</p>
								</div>
							</div>
						))
					) : (
						<p>Данные не получены или отсутствуют</p>
					)
				)}
			</div>
		</div>
	);
}
