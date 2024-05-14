export const getPosts = async () => {
	try {
		const response = await fetch('https://thankful-cactus-ecfa1b2c2c.strapiapp.com/api/posts');
		if (!response.ok) {
			throw new Error('Ошибка при загрузке постов');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Ошибка при получении постов:', error);
		return { data: [] };
	}
};
