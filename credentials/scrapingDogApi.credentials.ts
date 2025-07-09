import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class scrapingDogApi implements ICredentialType {
	name = 'scrapingDogApi';
	displayName = 'ScrapingDog API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		},
	];
	authenticate :IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				'api_key': '={{$credentials.apiKey}}'
			}
		},
	};

	// Credential test block
	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'https://api.scrapingdog.com/scrape',
			qs: {
				api_key: '={{$credentials.apiKey}}',
				url: 'https://httpbin.org/get',
			},
		},
	};
	
}