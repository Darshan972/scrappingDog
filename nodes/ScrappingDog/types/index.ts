export interface ScrappingDogCredentials {
	apiKey: string;
}

export interface ScrapeUrlParams {
	api_key: string;
	url: string;
	dynamic?: string;
	premium?: string;
	superProxy?: string;
	markdown?: string;
	wait?: number;
	country?: string;
	ai_query?: string;
	ai_extract_rules?: string;
}

export interface GoogleSearchParams {
	api_key: string;
	keyword: string;
	advance: string;
	page: number;
	location: string;
	results: number;
}

export interface AdditionalFields {
	aiQuery?: string;
	aiExtractRules?: string;
}

export interface ScrapeUrlNodeParams {
	url: string;
	dynamic: boolean;
	premium: boolean;
	superProxy: boolean;
	markdown: boolean;
	wait: number;
	country: string;
	additionalFields: AdditionalFields;
}

export interface GoogleSearchNodeParams {
	keyword: string;
	advance: boolean;
	page: number;
	location: string;
	results: number;
}

export type ResourceType = 'scrapeUrl' | 'googleSearch';
export type OperationType = 'get' | 'search';

// Resource definition interface
export interface ResourceDefinition {
	displayName: string;
	value: string;
	description: string;
	operations: {
		displayName: string;
		name: string;
		type: string;
		noDataExpression: boolean;
		options: {
			name: string;
			value: string;
			action: string;
			description: string;
		}[];
		default: string;
	}[];
	parameters: any[];
} 