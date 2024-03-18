import { useOutletContext } from 'react-router-dom';

import Product from '@/components/product/Product';
import { ProductType } from '@/types';

export default function Shop() {
	const [products, handleAddCart] = useOutletContext() as [
		ProductType[],
		(product: ProductType, amount: number) => void,
	];
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{products.map((product) => {
				return (
					<Product key={product.id} product={product} onClick={handleAddCart} />
				);
			})}
		</section>
	);
}
