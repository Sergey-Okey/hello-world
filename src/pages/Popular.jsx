import '../assets/css/popular.css';
import { useEffect, useState } from 'react';
import { fetchRandomPosts } from '../components/api';

export default function Popular() {
	const [randomPosts, setRandomPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const posts = [];
				// Получаем 10 случайных постов
				for (let i = 0; i < 20; i++) {
					const post = await fetchRandomPosts();
					posts.push(post);
				}
				setRandomPosts(posts);
			} catch (error) {
				console.error('Ошибка при получении случайных постов:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container">
			<div className="popular">
				{randomPosts.map((post, index) => (
					<div key={index} className='post-item'>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}
