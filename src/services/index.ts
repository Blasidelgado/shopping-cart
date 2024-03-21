import { ProductType } from '@/types';

const getProducts = async (): Promise<ProductType[]> => {
	const response = await fetch('https://fakestoreapi.com/products');
	if (!response.ok) {
		throw new Error('Failed to fetch products');
	}
	const products: ProductType[] = await response.json();
	return products;
};

export default getProducts;
