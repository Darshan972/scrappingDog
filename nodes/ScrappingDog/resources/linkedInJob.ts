import { ResourceDefinition} from '../types';
import { countries } from './staticResource';

export const linkedInJobResource: ResourceDefinition = {
	displayName: 'LinkedIn Job',
	value: 'linkedInJob',
	description: 'Perform LinkedIn Job searches',
	operations: [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [
						'linkedInJob',
					],
				},
			},
			options: [
				{
					name: 'Search',
					value: 'search',
					action: 'LinkedIn Job',
					description: 'Perform a LinkedIn Job Search',
				},
			],
			default: 'search',
		},
	],
	parameters: [
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'job_listings',
			required: true,
			description: 'Type of job to scrape',
			options: [
				{
					name: 'Job Listings',
					value: 'job_listings',
				},
				{
					name: 'Job Overview',
					value: 'job_overview',
				},
			],
			displayOptions: {
				show: {
					resource: [
						'linkedInJob',
					],
				},
			},
		},
		{
			displayName: 'Job ID',
			name: 'job_id',
			type: 'string',
			default: '',
			description: 'This is the ID of the job. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
			displayOptions: {
				show: {
					resource: [
						'linkedInJob',
					],
                    type: [
                        'job_overview',
                    ],
				},
			},
		},
		{
			displayName: 'Field',
			name: 'field',
			type: 'string',
			default: '',
			description: 'This is the field of the job to scrape. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
			displayOptions: {
				show: {
					resource: [
						'linkedInJob',
					],
                    type: [
                        'job_listings',
                    ],
				},
			},
		},
        {
			displayName: 'Geo Id',
			name: 'geoid',
			type: 'string',
			default: '',
			description: '',
			displayOptions: {
				show: {
					resource: [
						'linkedInJob',
					],
                    type: [
                        'job_listings',
                    ],
				},
			},
		},
        {
            displayName: 'Location',
            name: 'location',
            type: 'options',
            default: 'us',
            options: countries.map(country => ({
                name: country.name,
                value: country.value,
            })),
            description: 'This is the location of the job to scrape. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
            displayOptions: {
                show: {
                    resource: [
                        'linkedInJob',
                    ],
                    type: [
                        'job_listings',
                    ],
                },
            },
        },
        {
            displayName: 'Page',
            name: 'page',
            type: 'options',
            default: '1',
            options: Array.from({ length: 10 }, (_, i) => ({
                name: `${i + 1}`,
                value: `${i + 1}`,
            })),
            description: 'This is the page number of the job to scrape. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
            displayOptions: {
                show: {
                    resource: [
                        'linkedInJob',
                    ],
                    type: [
                        'job_listings',
                    ],
                },
            },
        },
        {
            displayName: 'Sort By',
            name: 'sort_by',
            type: 'options',
            default: 'Day',
            description: 'This is the sort by of the job to scrape. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
            options: [
                {
                    name: 'Day',
                    value: 'Day',
                },
                {
                    name: 'Week',
                    value: 'Week',
                },
                {
                    name: 'Month',
                    value: 'Month',
                }
            ],
            displayOptions: {
                show: {
                    resource: [     
                        'linkedInJob',
                    ],
                    type: [
                        'job_listings',
                    ],
                },
            },
        },
        {
            displayName: 'Job Type',
            name: 'job_type', 
            type: 'options',
            default: 'Full-time',
            description: 'This is the job type to scrape. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
            options: [
                {
                    name: 'Full-time',
                    value: 'Full_time',
                },
                {
                    name: 'Part-time',
                    value: 'Part_time',
                },
                {
                    name: 'Contract',
                    value: 'Contract',
                },
                {
                    name: 'Temporary',
                    value: 'temporary',
                },
                {
                    name: 'Volunteer',
                    value: 'volunteer',
                },
                
            ],
            displayOptions: {
                show: {
                    resource: [
                        'linkedInJob',
                    ],
                    type: [
                        'job_listings',
                    ],
                },
            },
        },
        {
            displayName: 'Experience Level',
            name: 'exp_level',
            type: 'options',
            default: 'entry_level',
            description: 'This is the experience level to scrape. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
            options: [
                {
                    name: 'Entry Level',
                    value: 'entry_level',
                },
                {
                    name: 'Internship',
                    value: 'internship',
                },
                {
                    name: 'Associate',
                    value: 'associate',
                },
                {
                    name: 'Mid Senior Level',
                    value: 'mid_senior_level',
                },
                {
                    name: 'Director',
                    value: 'director',
                }
            ],
            displayOptions: {
                show: {
                    resource: [
                        'linkedInJob',
                    ],
                    type: [
                        'job_listings',
                    ],
                },
            },
        },
        {
            displayName: 'Work Type',
            name: 'work_type',
            type: 'options',
            default: 'at_work',
            description: 'This is the work type to scrape. This can be found through our LinkedIn Jobs Scraper or from the LinkedIn Job URL',
            options: [
                {
                    name: 'At Work',
                    value: 'at_work',
                },
                {
                    name: 'Remote',
                    value: 'remote',
                },
                {
                    name: 'Hybrid',
                    value: 'hybrid',
                },
            ],
            displayOptions: {
                show: {
                    resource: [ 
                        'linkedInJob',
                    ],
                    type: [
                        'job_listings',
                    ],
                },
            },
        },
    ],
};
