import { ResourceDefinition, ScrapeUrlNodeParams, ScrapeUrlParams } from '../types';

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
		},
		{
			displayName: 'Javascript Rendering',
			name: 'dynamic',
			type: 'boolean',
			default: false,
			description: 'You can use this parameter for JS rendering',
			displayOptions: {
				show: {
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
		},
		{
			displayName: 'Markdown',
			name: 'markdown',
			type: 'boolean',
			default: false,
			description: 'This parameter is used to get HTML data in the markdown format.',
		},
		{
			displayName: 'Wait (in ms)',
			name: 'wait',
			type: 'number',
			default: 0,
			description: 'wait parameter is a time in milliseconds that can be used with the combination of dynamic=true in order to wait and load the website completely.',
			displayOptions: {
				show: {
					dynamic: [true],
				},
			},
		},
		{
			displayName: 'Select Country',
			name: 'country',
			type: 'string',
			default: '',
			description: 'This parameter helps you access the geotargeting feature.',
			displayOptions: {
				show: {
					premium: [true],
				},
			},
		},
		{
			displayName: 'Additional Fields',
			name: 'additionalFields',
			type: 'collection',
			default: {},
			placeholder: 'Add Field',
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
			],
		},
	],
};

export function buildScrapeUrlParams(
	apiKey: string,
	params: ScrapeUrlNodeParams
): ScrapeUrlParams {
	const {
		url,
		dynamic,
		premium,
		superProxy,
		markdown,
		wait,
		country,
		additionalFields,
	} = params;

	return {
		api_key: apiKey,
		url,
		...(typeof dynamic === 'boolean' && dynamic ? { dynamic: dynamic.toString() } : {}),
		...(typeof markdown === 'boolean' && markdown ? { markdown: markdown.toString() } : {}),
		...(typeof premium === 'boolean' && premium ? { premium: premium.toString() } : {}),
		...(dynamic && wait ? { wait } : {}),
		...(premium && country ? { country } : {}),
		...(typeof superProxy === 'boolean' && superProxy ? { superProxy: superProxy.toString() } : {}),
		...(additionalFields.aiQuery ? { ai_query: additionalFields.aiQuery } : {}),
		...(additionalFields.aiExtractRules ? { ai_extract_rules: additionalFields.aiExtractRules } : {}),
	};
} 