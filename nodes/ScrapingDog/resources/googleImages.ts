import { ResourceDefinition } from '../types';
import { countries } from './staticResource';

export const googleImagesResource: ResourceDefinition = {
	displayName: 'Google Images',
	value: 'googleImages',
	description: 'Search Google Images',
	operations: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
			options: [
				{
					name: 'Search',
					value: 'search',
					action: 'Search Google Images',
					description: 'Search Google Images',
				},
			],
			default: 'search',
		},
	],
	parameters: [
		{
			displayName: 'Query',
			name: 'query',
			type: 'string',
			default: '',
			required: true,
			description: 'Search query for Google Images',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Number of Results',
			name: 'results',
			type: 'options',
			default: '10',
			options: Array.from({ length: 10 }, (_, i) => ({
				name: `${(i + 1) * 10}`,
				value: `${(i + 1) * 10}`,
			})),
			description: 'Number of results to return (10-100)',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'options',
			default: '',
			options: countries.map(country => ({
				name: country.name,
				value: country.value,
			})),
			description: 'Country for geotargeting',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'options',
			default: '',
			options: [
				{ name: 'English', value: 'en' },
				{ name: 'Spanish', value: 'es' },
				{ name: 'French', value: 'fr' },
				{ name: 'German', value: 'de' },
				{ name: 'Italian', value: 'it' },
				{ name: 'Portuguese', value: 'pt' },
				{ name: 'Russian', value: 'ru' },
				{ name: 'Japanese', value: 'ja' },
				{ name: 'Korean', value: 'ko' },
				{ name: 'Chinese Simplified', value: 'zh-CN' },
				{ name: 'Chinese Traditional', value: 'zh-TW' },
				{ name: 'Arabic', value: 'ar' },
				{ name: 'Hindi', value: 'hi' },
			],
			description: 'Language for search results',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Image Size',
			name: 'imageSize',
			type: 'options',
			default: '',
			options: [
				{ name: 'Any Size', value: '' },
				{ name: 'Large', value: 'large' },
				{ name: 'Medium', value: 'medium' },
				{ name: 'Icon', value: 'icon' },
			],
			description: 'Filter by image size',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Image Type',
			name: 'imageType',
			type: 'options',
			default: '',
			options: [
				{ name: 'Any Type', value: '' },
				{ name: 'Face', value: 'face' },
				{ name: 'Photo', value: 'photo' },
				{ name: 'Clipart', value: 'clipart' },
				{ name: 'Line Drawing', value: 'lineart' },
				{ name: 'Animated', value: 'animated' },
			],
			description: 'Filter by image type',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Image Color',
			name: 'imageColor',
			type: 'options',
			default: '',
			options: [
				{ name: 'Any Color', value: '' },
				{ name: 'Color', value: 'color' },
				{ name: 'Black and White', value: 'gray' },
				{ name: 'Transparent', value: 'trans' },
				{ name: 'Red', value: 'red' },
				{ name: 'Orange', value: 'orange' },
				{ name: 'Yellow', value: 'yellow' },
				{ name: 'Green', value: 'green' },
				{ name: 'Teal', value: 'teal' },
				{ name: 'Blue', value: 'blue' },
				{ name: 'Purple', value: 'purple' },
				{ name: 'Pink', value: 'pink' },
				{ name: 'White', value: 'white' },
				{ name: 'Gray', value: 'gray' },
				{ name: 'Black', value: 'black' },
				{ name: 'Brown', value: 'brown' },
			],
			description: 'Filter by image color',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Usage Rights',
			name: 'usageRights',
			type: 'options',
			default: '',
			options: [
				{ name: 'Any Usage Rights', value: '' },
				{ name: 'Labeled for Reuse', value: 'labeled-for-reuse' },
				{ name: 'Labeled for Reuse with Modification', value: 'labeled-for-reuse-with-modification' },
				{ name: 'Labeled for Noncommercial Reuse', value: 'labeled-for-noncommercial-reuse' },
				{ name: 'Labeled for Noncommercial Reuse with Modification', value: 'labeled-for-noncommercial-reuse-with-modification' },
			],
			description: 'Filter by usage rights',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Time Period',
			name: 'timePeriod',
			type: 'options',
			default: '',
			options: [
				{ name: 'Any Time', value: '' },
				{ name: 'Past Hour', value: 'hour' },
				{ name: 'Past 24 Hours', value: 'day' },
				{ name: 'Past Week', value: 'week' },
				{ name: 'Past Month', value: 'month' },
				{ name: 'Past Year', value: 'year' },
			],
			description: 'Filter by time period',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
		{
			displayName: 'Safe Search',
			name: 'safeSearch',
			type: 'options',
			default: 'moderate',
			options: [
				{ name: 'Strict', value: 'strict' },
				{ name: 'Moderate', value: 'moderate' },
				{ name: 'Off', value: 'off' },
			],
			description: 'Safe search filter level',
			displayOptions: {
				show: {
					resource: [
						'googleImages',
					],
				},
			},
		},
	],
};
