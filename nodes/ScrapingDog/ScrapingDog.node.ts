import { INodeType, IExecuteFunctions, NodeApiError } from 'n8n-workflow';
import dotenv from 'dotenv';
import { buildNodeDescription } from './utils';

dotenv.config();

export class ScrapingDog implements INodeType {
	description = buildNodeDescription();

	async execute(this: IExecuteFunctions) {
		const returnData = [];
		const credentials = await this.getCredentials('scrapingDogApi');
		const apiKey = credentials.apiKey;
		const resource = this.getNodeParameter('resource', 0) as string;
		
		// Add base URL as a parameter with default value
		const baseUrl = this.getNodeParameter('baseUrl', 0, 'https://api.scrapingdog.com/') as string;
		
		let apiUrl = '';
		let params = {};
		switch (resource) {
			case 'scrapeUrl': {
				const dynamic = this.getNodeParameter('dynamic', 0) as boolean;
				const premium = this.getNodeParameter('premium', 0) as boolean;
				const superProxy = this.getNodeParameter('superProxy', 0) as boolean;
				const markdown = this.getNodeParameter('markdown', 0) as boolean;
				const url = this.getNodeParameter('url', 0) as string;
				const additionalFields = this.getNodeParameter('additionalFields', 0) as {
					aiQuery?: string;
					aiExtractRules?: string;
				};

				const wait = dynamic ? (this.getNodeParameter('wait', 0) as number) : undefined;
				const country = premium ? (this.getNodeParameter('country', 0) as string) : undefined;

				apiUrl = `${baseUrl}scrape`;

				params = {
					api_key: apiKey.toString(),
					url: url.toString(),
					...(typeof dynamic === 'boolean' && dynamic ? { dynamic: dynamic.toString() } : {}),
					...(typeof markdown === 'boolean' && markdown ? { markdown: markdown.toString() } : {}),
					...(typeof premium === 'boolean' && premium ? { premium: premium.toString() } : {}),
					...(dynamic && wait ? { wait: wait.toString() } : {}),
					...(premium && country ? { country: country.toString() } : {}),
					...(typeof superProxy === 'boolean' && superProxy
						? { superProxy: superProxy.toString() }
						: {}),
					...(additionalFields.aiQuery ? { ai_query: additionalFields.aiQuery.toString() } : {}),
					...(additionalFields.aiExtractRules
						? { ai_extract_rules: additionalFields.aiExtractRules.toString() }
						: {}),
				};
				break;
			}
			case 'googleSearch': {
				apiUrl = `${baseUrl}google/`;
				params = {
					api_key: apiKey.toString(),
					query: (this.getNodeParameter('query', 0) as string).toString(),
					...(typeof this.getNodeParameter('advance', 0) === 'boolean'
						? { advance_search: this.getNodeParameter('advance', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('page', 0) === 'number'
						? { page: this.getNodeParameter('page', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('location', 0) === 'string'
						? { country: this.getNodeParameter('location', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('results', 0) === 'number'
						? { results: this.getNodeParameter('results', 0)?.toString() }
						: {}),
				};
				break;
			}
			case 'bingSearch': {
				apiUrl = `${baseUrl}bing/search/`;
				params = {
					api_key: apiKey.toString(),
					query: (this.getNodeParameter('query', 0) as string).toString(),
					...(typeof this.getNodeParameter('page', 0) === 'number'
						? { page: this.getNodeParameter('page', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('country', 0) === 'string'
						? { country: this.getNodeParameter('country', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('filters', 0) === 'string'
						? { filters: this.getNodeParameter('filters', 0).toString() }
						: {}),
					...(typeof this.getNodeParameter('results', 0) === 'number'
						? { results: this.getNodeParameter('results', 0)?.toString() }
						: {}),
				};
				break;
			}
			case 'linkedInProfile': {
				apiUrl = `${baseUrl}linkedin/`;
				const fullLinkId = this.getNodeParameter('linkId', 0) as string;

				// Extract identifier by splitting by / and taking the last element
				const linkId = fullLinkId.split('/').filter(Boolean).pop() || fullLinkId;
				params = {
					api_key: apiKey.toString(),
					linkId: linkId.toString(),
					...(this.getNodeParameter('private', 0, false) !== undefined
						? { private: this.getNodeParameter('private', 0, false)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('type', 0) === 'string'
						? { type: this.getNodeParameter('type', 0)?.toString() }
						: {}),
				};
				break;
			}
			case 'linkedInJob': {
				apiUrl = `${baseUrl}linkedinjobs/`;

				const type = this.getNodeParameter('type', 0)?.toString();

				params = {
					api_key: apiKey.toString(),
					...(type === 'job_overview' && this.getNodeParameter('job_id', 0) !== undefined
						? { job_id: this.getNodeParameter('job_id', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('field', 0) !== undefined
						? { field: this.getNodeParameter('field', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('geoid', 0) !== undefined
						? { geoid: this.getNodeParameter('geoid', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('location', 0) !== undefined
						? { location: this.getNodeParameter('location', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('page', 0) !== undefined
						? { page: this.getNodeParameter('page', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('sort_by', 0) !== undefined
						? { sort_by: this.getNodeParameter('sort_by', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('job_type', 0) !== undefined
						? { job_type: this.getNodeParameter('job_type', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('exp_level', 0) !== undefined
						? { exp_level: this.getNodeParameter('exp_level', 0)?.toString() }
						: {}),
					...(type === 'job_listings' && this.getNodeParameter('work_type', 0) !== undefined
						? { work_type: this.getNodeParameter('work_type', 0)?.toString() }
						: {}),
				};

				break;
			}
			case 'amazonSearch': {
				apiUrl = `${baseUrl}amazon/search`;
				console.log('apiUrl2-->', apiUrl);
				params = {
					api_key: apiKey.toString(),
					query: (this.getNodeParameter('query', 0) as string).toString(),
					...(typeof this.getNodeParameter('country', 0) === 'string'
						? { country: this.getNodeParameter('country', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('page', 0) === 'string'
						? { page: this.getNodeParameter('page', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('domain', 0) === 'string'
						? { domain: this.getNodeParameter('domain', 0)?.toString() }
						: {}),
					...(typeof this.getNodeParameter('postal_code', 0) === 'string'
						? { postal_code: this.getNodeParameter('postal_code', 0)?.toString() }
						: {}),
				};
				break;
			}
			default:
				break;
		}

		try {
			// Build URL with query parameters
			const url = new URL(apiUrl);
			Object.entries(params).forEach(([key, value]) => {
				url.searchParams.append(key, value as string);
			});

			const response = await fetch(url.toString(), {
				method: 'GET',
				headers: {
					'Accept': 'text/html,application/json',
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new NodeApiError(this.getNode(), {
					message: `HTTP error! status: ${response.status} ${response.statusText}`,
					httpCode: response.status,
					description: response.statusText,
				});
			}

			// For scrapeUrl, we expect HTML content
			if (resource === 'scrapeUrl') {
				const htmlContent = await response.text();
				returnData.push({ 
					json: { 
						html: htmlContent,
						url: url.toString(),
						status: response.status,
						contentType: response.headers.get('content-type')
					} 
				});
			} else {
				// For other resources, expect JSON
				const data = await response.json();
				returnData.push({ json: data });
			}
		} catch (error) {
			// Return error details as part of the output instead of throwing
			if (error instanceof NodeApiError) {
				returnData.push({
					json: {
						error: true,
						message: error.message,
						status: error.httpCode,
						statusText: error.description,
					}
				});
			} else {
				returnData.push({
					json: {
						error: true,
						message: error instanceof Error ? error.message : 'Unknown error occurred',
					}
				});
			}
		}

		return this.prepareOutputData(returnData);
	}
}
