import Logo from '../assets/images/vinted-logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
	// const navigate = useNavigate();
	return (
		<div className="header">
			<div>{/* <Link to="/signup">s'inscrire</Link> */}</div>
			<img src={Logo} alt="Logo Vinted" className="logo" />
			<input
				type="text"
				placeholder="Recherche un article"
				className="search"
			/>
			{/* <button onClick={() => navigate('/signup')}> S'inscrire</button> */}
			<button>S'inscrire</button>
			{/* <Link to="/signup">s'inscrire</Link> */}
			<button>Se connecter</button>
			<button>Vends tes articles</button>
		</div>
	);
};
export default Header;
