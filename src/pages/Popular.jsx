import '../assets/css/popular.css'
import { useEffect, useState } from 'react'
import { fetchRandomPosts } from '../components/api'

export default function Popular() {
	const [randomPost, setRandomPost] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const post = await fetchRandomPosts()
				setRandomPost(post)
			} catch (error) {
				console.error('Ошибка при получении случайного поста:', error)
			}
		};

		fetchData()
	}, []);

	return (
		<div className="container">
			<div className="popular">
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
				{randomPost && (
					<div className='post-item'>
						<h2>{randomPost.title}</h2>
						<p>{randomPost.body}</p>
					</div>
				)}
			</div>
		</div>
	);
}