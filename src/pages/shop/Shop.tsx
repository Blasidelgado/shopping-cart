import { useOutletContext } from 'react-router-dom';

import Product from '@/components/product/Product';

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
	amount?: number;
};

export default function Shop() {
	const [products, handleAddCart] = useOutletContext() as [ProductType[], any];
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{products?.map((product) => {
				return (
					<Product key={product.id} product={product} onClick={handleAddCart} />
				);
			})}
		</section>
	);
}
