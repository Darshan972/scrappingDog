import { ResourceDefinition} from '../types';

export const linkedInProfileResource: ResourceDefinition = {
	displayName: 'LinkedIn Profile',
	value: 'linkedInProfile',
	description: 'Perform LinkedIn Profile searches',
	operations: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [
						'linkedInProfile',
					],
				},
			},
			options: [
				{
					name: 'Search',
					value: 'search',
					action: 'Linked in profile',
					description: 'Perform a LinkedIn Profile Search',
				},
			],
			default: 'search',
		},
	],
	parameters: [
		{
			displayName: 'Profile URL',
			name: 'linkId',
			type: 'string',
			default: '',
			required: true,
			description: 'LinkedIn Profile URL to scrape',
			displayOptions: {
				show: {
					resource: [
						'linkedInProfile',
					],
				},
			},
		},
		{
			displayName: 'Private Profile',
			name: 'private',
			type: 'boolean',
			default: false,
			description: 'Whether the profile is private',
			displayOptions: {
				show: {
					resource: [
						'linkedInProfile',
					],
					type: [
						'profile',
					],
				},
			},
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'profile',
			options: [
				{
					name: 'Profile',
					value: 'profile',
				},
				{
					name: 'Company',
					value: 'company',
				},
			],
			description: 'Type of profile to scrape',
			displayOptions: {
				show: {
					resource: [
						'linkedInProfile',
					],
				},
			},
		},
	],
};
