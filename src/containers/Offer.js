import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Offer = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(
				`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
			);
			// console.log(response.data);
			setData(response.data);
			setIsLoading(false);
		};
		fetchData();
	}, [id]);
	return isLoading ? (
		<p>En cours de chargement</p>
	) : (
		<div>
			<h2>{data.product_name}</h2>
			<span>{data.product_price}</span>
			<img src={data.product_image.secure_url} alt={data.product_name} />
			{data.product_details.map((elem, index) => {
				const keys = Object.keys(elem); // ["TAILLE"]
				return (
					<div key={index}>
						<span>{keys[0]}</span>
						<span>{elem[keys[0]]}</span>
					</div>
				);
			})}
		</div>
	);
};
export default Offer;
