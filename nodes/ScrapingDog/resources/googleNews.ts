import {
	INodeProperties,
} from 'n8n-workflow';

export const googleNewsResource = {
	displayName: 'Google News',
	value: 'googleNews',
	operations: [
		{
			displayName: 'Search',
			value: 'search',
			options: [
				{
					name: 'Search',
					value: 'search',
					description: 'Search Google News',
					action: 'Search Google News',
				},
			],
		},
	],
	parameters: [
		// Required fields
		{
			displayName: 'Query',
			name: 'query',
			type: 'string',
			required: true,
			default: '',
			placeholder: 'e.g., climate change',
			description: 'Google Search Query for news articles',
			displayOptions: {
				show: {
					resource: ['googleNews'],
				},
			},
		},
		{
			displayName: 'Results',
			name: 'results',
			type: 'number',
			default: 10,
			description: 'Number of results to return (1-100)',
			typeOptions: {
				minValue: 1,
				maxValue: 100,
			},
			displayOptions: {
				show: {
					resource: ['googleNews'],
				},
			},
		},
		// Optional fields
		{
			displayName: 'Additional Fields',
			name: 'additionalFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions: {
				show: {
					resource: ['googleNews'],
				},
			},
			options: [
				{
					displayName: 'Country',
					name: 'country',
					type: 'options',
					default: 'us',
					description: 'ISO code of the country for localized results',
					options: [
						{ name: 'United States', value: 'us' },
						{ name: 'United Kingdom', value: 'uk' },
						{ name: 'India', value: 'in' },
						{ name: 'Canada', value: 'ca' },
						{ name: 'Australia', value: 'au' },
						{ name: 'Germany', value: 'de' },
						{ name: 'France', value: 'fr' },
						{ name: 'Japan', value: 'jp' },
						{ name: 'Brazil', value: 'br' },
						{ name: 'Other', value: 'custom' },
					],
				},
				{
					displayName: 'Custom Country Code',
					name: 'customCountry',
					type: 'string',
					default: '',
					placeholder: 'e.g., mx',
					description: 'Custom ISO country code (2 letters)',
					displayOptions: {
						show: {
							'/additionalFields.country': ['custom'],
						},
					},
				},
				{
					displayName: 'Page',
					name: 'page',
					type: 'number',
					default: 0,
					description: 'Page number (0 for first page, 1 for second page, etc.)',
					typeOptions: {
						minValue: 0,
					},
				},
				{
					displayName: 'Domain',
					name: 'domain',
					type: 'string',
					default: '',
					placeholder: 'e.g., google.co.uk',
					description: 'Google domain for local results (e.g., google.co.in for India)',
				},
				{
					displayName: 'Language',
					name: 'language',
					type: 'options',
					default: 'en',
					description: 'Language of the results',
					options: [
						{ name: 'English', value: 'en' },
						{ name: 'Spanish', value: 'es' },
						{ name: 'French', value: 'fr' },
						{ name: 'German', value: 'de' },
						{ name: 'Italian', value: 'it' },
						{ name: 'Portuguese', value: 'pt' },
						{ name: 'Russian', value: 'ru' },
						{ name: 'Japanese', value: 'ja' },
						{ name: 'Chinese (Simplified)', value: 'zh-cn' },
						{ name: 'Chinese (Traditional)', value: 'zh-tw' },
						{ name: 'Korean', value: 'ko' },
						{ name: 'Arabic', value: 'ar' },
						{ name: 'Hindi', value: 'hi' },
						{ name: 'Dutch', value: 'nl' },
						{ name: 'Swedish', value: 'sv' },
						{ name: 'Norwegian', value: 'no' },
						{ name: 'Danish', value: 'da' },
						{ name: 'Finnish', value: 'fi' },
					],
				},
				{
					displayName: 'Language Restriction',
					name: 'lr',
					type: 'string',
					default: '',
					placeholder: 'e.g., lang_en',
					description: 'Limit search to specific language(s). Use format: lang_{language_code}',
				},
				{
					displayName: 'Geographic Location (UULE)',
					name: 'uule',
					type: 'string',
					default: '',
					placeholder: 'e.g., w+CAIQIFJlbGF5IFN0YXRlcw==',
					description: 'Parameter that specifies geographic location for tailored results',
				},
				{
					displayName: 'Time-Based Search (TBS)',
					name: 'tbs',
					type: 'options',
					default: '',
					description: 'Filter results by time period',
					options: [
						{ name: 'Any time', value: '' },
						{ name: 'Past hour', value: 'qdr:h' },
						{ name: 'Past 24 hours', value: 'qdr:d' },
						{ name: 'Past week', value: 'qdr:w' },
						{ name: 'Past month', value: 'qdr:m' },
						{ name: 'Past year', value: 'qdr:y' },
					],
				},
				{
					displayName: 'Safe Search',
					name: 'safe',
					type: 'options',
					default: 'off',
					description: 'Filter adult content',
					options: [
						{ name: 'Off', value: 'off' },
						{ name: 'Active', value: 'active' },
					],
				},
				{
					displayName: 'No Auto-Correct (NFPR)',
					name: 'nfpr',
					type: 'boolean',
					default: false,
					description: 'Whether to exclude results from auto-corrected queries (1 to exclude, 0 to include)',
				},
			],
		},
	],
} as const;
