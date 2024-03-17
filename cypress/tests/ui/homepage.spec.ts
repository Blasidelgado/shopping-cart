// https://docs.cypress.io/guides/overview/why-cypress
describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Should render correctly', () => {
		cy.getBySel('home-msg')
			.should('be.visible')
			.and('have.text', 'This is the homepage!');
	});
});

describe('Shop page', () => {
	beforeEach(() => {
		cy.visit('/shop');
	});
	it('Should render correctly', () => {
		cy.getBySel('shop-msg')
			.should('be.visible')
			.and('have.text', 'This is the shopping page!');
	});
});
