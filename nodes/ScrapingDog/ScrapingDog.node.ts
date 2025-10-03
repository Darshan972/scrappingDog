import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	scrapeUrlResource,
	googleSearchResource,
	googleImagesResource,
	googleNewsResource,
	bingSearchResource,
	amazonSearchResource,
} from './resources';

export class ScrapingDog implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ScrapingDog',
		name: 'scrapingDog',
		icon: 'file:scrappingDog.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from ScrapingDog API',
		defaults: {
			name: 'Scraping Dog API',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'scrapingDogApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.scrapingdog.com/',
			headers: {
				Accept: 'text/html,application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: '',
				options: [
					{
						name: scrapeUrlResource.displayName,
						value: scrapeUrlResource.value,
					},
					{
						name: googleSearchResource.displayName,
						value: googleSearchResource.value,
					},
					{
						name: googleImagesResource.displayName,
						value: googleImagesResource.value,
					},
					{
						name: googleNewsResource.displayName,
						value: googleNewsResource.value,
					},
					{
						name: bingSearchResource.displayName,
						value: bingSearchResource.value,
					},
					{
						name: amazonSearchResource.displayName,
						value: amazonSearchResource.value,
					},
				],
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: '',
				displayOptions: {
					show: {
						resource: [scrapeUrlResource.value],
					},
				},
				options: scrapeUrlResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'scrape',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							url: '={{$parameter["url"]}}',
							dynamic: '={{$parameter["dynamic"] === true ? "true" : "false"}}',
							premium: '={{$parameter["premium"] === true ? "true" : "false"}}',
							markdown: '={{$parameter["markdown"] === true ? "true" : "false"}}',
							super_proxy: '={{$parameter["superProxy"] === true ? "true" : "false"}}',
							wait: '={{$parameter["dynamic"] === true && $parameter["wait"] ? $parameter["wait"] : undefined}}',
							country: '={{$parameter["premium"] === true && $parameter["country"] ? $parameter["country"] : undefined}}',
							custom_headers: '={{$parameter["customHeaders"] === true ? "true" : undefined}}',
							session_number: '={{$parameter["sessionNumber"] || undefined}}',
							image: '={{$parameter["image"] === true ? "true" : "false"}}',
							ai_query: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["aiQuery"] ? $parameter["additionalFields"]["aiQuery"] : undefined}}',
							ai_extract_rules: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["aiExtractRules"] ? $parameter["additionalFields"]["aiExtractRules"] : undefined}}',
						},
						returnFullResponse: true,
					},
					returnFullResponse: true,
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: '',
				displayOptions: {
					show: {
						resource: [googleSearchResource.value],
					},
				},
				options: googleSearchResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'google',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							query: '={{$parameter["query"]}}',
							advance_search: '={{$parameter["advance"]}}',
							page: '={{$parameter["page"]}}',
							country: '={{$parameter["location"]}}',
							results: '={{$parameter["results"]}}',
						},
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: '',
				displayOptions: {
					show: {
						resource: [googleImagesResource.value],
					},
				},
				options: googleImagesResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'google_images',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							query: '={{$parameter["query"]}}',
							results: '={{$parameter["results"]}}',
							country: '={{$parameter["country"] || undefined}}',
							language: '={{$parameter["language"] || undefined}}',
							imgsz: '={{$parameter["imageSize"] || undefined}}',
							image_type: '={{$parameter["imageType"] || undefined}}',
							image_color: '={{$parameter["imageColor"] || undefined}}',
							licenses: '={{$parameter["usageRights"] || undefined}}',
							tbs: '={{$parameter["timePeriod"] || undefined}}',
							safe_search: '={{$parameter["safeSearch"] || undefined}}',
						},
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: '',
				displayOptions: {
					show: {
						resource: [googleNewsResource.value],
					},
				},
				options: googleNewsResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'google_news',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							query: '={{$parameter["query"]}}',
							results: '={{$parameter["results"]}}',
							country: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["country"] === "custom" ? $parameter["additionalFields"]["customCountry"] : $parameter["additionalFields"]["country"] || undefined}}',
							page: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["page"] || undefined}}',
							domain: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["domain"] || undefined}}',
							language: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["language"] || undefined}}',
							lr: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["lr"] || undefined}}',
							uule: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["uule"] || undefined}}',
							tbs: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["tbs"] || undefined}}',
							safe: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["safe"] || undefined}}',
							nfpr: '={{$parameter["additionalFields"] && $parameter["additionalFields"]["nfpr"] === true ? "1" : "0"}}',
						},
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: '',
				displayOptions: {
					show: {
						resource: [bingSearchResource.value],
					},
				},
				options: bingSearchResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'bing/search',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							query: '={{$parameter["query"]}}',
							page: '={{$parameter["page"]}}',
							country: '={{$parameter["country"]}}',
							filters: '={{$parameter["filters"]}}',
							results: '={{$parameter["results"]}}',
						},
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: '',
				displayOptions: {
					show: {
						resource: [amazonSearchResource.value],
					},
				},
				options: amazonSearchResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'amazon/search',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							query: '={{$parameter["query"]}}',
							country: '={{$parameter["country"]}}',
							page: '={{$parameter["page"]}}',
							domain: '={{$parameter["domain"]}}',
							postal_code: '={{$parameter["postal_code"]}}',
						},
					},
				},
			},
			// Parameters from resources
			...scrapeUrlResource.parameters,
			...googleSearchResource.parameters,
			...googleImagesResource.parameters,
			...googleNewsResource.parameters,
			...bingSearchResource.parameters,
			...amazonSearchResource.parameters,
		],
	};
}
