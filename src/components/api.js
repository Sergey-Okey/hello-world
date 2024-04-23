export const fetchRandomPosts = async () => {
	try {
		// Выполняем GET-запрос к API для получения списка всех постов
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');

		// Проверяем статус ответа
		if (!response.ok) {
			throw new Error('Ошибка при загрузке постов');
		}

		// Преобразуем ответ в формат JSON
		const allPosts = await response.json();

		// Генерируем случайное число от 0 до длины массива постов
		const randomIndex = Math.floor(Math.random() * allPosts.length);

		// Извлекаем случайный пост из массива
		const randomPost = allPosts[randomIndex];

		// Возвращаем случайный пост
		return randomPost;
	} catch (error) {
		// Если произошла ошибка при выполнении запроса, выводим ее в консоль
		console.error('Ошибка при получении постов:', error);
		// Возвращаем null, чтобы указать на ошибку
		return null;
	}
};