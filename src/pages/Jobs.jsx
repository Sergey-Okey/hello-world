import { useState, useEffect } from 'react'
import '../assets/css/jobs.css'
import LoadingIndicator from '../components/LoadingIndicator'

export default function Jobs() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(false)
	}, [])

	return (
		<div className="container">
			<div className="content">
				{loading ? (
					<LoadingIndicator />
				) : (
					<h1>Jobs</h1>
				)}
			</div>
		</div>
	);
}
