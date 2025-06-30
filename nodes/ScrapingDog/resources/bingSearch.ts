import { ResourceDefinition } from '../types';
import { countries } from './staticResource';

export const bingSearchResource: ResourceDefinition = {
	displayName: 'Bing Search',
	value: 'bingSearch',
	description: 'Perform Bing searches',
	operations: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [
						'bingSearch',
					],
				},
			},
			options: [
				{
					name: 'Search',
					value: 'search',
					action: 'Bing Search',
					description: 'Perform a Bing Search',
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
						'bingSearch',
					],
				},
			},
		},
		{
			displayName: 'Page',
			name: 'page',
			type: 'options',
			default: '1',
			options: Array.from({ length: 10 }, (_, i) => ({
				name: `${i + 1}`,
				value: `${i + 1}`,
			})),
			description: 'Page number',
			displayOptions: {
				show: {
					resource: [
						'bingSearch',
					],
				},
			},
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'options',
			default: 'us',
			options: countries.map(country => ({
				name: country.name,
				value: country.value,
			})),
			description: 'Country for the search',
			displayOptions: {
				show: {
					resource: [
						'bingSearch',
					],
				},
			},
		},
		{
			displayName: 'Results',
			name: 'results',
			type: 'options',
			default: '10',
			options: Array.from({ length: 10 }, (_, i) => ({
				name: `${(i + 1) * 10}`,
				value: `${(i + 1) * 10}`,
			})),
			description: 'Number of results',
			displayOptions: {
				show: {
					resource: [
						'bingSearch',
					],
				},
			},
		},
		{
			displayName: 'Filters',
			name: 'filters',
			type: 'string',
			default: '',
			description: 'This parameter enables advanced filtering options, such as date range filtering (e.g., ez5_18169_18230)',
			displayOptions: {
				show: {
					resource: [
						'bingSearch',
					],
				},
			},
		},
	],
};

