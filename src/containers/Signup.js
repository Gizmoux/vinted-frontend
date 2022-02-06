import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [data, setData] = useState();

	const handleEmailChange = event => {
		const value = event.target.value;
		setEmail(value);
	};
	const handleNameChange = event => {
		const value = event.target.value;
		setName(value);
	};

	const handlePasswordChange = event => {
		const value = event.target.value;
		setPassword(value);
	};

	const handleSubmit = async event => {
		event.preventDefault();
		// console.log(name, email, password);
		try {
			const response = await axios.post(
				'https://lereacteur-vinted-api.herokuapp.com/user/signup',
				{
					name: name,
					email: email,
					password: password,
				}
			);
			console.log(response.data);
			setData(response.data);
			const token = response.data.token;
			Cookies.set('token', token, { expires: 7 });
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<div>
			<h1>S'inscrire</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					onChange={handleNameChange}
					value={name}
					placeholder="Nom d'utilisateur"
				/>
				<br />
				<input
					type="email"
					name="email"
					onChange={handleEmailChange}
					value={email}
					placeholder="Email"
				/>
				<br />
				<input
					type="password"
					name="password"
					onChange={handlePasswordChange}
					value={password}
					placeholder="Mot de passe"
				/>
				<br />
				<button onClick={handleSubmit}>S'inscrire</button>
			</form>
			<Link to="/login">déjà un compte ?</Link>
		</div>
	);
};
export default Signup;
