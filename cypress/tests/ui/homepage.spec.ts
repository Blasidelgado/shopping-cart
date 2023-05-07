// https://docs.cypress.io/guides/overview/why-cypress
describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Should render correctly', () => {
		cy.getBySel('header-msg')
			.should('be.visible')
			.and('have.text', 'Hello world!');
	});
});
