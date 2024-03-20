// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax:
// require('./commands')
import { mount } from 'cypress/react18';

import ApplicationStub from './ApplicationStub.tsx';
import './commands';

const mountApplicationDefaultOptions = {
	viewport: [1920, 1080],
	applicationStubProps: {
		loader: () => {
			console.log('loader fired');
		},
	},
};

Cypress.Commands.add('mountApplication', (component, options) => {
	const consolidatedOptions = {
		...mountApplicationDefaultOptions,
		...options,
	};
	cy.viewport(...(consolidatedOptions.viewport as [number, number]));
	return mount(
		<ApplicationStub {...consolidatedOptions.applicationStubProps}>
			{component}
		</ApplicationStub>,
	);
});
