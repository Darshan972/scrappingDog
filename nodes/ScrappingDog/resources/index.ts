export { scrapeUrlResource } from './scrapeUrl';
export { googleSearchResource } from './googleSearch';
export {bingSearchResource} from './bingSearch';
export {linkedInProfileResource} from './linkedInProfile';
export {linkedInJobResource} from './linkedInJob';
export {amazonSearchResource} from './amazonSearch';

export const resources = {
	scrapeUrl: 'scrapeUrl',
	googleSearch: 'googleSearch',
	bingSearch: 'bingSearch',
	linkedInProfile: 'linkedInProfile',
	linkedInJob: 'linkedInJob',
	amazonSearch: 'amazonSearch',
} as const; 