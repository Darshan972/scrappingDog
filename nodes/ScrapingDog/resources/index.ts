export { scrapeUrlResource } from './scrapeUrl';
export { googleSearchResource } from './googleSearch';
export { googleImagesResource } from './googleImages';
export {bingSearchResource} from './bingSearch';
export {linkedInProfileResource} from './linkedInProfile';
export {linkedInJobResource} from './linkedInJob';
export {amazonSearchResource} from './amazonSearch';

export const resources = {
	scrapeUrl: 'scrapeUrl',
	googleSearch: 'googleSearch',
	googleImages: 'googleImages',
	bingSearch: 'bingSearch',
	linkedInProfile: 'linkedInProfile',
	linkedInJob: 'linkedInJob',
	amazonSearch: 'amazonSearch',
} as const; 