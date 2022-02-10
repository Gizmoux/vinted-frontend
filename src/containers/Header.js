import Logo from '../assets/images/vinted-logo.png';
import { Link } from 'react-router-dom';
const Header = ({ token, setUser }) => {
	return (
		<div className="header">
			<img src={Logo} alt="Logo Vinted" className="logo" />
			<input
				type="text"
				placeholder="Recherche un article"
				className="search"
			/>
			{token !== null ? (
				<button
					onClick={() => {
						setUser(null);
					}}
				>
					Se déconnecter
				</button>
			) : (
				<>
					<Link to="/login">Se connecter</Link>
					<br />
					<Link to="/signup">S'inscrire</Link>
				</>
			)}

			{/* <button className="header-buttons">S'inscrire</button>

			<button className="header-buttons">Se connecter</button>
			<button className="button-sell">Vends tes articles</button> */}
		</div>
	);
};
export default Header;
