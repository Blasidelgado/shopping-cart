import { useState } from 'react';

import { ProductProps } from '@/types';

export default function Product({ product, onClick }: ProductProps) {
	const [amount, setAmount] = useState(0);

	return (
		<article
			id={product.id + ''}
			className="product-card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
		>
			<img
				className="w-full h-80 object-cover rounded-t-lg"
				src={product.image}
				alt={product.title}
			/>
			<div className="px-5 pb-5">
				<a href="#">
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{product.title}
					</h5>
				</a>
				<div className="flex items-center mt-2.5 mb-5">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						${product.price}
					</span>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Buy:
					</label>
					<input
						type="number"
						className="add-amount bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						placeholder="Select quantity"
						value={amount}
						min={1}
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
				</div>
				<div className="mt-4 flex items-center justify-center">
					<button
						type="button"
						className="add-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={() => onClick(product, amount)}
					>
						Add to cart
					</button>
				</div>
			</div>
		</article>
	);
}
