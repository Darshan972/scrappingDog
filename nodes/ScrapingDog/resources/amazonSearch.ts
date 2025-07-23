import { ResourceDefinition } from '../types';
import { countries,amazonDomains } from './staticResource';

export const amazonSearchResource: ResourceDefinition = {
	displayName: 'Amazon Search',
	value: 'amazonSearch',
	description: 'Perform Amazon searches',
	operations: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [
						'amazonSearch',
					],
				},
			},
			options: [
				{
					name: 'Search',
					value: 'search',
					action: 'Amazon search',
					description: 'Perform a Amazon Search',
				},
			],
			default: 'search',
		},
	],
	parameters: [
		{
			displayName: 'Keyword',
			name: 'query',
			type: 'string',
			default: '',
			required: true,
			description: 'Keyword to search for',
			displayOptions: {
				show: {
					resource: [
						'amazonSearch',
					],
				},
			},
		},
		{
			displayName: 'Page',
			name: 'page',
			type: 'options',
			default: '',
			options: Array.from({ length: 10 }, (_, i) => ({
				name: `${i + 1}`,
				value:`${i + 1}`
			})),
			description: 'Page number',
			displayOptions: {
				show: {
					resource: [
						'amazonSearch',
					],
				},
			},
		},
		{
			displayName: 'Amazon Domain',
			name: 'domain',
			type: 'options',
			default: '',
			options: amazonDomains.map(domain => ({
				name: `${domain}`,
				value: domain
			})),
			required: true,
			description: 'Domain for the search',
			displayOptions: {
				show: {
					resource: [
						'amazonSearch',
					],
				},
			},
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'options',
			default: '',
			options: countries.map(country => ({
				name: country.name,
				value: country.value,
			})),
			description: 'Country for the search',
			displayOptions: {
				show: {
					resource: [
						'amazonSearch',
					],
				},
			},
		},
		{
			displayName: 'Postal Code',
			name: 'postal_code',
			type: 'string',
			default: '',
			description: 'Postal code for the search',
			displayOptions: {
				show: {
					resource: [
						'amazonSearch',
					],
				},
			},
		},
	],
};
