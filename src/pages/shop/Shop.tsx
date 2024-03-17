import { useOutletContext } from 'react-router-dom';

export type ProductType = {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export default function Shop() {
	const [products, setProducts] = useOutletContext() as [ProductType[], any];
	console.log(products);
	return (
		<section className="flex items-center justify-center h-screen">
			<ul>
				{products?.map((product) => {
					return <li key={product.id}>{product.title}</li>;
				})}
			</ul>
		</section>
	);
}
