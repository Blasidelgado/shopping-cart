import { useOutletContext } from 'react-router-dom';

import { ProductType } from '../shop/Shop';

export default function Checkout() {
	const [, , cart] = useOutletContext() as [ProductType[], any, ProductType[]];
	const total = cart.reduce(
		(acc, product) => acc + product.price * product.amount,
		0,
	);
	return (
		<section>
			<ul>
				{cart.map((product) => (
					<li key={product.id}>
						Product: {product.title}, Amount: {product.amount}, Subtotal:{' '}
						{product.price * product.amount}
					</li>
				))}
			</ul>
			<h4>Total is: {total}</h4>
			<button type="button">Buy cart items</button>
		</section>
	);
}
