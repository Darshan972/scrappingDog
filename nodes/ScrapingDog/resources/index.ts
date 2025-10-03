export { scrapeUrlResource } from './scrapeUrl';
export { googleSearchResource } from './googleSearch';
export { googleImagesResource } from './googleImages';
export { googleNewsResource } from './googleNews';
export {bingSearchResource} from './bingSearch';
export {amazonSearchResource} from './amazonSearch';

export const resources = {
	scrapeUrl: 'scrapeUrl',
	googleSearch: 'googleSearch',
	googleImages: 'googleImages',
	googleNews: 'googleNews',
	bingSearch: 'bingSearch',
	amazonSearch: 'amazonSearch',
} as const; 