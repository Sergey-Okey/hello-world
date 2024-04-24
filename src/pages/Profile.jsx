import '../assets/css/profile.css'


import { useState, useEffect } from 'react';

export default function TestProfile() {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await fetch('https://randomuser.me/api/');
				const data = await response.json();
				const userData = data.results[0];
				const userProfile = {
					name: `${userData.name.first} ${userData.name.last}`,
					email: userData.email,
					phone: userData.phone,
					website: userData.website,
					avatar: userData.picture.large
				};
				setProfile(userProfile);
			} catch (error) {
				console.error('Error fetching profile:', error);
			}
		};

		fetchProfile();
	}, []);

	return (
		<div className='container'>
		<div className="content">
			{profile ? (
				<div className='profile'>
					<h2>Test Profile</h2>
					<img src={profile.avatar} className='avatar' alt="Avatar" />
					<p>Name: {profile.name}</p>
					<p>Email: {profile.email}</p>
					<p>Phone: {profile.phone}</p>
					<p>Website: {profile.website}</p>
				</div>
			) : (
				<p>Loading profile...</p>
			)}
			</div>
		</div>
	);
}
