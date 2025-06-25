import axios from 'axios';
import { ScrapeUrlParams, GoogleSearchParams } from '../types';

export class ScrappingDogAPI {
	private baseURL: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	async scrapeUrl(params: ScrapeUrlParams) {
		const response = await axios.get(`${this.baseURL}scrape`, {
			params,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	}

	async googleSearch(params: GoogleSearchParams) {
		const response = await axios.get(`${this.baseURL}google_search`, {
			params,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	}
} 