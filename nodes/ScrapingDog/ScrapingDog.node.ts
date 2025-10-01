import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	scrapeUrlResource,
	googleSearchResource,
	googleImagesResource,
	bingSearchResource,
	linkedInProfileResource,
	linkedInJobResource,
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
						name: bingSearchResource.displayName,
						value: bingSearchResource.value,
					},
					{
						name: linkedInProfileResource.displayName,
						value: linkedInProfileResource.value,
					},
					{
						name: linkedInJobResource.displayName,
						value: linkedInJobResource.value,
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
							image_size: '={{$parameter["imageSize"] || undefined}}',
							image_type: '={{$parameter["imageType"] || undefined}}',
							image_color: '={{$parameter["imageColor"] || undefined}}',
							usage_rights: '={{$parameter["usageRights"] || undefined}}',
							time_period: '={{$parameter["timePeriod"] || undefined}}',
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
						resource: [linkedInProfileResource.value],
					},
				},
				options: linkedInProfileResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'linkedin',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							linkId: '={{$parameter["linkId"].split("/").filter(Boolean).pop() || $parameter["linkId"]}}',
							private: '={{$parameter["private"]}}',
							type: '={{$parameter["type"]}}',
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
						resource: [linkedInJobResource.value],
					},
				},
				options: linkedInJobResource.operations[0].options,
				routing: {
					request: {
						method: 'GET',
						url: 'linkedinjobs',
						qs: {
							api_key: '={{$credentials.apiKey}}',
							job_id: '={{$parameter["type"] === "job_overview" ? $parameter["job_id"] : undefined}}',
							field: '={{$parameter["type"] === "job_listings" ? $parameter["field"] : undefined}}',
							geoid: '={{$parameter["type"] === "job_listings" ? $parameter["geoid"] : undefined}}',
							location: '={{$parameter["type"] === "job_listings" ? $parameter["location"] : undefined}}',
							page: '={{$parameter["type"] === "job_listings" ? $parameter["page"] : undefined}}',
							sort_by: '={{$parameter["type"] === "job_listings" ? $parameter["sort_by"] : undefined}}',
							job_type: '={{$parameter["type"] === "job_listings" ? $parameter["job_type"] : undefined}}',
							exp_level: '={{$parameter["type"] === "job_listings" ? $parameter["exp_level"] : undefined}}',
							work_type: '={{$parameter["type"] === "job_listings" ? $parameter["work_type"] : undefined}}',
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
			...bingSearchResource.parameters,
			...linkedInProfileResource.parameters,
			...linkedInJobResource.parameters,
			...amazonSearchResource.parameters,
		],
	};
}
