import { useOutletContext } from 'react-router-dom';

import Product from '@/components/product/Product';
import { ProductType } from '@/types';

export default function Shop() {
	console.log(useOutletContext());
	const [products, handleAddCart] = useOutletContext() as [
		ProductType[],
		(newProduct: ProductType, amount: number) => void,
		ProductType[],
	];

	return (
		<section
			data-test="products-container"
			className="main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
		>
			{products.map((product) => {
				return (
					<Product key={product.id} product={product} onClick={handleAddCart} />
				);
			})}
		</section>
	);
}
