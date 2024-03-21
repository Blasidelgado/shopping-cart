import Shop from '../Shop';

describe('<Shop />', () => {
	it('mounts', () => {
		cy.mountApplication(<Shop />, {
			applicationStubProps: {},
		});
		cy.getBySelLike('products-container').should('exist');
	});
});
