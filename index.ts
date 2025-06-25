import { INodeType } from 'n8n-workflow';
import { ScrappingDog } from './nodes/ScrappingDog/ScrappingDog.node';

export const nodeTypes: INodeType[] = [
  new ScrappingDog(),
];