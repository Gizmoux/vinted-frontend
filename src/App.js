import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
//Pages
import Home from './containers/Home';
import Offer from './containers/Offer';
import Header from './containers/Header';
import Signup from './containers/Signup';
import Login from './containers/Login';

function App() {
	const [token, setToken] = useState(Cookies.get('userToken') || null);

	const setUser = token => {
		//Quand je veux me connecter, je ferais un setUser("20DJKN3NCJCK3N3N3?NCC")
		//Quand je veux me déconnecter, je ferais un setUser(null)

		if (token !== null) {
			Cookies.set('userToken', token);
		} else {
			Cookies.remove('userToken');
		}

		setToken(token);
	};
	return (
		<div>
			<Router>
				<Header token={token} setUser={setUser} />
				<nav>
					<Link to="/">Home </Link>
				</nav>
				{/* <button onClick={() => navigate('/signup')}> S'inscrire</button> */}
				<Routes>
					{/* <Link to="/signup">Go to Signup Page</Link> */}
					<Route path="/" element={<Home />} />
					<Route path="/offer/:id" element={<Offer />} />
					<Route path="/signup" element={<Signup setUser={setUser} />} />
					<Route path="/login" element={<Login setUser={setUser} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
