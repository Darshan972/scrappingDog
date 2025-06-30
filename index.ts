import { INodeType } from 'n8n-workflow';
import { ScrapingDog } from './nodes/ScrapingDog/ScrapingDog.node';

export const nodeTypes: INodeType[] = [
  new ScrapingDog(),
];