import { ResourceDefinition, GoogleSearchNodeParams, GoogleSearchParams } from '../types';

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
			options: [
				{
					name: 'Search',
					value: 'search',
					action: 'Google Search',
					description: 'Perform a Google Search',
				},
			],
			default: 'search',
		},
	],
	parameters: [
		{
			displayName: 'Keyword',
			name: 'keyword',
			type: 'string',
			default: '',
			required: true,
			description: 'Keyword to search for',
		},
		{
			displayName: 'Advance Search',
			name: 'advance',
			type: 'boolean',
			default: false,
			description: 'Use advance search for speed & cost efficiency',
		},
		{
			displayName: 'Page',
			name: 'page',
			type: 'number',
			default: 0,
			description: 'Page number',
		},
		{
			displayName: 'Location',
			name: 'location',
			type: 'string',
			default: 'United States',
			description: 'Location for the search',
		},
		{
			displayName: 'Results',
			name: 'results',
			type: 'number',
			default: 10,
			description: 'Number of results',
		},
	],
};

export function buildGoogleSearchParams(
	apiKey: string,
	params: GoogleSearchNodeParams
): GoogleSearchParams {
	const { keyword, advance, page, location, results } = params;

	return {
		api_key: apiKey,
		keyword,
		advance: advance.toString(),
		page,
		location,
		results,
	};
} 