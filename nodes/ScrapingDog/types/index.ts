// Credentials
export interface ScrappingDogCredentials {
	apiKey: string;
}

// Base parameter interfaces
export interface BaseApiParams {
	api_key: string;
}

// Scrape URL types
export interface ScrapeUrlApiParams extends BaseApiParams {
	url: string;
	dynamic?: string;
	premium?: string;
	superProxy?: string;
	markdown?: string;
	wait?: string;
	country?: string;
	custom_headers?: string;
	session_number?: string;
	image?: string;
	ai_query?: string;
	ai_extract_rules?: string;
}

export interface ScrapeUrlNodeParams {
	url: string;
	dynamic?: boolean;
	premium?: boolean;
	superProxy?: boolean;
	markdown?: boolean;
	wait?: number;
	country?: string;
	customHeaders?: boolean;
	sessionNumber?: string;
	image?: boolean;
	additionalFields?: {
		aiQuery?: string;
		aiExtractRules?: string;
	};
}

// Search types
export interface SearchApiParams extends BaseApiParams {
	query: string;
	page?: string;
	country?: string;
	results?: string;
}

export interface GoogleSearchApiParams extends SearchApiParams {
	advance_search?: string;
}

export interface GoogleSearchNodeParams {
	query: string;
	advance?: boolean;
	page?: number;
	location?: string;
	results?: number;
}

export interface GoogleImagesApiParams extends BaseApiParams {
	query: string;
	results?: string;
	country?: string;
	language?: string;
	imgsz?: string;
	image_type?: string;
	image_color?: string;
	licenses?: string;
	tbs?: string;
	safe_search?: string;
}

export interface GoogleImagesNodeParams {
	query: string;
	results?: string;
	country?: string;
	language?: string;
	imageSize?: string;
	imageType?: string;
	imageColor?: string;
	usageRights?: string;
	timePeriod?: string;
	safeSearch?: string;
}

export interface BingSearchApiParams extends SearchApiParams {
	filters?: string;
}

export interface BingSearchNodeParams {
	query: string;
	page?: number;
	country?: string;
	filters?: string;
	results?: number;
}

// LinkedIn types
export interface LinkedInProfileApiParams extends BaseApiParams {
	linkId: string;
	private?: string;
	type?: string;
}

export interface LinkedInProfileNodeParams {
	linkId: string;
	private?: boolean;
	type?: string;
}

export interface LinkedInJobApiParams extends BaseApiParams {
	job_id?: string;
	field?: string;
	geoid?: string;
	location?: string;
	page?: string;
	sort_by?: string;
	job_type?: string;
	exp_level?: string;
	work_type?: string;
}

export interface LinkedInJobNodeParams {
	type: 'job_overview' | 'job_listings';
	job_id?: string;
	field?: string;
	geoid?: string;
	location?: string;
	page?: number;
	sort_by?: string;
	job_type?: string;
	exp_level?: string;
	work_type?: string;
}

// Amazon types
export interface AmazonSearchApiParams extends SearchApiParams {
	domain?: string;
	postal_code?: string;
}

export interface AmazonSearchNodeParams {
	query: string;
	country?: string;
	page?: number;
	domain?: string;
	postal_code?: string;
}

// Resource and operation types
export type ResourceType = 
	| 'scrapeUrl' 
	| 'googleSearch'
	| 'googleImages'
	| 'bingSearch' 
	| 'linkedInProfile' 
	| 'linkedInJob' 
	| 'amazonSearch';

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
		displayOptions: {
			show: {
				resource: string[];
			};
		};
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

// API Response types
export interface ScrappingDogApiResponse<T = any> {
	success: boolean;
	data?: T;
	error?: string;
	message?: string;
}

// Validation types
export interface ValidationResult {
	isValid: boolean;
	errors: string[];
}

// Configuration types
export interface ScrappingDogConfig {
	baseUrl: string;
	timeout: number;
	retries: number;
} 