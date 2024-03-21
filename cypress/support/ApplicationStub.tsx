import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import '../../src/index.css';
import Root from '../../src/pages/Root';

const ApplicationStub = ({ children, loader }) => {
	const router = createMemoryRouter([
		{
			path: '/',
			element: <Root />,
			children: [
				{ path: '/', element: children, loader },
				{
					path: '/shop',
					element: children,
					loader,
				},
				{
					path: '/checkout',
					element: children,
					loader,
				},
			],
		},
	]);
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default ApplicationStub;
