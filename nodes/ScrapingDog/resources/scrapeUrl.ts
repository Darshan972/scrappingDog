import { ResourceDefinition} from '../types';
import { countries } from './staticResource';

export const scrapeUrlResource: ResourceDefinition = {
	displayName: 'Scrape URL',
	value: 'scrapeUrl',
	description: 'Scrape data from a URL',
	operations: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [
						'scrapeUrl',
					],
				},
			},
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Scrape URL',
					description: 'Scrape a URL',
				},
			],
			default: 'get',
		},
	],
	parameters: [
		{
			displayName: 'URL to Scrape',
			name: 'url',
			type: 'string',
			default: '',
			required: true,
			description: 'The URL you want to scrape',
			displayOptions: {
				show: {
					resource: [
						'scrapeUrl',
					],
				},
			},
		},
		{
			displayName: 'Javascript Rendering',
			name: 'dynamic',
			type: 'boolean',
			default: false,
			description: 'You can use this parameter for JS rendering',
			displayOptions: {
				show: {
					resource: ['scrapeUrl'],
					superProxy: [false],
				},
			},
		},
		{
			displayName: 'Premium',
			name: 'premium',
			type: 'boolean',
			default: false,
			description: 'When you want to use the premium residential proxy instead of the normal rotating proxy then you can use this parameter',
			displayOptions: {
				show: {
					resource: ['scrapeUrl'],
					superProxy: [false],
				},
			},
		},
		{
			displayName: 'Super Proxy',
			name: 'superProxy',
			type: 'boolean',
			default: false,
			description: 'Enable super proxy',
			displayOptions: {
				show: {
					resource: [
						'scrapeUrl',
					],
				},
			},
		},
		{
			displayName: 'Markdown',
			name: 'markdown',
			type: 'boolean',
			default: false,
			description: 'This parameter is used to get HTML data in the markdown format.',
			displayOptions: {
				show: {
					resource: [
						'scrapeUrl',
					],
				},
			},
		},
		{
			displayName: 'Wait (in ms)',
			name: 'wait',
			type: 'number',
			default: 0,
			description: 'wait parameter is a time in milliseconds that can be used with the combination of dynamic=true in order to wait and load the website completely.',
			displayOptions: {
				show: {
					resource: ['scrapeUrl'],
					dynamic: [true],
				}
			},
		},
		{
			displayName: 'Select Country',
			name: 'country',
			type: 'options',
			default: 'us',
			options: countries.map(country => ({
				name: country.name,
				value: country.value,
			})),
			description: 'This parameter helps you access the geotargeting feature.',
			displayOptions: {
				show: {
					premium: [true],
					resource: ['scrapeUrl'],
				}
			},
		},
		{
			displayName: 'Additional Fields',
			name: 'additionalFields',
			type: 'collection',
			default: {},
			placeholder: 'Add Field',
			displayOptions: {
				show: {
					resource: ['scrapeUrl'],
				},
			},
			options: [
				{
					displayName: 'AI Query',
					name: 'aiQuery',
					type: 'string',
					default: '',
					description: 'This parameter is used to pass the user prompt to get the AI-optimized response.',
				},
				{
					displayName: 'AI Extract Rules',
					name: 'aiExtractRules',
					type: 'string',
					default: '',
					description: 'This parameter is used to extract data from pages without parsing the HTML yourself, you can include AI extraction rules in your API request.',
				},
			]
		},
	],
};

