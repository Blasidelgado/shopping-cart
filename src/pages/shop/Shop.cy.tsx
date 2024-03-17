import Shop from './Shop';

describe('<Shop />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Shop />);
	});
});
