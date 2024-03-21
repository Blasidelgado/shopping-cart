import { createBrowserRouter } from 'react-router-dom';

import Checkout from '@/pages/checkout/Checkout';
import Shop from '@/pages/shop/Shop';

import Root from '@pages/Root';
import Home from '@pages/home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/shop',
				element: <Shop />,
			},
			{
				path: '/checkout',
				element: <Checkout />,
			},
		],
	},
]);

export default router;
