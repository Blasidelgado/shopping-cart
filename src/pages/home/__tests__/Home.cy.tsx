import { MemoryRouter } from 'react-router-dom';

import Home from '@pages/home/Home';

describe('<Home>', () => {
	it('mounts and navigates to shop page', () => {
		cy.mount(
			<MemoryRouter>
				<Home />
			</MemoryRouter>,
		);
		cy.contains('Go to Shop').should('exist').click();
		cy.url().should('include', '/shop');
	});
});
