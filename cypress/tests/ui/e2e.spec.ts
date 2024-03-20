// https://docs.cypress.io/guides/overview/why-cypress
describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Should render correctly', () => {
		cy.getBySel('home-msg')
			.should('be.visible')
			.and('have.text', 'Come see our products');
	});
});

describe('Shop Page', () => {
	beforeEach(() => {
		cy.visit('/shop');
	});
	it('Should render correctly', () => {
		cy.getBySel('products-container').should('be.visible');
	});
});
