import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Offer from './containers/Offer';
import Header from './containers/Header';
import Signup from './containers/Signup';

function App() {
	return (
		<div>
			<Header />

			<Router>
				<nav>
					<Link to="/">Home </Link>
					<Link to="/signup">s'inscrire</Link>
				</nav>
				{/* <button onClick={() => navigate('/signup')}> S'inscrire</button> */}
				<Routes>
					{/* <Link to="/signup">Go to Signup Page</Link> */}
					<Route path="/" element={<Home />} />
					<Route path="/offer/:id" element={<Offer />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
