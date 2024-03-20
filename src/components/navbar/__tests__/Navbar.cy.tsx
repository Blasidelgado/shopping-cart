import { mount } from '@cypress/react18';
import { MemoryRouter } from 'react-router';

import Navbar from '../Navbar';

describe('<Navbar />', () => {
	beforeEach(() => {
		cy.intercept('GET', 'https://fakestoreapi.com/products', {
			statusCode: 200,
			body: [],
		}).as('fakeStoreProducts');
	});

	it('renders without errors', () => {
		cy.viewport(1920, 1080);

		mount(
			<MemoryRouter>
				<Navbar cartCount={0} />
			</MemoryRouter>,
		);

		cy.get('#navbar').should('exist');
		cy.get('#navbar-logo').should('exist');

		cy.get('#navbar-toggle').should('not.be.visible');
		cy.get('#navbar-links').should('be.visible');

		cy.viewport('iphone-xr');

		cy.get('#navbar-toggle').should('be.visible');
		cy.get('#navbar-links').should('not.be.visible');

		cy.get('#navbar-toggle').click().should('be.visible');
		cy.get('#navbar-links').should('be.visible');
	});

	it('updates cart count', () => {
		const mountNavbarWithProps = (cartCount: number) => {
			mount(
				<MemoryRouter>
					<Navbar cartCount={cartCount} />
				</MemoryRouter>,
			);
		};

		mountNavbarWithProps(0);
		cy.get('#navbar-cart-count').should('have.text', '0');

		mountNavbarWithProps(5);
		cy.get('#navbar-cart-count').should('have.text', '5');

		mountNavbarWithProps(10);
		cy.get('#navbar-cart-count').should('have.text', '10');
	});
});
