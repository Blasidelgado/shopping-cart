import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import getProducts from '@/services';
import { ProductType } from '@/types';

import Navbar from '@components/navbar/Navbar';

export default function Root() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [cart, setCart] = useState<ProductType[]>([]);
	const [isPending, setIsPending] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	const {
		isLoading,
		isError: queryIsError,
		data,
		error,
	} = useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
	});

	// Update states based on query status
	useEffect(() => {
		setIsPending(isLoading);
		setIsError(queryIsError);
		if (!isLoading && !queryIsError && data) {
			setProducts(data);
		}
	}, [isLoading, queryIsError, data]);

	const updateAmount = (id: number, amount: number) => {
		setCart(
			cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						amount: (product.amount || 0) + amount,
					};
				}
				return product;
			}),
		);
	};

	const handleAddCart = (newProduct: ProductType, amount: number) => {
		const { id } = newProduct;
		const product = cart.find((product) => product.id === id);
		// Product already in cart
		if (product) {
			updateAmount(id, amount);
		} else {
			// Product not in cart
			setCart([
				...cart,
				{
					...newProduct,
					amount,
				},
			]);
		}
	};

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div className="error-message">Error: {error?.message}</div>;
	}

	return (
		<>
			<Navbar cartCount={cart.length} />
			<main id="pages">
				<Outlet context={[products, handleAddCart, cart]} />
			</main>
		</>
	);
}
