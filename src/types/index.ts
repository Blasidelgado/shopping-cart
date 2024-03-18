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

export interface NavbarProps {
	cartCount: number;
}

export interface ProductProps {
	product: ProductType;
	onClick: (product: ProductType, amount: number) => void;
}
