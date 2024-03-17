import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ProductType } from './shop/Shop';

import getProducts from '@/services';

import Navbar from '@components/navbar/Navbar';

export default function Root() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isPending, setIsPending] = useState(false);
	const [isError, setIsError] = useState(false);

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
		if (!isLoading && !queryIsError) {
			setProducts(data);
		}
	}, [isLoading, queryIsError, data]);

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<>
			<Navbar productCount={products.length} />
			<main id="pages">
				<Outlet context={[products, setProducts]} />
			</main>
		</>
	);
}
