import { render, screen } from '@testing-library/react';

import App from '../App';

// https://www.robinwieruch.de/react-testing-library/
// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
describe('App', () => {
	it('renders "Hello world!"', () => {
		render(<App />);

		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
		expect(screen.getByText('Hello world!')).toBeInTheDocument();
	});
});
