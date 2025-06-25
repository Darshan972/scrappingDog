import { INodeTypeDescription } from 'n8n-workflow';
import { scrapeUrlResource, googleSearchResource } from '../resources';

export function buildNodeDescription(): INodeTypeDescription {
	return {
		displayName: 'ScrappingDog',
		name: 'scrappingDog',
		icon: 'file:./scrappingDog.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from ScrappingDog API',
		defaults: {
			name: 'ScrappingDog',
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
			// Scrape URL parameters
			...scrapeUrlResource.parameters.map((param: any) => ({
				...param,
				displayOptions: {
					show: {
						resource: [scrapeUrlResource.value],
					},
					...param.displayOptions,
				},
			})),
			// Google Search parameters
			...googleSearchResource.parameters.map((param: any) => ({
				...param,
				displayOptions: {
					show: {
						resource: [googleSearchResource.value],
					},
					...param.displayOptions,
				},
			})),
		],
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'ScrappingDogApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: process.env.SCRAPPING_DOG_BASE_URL,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};
} 