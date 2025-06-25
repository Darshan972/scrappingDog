export { scrapeUrlResource, buildScrapeUrlParams } from './scrapeUrl';
export { googleSearchResource, buildGoogleSearchParams } from './googleSearch';

export const resources = {
	scrapeUrl: 'scrapeUrl',
	googleSearch: 'googleSearch',
} as const; 