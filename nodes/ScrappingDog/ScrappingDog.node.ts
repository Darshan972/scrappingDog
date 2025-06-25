import { INodeType, IExecuteFunctions } from 'n8n-workflow';
import dotenv from 'dotenv';
import { buildNodeDescription, ScrappingDogAPI } from './utils';
import { buildScrapeUrlParams, buildGoogleSearchParams } from './resources';
import { ResourceType, ScrapeUrlNodeParams, GoogleSearchNodeParams } from './types';

dotenv.config();

export class ScrappingDog implements INodeType {
	description = buildNodeDescription();

	async execute(this: IExecuteFunctions) {
		const returnData = [];
		const credentials = await this.getCredentials('ScrappingDogApi');
		const apiKey = credentials.apiKey as string;
		const resource = this.getNodeParameter('resource', 0) as ResourceType;
		
		const api = new ScrappingDogAPI(process.env.SCRAPPING_DOG_BASE_URL || '');

		try {
			let response;
			
			switch (resource) {
				case 'scrapeUrl': {
					const params: ScrapeUrlNodeParams = {
						url: this.getNodeParameter('url', 0) as string,
						dynamic: this.getNodeParameter('dynamic', 0) as boolean,
						premium: this.getNodeParameter('premium', 0) as boolean,
						superProxy: this.getNodeParameter('superProxy', 0) as boolean,
						markdown: this.getNodeParameter('markdown', 0) as boolean,
						wait: this.getNodeParameter('wait', 0) as number,
						country: this.getNodeParameter('country', 0) as string,
						additionalFields: this.getNodeParameter('additionalFields', 0) as any,
					};

					const apiParams = buildScrapeUrlParams(apiKey, params);
					response = await api.scrapeUrl(apiParams);
					break;
				}
				
				case 'googleSearch': {
					const params: GoogleSearchNodeParams = {
						keyword: this.getNodeParameter('keyword', 0) as string,
						advance: this.getNodeParameter('advance', 0) as boolean,
						page: this.getNodeParameter('page', 0) as number,
						location: this.getNodeParameter('location', 0) as string,
						results: this.getNodeParameter('results', 0) as number,
					};

					const apiParams = buildGoogleSearchParams(apiKey, params);
					response = await api.googleSearch(apiParams);
					break;
				}
				
				default:
					throw new Error(`Unsupported resource: ${resource}`);
			}

			returnData.push({ json: response });
		} catch (error) {
			throw new Error(`Error in ScrappingDog node: ${error}`);
		}

		return this.prepareOutputData(returnData);
	}
}
