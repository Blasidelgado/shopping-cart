describe('Home page if fetch successful', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Should render homepage', () => {
		cy.getBySel('home-msg')
			.should('be.visible')
			.and('have.text', 'Come see our products');
	});

	it('should display responsive navbar', () => {
		cy.get('#navbar').should('be.visible');
		cy.get('#navbar-logo')
			.should('exist')
			.click()
			.then(() => {
				cy.location('pathname').should('eq', '/');
			});
		cy.viewport(1920, 1080);
		cy.get('#navbar-toggle').should('not.be.visible');
		cy.get('#navbar-links').should('be.visible');

		cy.viewport('iphone-xr');
		cy.get('#navbar-links').should('not.be.visible');
		cy.get('#navbar-toggle').should('be.visible').click();
		cy.get('#navbar-links').should('be.visible');
	});

	it('navbar links should work', () => {
		cy.get('#navbar-links').find('a').first().click();
		cy.location('pathname').should('eq', '/');

		cy.get('#navbar-links').find('a').eq(1).click();
		cy.location('pathname').should('eq', '/shop');

		cy.get('#navbar-links').find('a').eq(2).click();
		cy.location('pathname').should('eq', '/checkout');
	});
});

describe('Error management', () => {
	it('Should render an error message', () => {
		cy.visit('/');

		cy.intercept('GET', 'https://fakestoreapi.com/products', {
			statusCode: 500,
			body: { error: 'Internal Server Error' },
		}).as('getProducts');

		cy.contains('Loading...').should('be.visible');

		cy.contains('Error: Failed to fetch products').should('be.visible');
	});
});

describe('Should render shop page correctly', () => {
	beforeEach(() => {
		cy.visit('/shop');
	});

	it('Should render correctly', () => {
		cy.getBySel('products-container').should('be.visible');
	});

	it('Should render products', () => {
		cy.get('.product-card').should('be.visible').should('have.length', 20);
	});
});

describe('Users can add products to cart', () => {
	beforeEach(() => {
		cy.visit('/shop');
	});

	it('add products to cart', () => {
		cy.get('.add-button').each(($button, index) => {
			if (index < 3) {
				cy.wrap($button).click();
			}
		});

		cy.get('#navbar-cart-count').should('have.text', '3');
	});

	it('updates cart product count', () => {
		cy.get('.add-button').each(($button, index) => {
			if (index < 2) {
				cy.wrap($button).click();
			}
		});

		cy.get('.product-card').eq(0).find('input').type('{selectall}').type('3');

		cy.get('.product-card').eq(0).find('.add-button').click();

		cy.get('#navbar-cart-count').should('have.text', '2');
	});
});
