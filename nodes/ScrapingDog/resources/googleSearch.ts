import { ResourceDefinition } from '../types';
import { countries } from './staticResource';

export const googleSearchResource: ResourceDefinition = {
	displayName: 'Google Search',
	value: 'googleSearch',
	description: 'Perform Google searches',
	operations: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [
						'googleSearch',
					],
				},
			},
			options: [
				{
					name: 'Search',
					value: 'search',
					action: 'Google search',
					description: 'Perform a Google Search',
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
						'googleSearch',
					],
				},
			},
		},
		{
			displayName: 'Advance Search',
			name: 'advance',
			type: 'boolean',
			default: false,
			description: 'Whether to get advanced featured snippets including Ads, PAA, Knowledge Graphs, etc',
			displayOptions: {
				show: {
					resource: [
						'googleSearch',
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
				value: `${i + 1}`,
			})),
			description: 'Page number',
			displayOptions: {
				show: {
					resource: [
						'googleSearch',
					],
				},
			},
		},
		{
			displayName: 'Location',
			name: 'location',
			type: 'options',
			default: '',
			options: countries.map(country => ({
				name: country.name,
				value: country.value,
			})),
			description: 'Location for the search',
			displayOptions: {
				show: {
					resource: [
						'googleSearch',
					],
				},
			},
		},
		{
			displayName: 'Results',
			name: 'results',
			type: 'options',
			default: '',
			options: Array.from({ length: 10 }, (_, i) => ({
				name: `${(i + 1) * 10}`,
				value: `${(i + 1) * 10}`,
			})),
			description: 'Number of results',
			displayOptions: {
				show: {
					resource: [
						'googleSearch',
					],
				},
			},
		},
	],
};
