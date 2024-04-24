export const fetchRandomPosts = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		if (!response.ok) {
			throw new Error('Ошибка при загрузке постов')
		}
		const allPosts = await response.json()
		const randomIndex = Math.floor(Math.random() * allPosts.length)
		const randomPost = allPosts[randomIndex]
		return randomPost
	} catch (error) {
		console.error('Ошибка при получении постов:', error)
		return null
	}
}