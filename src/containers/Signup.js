import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = ({ setUser }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const [data, setData] = useState('');

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
			event.preventDefault();
			const response = await axios.post(
				'https://lereacteur-vinted-api.herokuapp.com/user/signup',
				{
					name: name,
					email: email,
					password: password,
				}
			);
			if (response.data.token) {
				//   console.log(response.data);
				// Créer un cookie pour enregistrer le token
				setUser(response.data.token);
				// Naviguer vers Home
				navigate('/');
			}
		} catch (error) {
			console.log(error.response);
			console.log(error.message);
			if (error.response.status === 409) {
				setErrorMessage('Cet email a déjà un compte');
			}
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="form-signup">
				<h3>S'inscrire</h3>
				<input
					type="text"
					name="name"
					onChange={handleNameChange}
					value={name}
					placeholder="Nom d'utilisateur"
				/>

				<input
					type="email"
					name="email"
					onChange={handleEmailChange}
					value={email}
					placeholder="Email"
				/>

				<input
					type="password"
					name="password"
					onChange={handlePasswordChange}
					value={password}
					placeholder="Mot de passe"
				/>
				<label>
					<input type="checkbox" />
					S'inscrire à notre newsletter
				</label>
				<p className="p-form-login">
					En m'inscrivant je confirme avoir lu et accepté les termes et
					conditions et Politique de Confidentialité de Vinted. Je confirme
					avoir au moins 18 ans
				</p>

				{/* <button onClick={handleSubmit}>S'inscrire</button>
				<Link to="/login">Tu as déjà un compte? Connecte-toi!</Link> */}
				<span style={{ color: 'red' }}>{errorMessage}</span>
				<br />
				<input type="submit" value={"S'inscrire"} />
			</form>
		</div>
	);
};
export default Signup;
