import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banner from '../assets/images/hero-banner.jpg';

const Home = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	//useEffect: tableau vide qui permet d'exécuter la fonction une fois le chargement du composant
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				'https://lereacteur-vinted-api.herokuapp.com/offers'
			);
			// console.log(response.data);
			setData(response.data);
			setIsLoading(false);
		};
		fetchData();
	}, []);
	return isLoading ? (
		<p> IS LOADING </p>
	) : (
		<div className="product-main">
			{/* Aller chercher la clé de qqlch undefined => Error */}
			<div>
				<img src={Banner} alt="Banner" className="banner" />
			</div>
			{data.offers.map((offer, index) => {
				return (
					<nav className="product">
						{offer.owner.account.username}
						<Link to={`/offer/${offer._id}`} key={offer._id}>
							<div>
								<img
									src={offer.product_image.secure_url}
									alt={offer.product_name}
									className="images"
								/>
							</div>
						</Link>
						{offer.product_name} <br />
						{offer.product_price}€
					</nav>
				);
			})}
		</div>
	);
};
export default Home;
