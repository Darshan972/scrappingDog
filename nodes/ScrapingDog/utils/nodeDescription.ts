import { INodeTypeDescription } from 'n8n-workflow';
import {
	scrapeUrlResource,
	googleSearchResource,
	bingSearchResource,
	linkedInProfileResource,
	linkedInJobResource,
	amazonSearchResource,
} from '../resources';

export function buildNodeDescription(): INodeTypeDescription {
	const baseUrl = "https://api.scrapingdog.com/";
	return {
		displayName: 'ScrapingDog',
		name: 'scrapingDog',
		icon: 'file:./scrappingDog.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from ScrapingDog API',
		defaults: {
			name: 'Scraping Dog API',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
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
				default: scrapeUrlResource.value,
			},
			// Operation field for Scrape URL
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [scrapeUrlResource.value],
					},
				},
				options: scrapeUrlResource.operations[0].options,
				default: scrapeUrlResource.operations[0].default,
			},
			// Operation field for Google Search
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [googleSearchResource.value],
					},
				},
				options: googleSearchResource.operations[0].options,
				default: googleSearchResource.operations[0].default,
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [bingSearchResource.value],
					},
				},
				options: bingSearchResource.operations[0].options,
				default: bingSearchResource.operations[0].default,
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [linkedInProfileResource.value],
					},
				},
				options: linkedInProfileResource.operations[0].options,
				default: linkedInProfileResource.operations[0].default,
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [linkedInJobResource.value],
					},
				},
				options: linkedInJobResource.operations[0].options,
				default: linkedInJobResource.operations[0].default,
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [amazonSearchResource.value],
					},
				},
				options: amazonSearchResource.operations[0].options,
				default: amazonSearchResource.operations[0].default,
			},
			// Scrape URL parameters
			...scrapeUrlResource.parameters,
			// Google Search parameters
			...googleSearchResource.parameters,
			// Bing Search parameters
			...bingSearchResource.parameters,
			// LinkedIn Profile parameters
			...linkedInProfileResource.parameters,
			// LinkedIn Job parameters
			...linkedInJobResource.parameters,
			// Amazon Search parameters
			...amazonSearchResource.parameters,
		],
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'scrapingDogApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: baseUrl,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};
}
