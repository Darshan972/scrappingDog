# ScrappingDog Node - Optimized Structure

This directory contains the optimized ScrappingDog node with a modular structure for better maintainability and extensibility.

## Directory Structure

```
nodes/ScrappingDog/
├── ScrappingDog.node.ts      # Main node implementation
├── ScrappingDog.node.json    # Node metadata
├── scrappingDog.svg          # Node icon
├── types/
│   └── index.ts              # TypeScript interfaces and types
├── resources/
│   ├── index.ts              # Resource exports
│   ├── scrapeUrl.ts          # Scrape URL resource definition
│   └── googleSearch.ts       # Google Search resource definition
└── utils/
    ├── index.ts              # Utility exports
    ├── api.ts                # API client class
    └── nodeDescription.ts    # Node description builder
```

## Architecture Overview

### Types (`types/index.ts`)
Contains all TypeScript interfaces and types used throughout the node:
- `ScrappingDogCredentials` - API credentials interface
- `ScrapeUrlParams` - API parameters for URL scraping
- `GoogleSearchParams` - API parameters for Google search
- `ScrapeUrlNodeParams` - Node parameters for URL scraping
- `GoogleSearchNodeParams` - Node parameters for Google search
- `ResourceType` - Union type for supported resources
- `OperationType` - Union type for supported operations

### Resources (`resources/`)
Each resource is defined in its own file with:
- Resource metadata (display name, description, etc.)
- Parameter definitions with proper display options
- Parameter builder functions for API calls

#### Available Resources:
1. **Scrape URL** (`scrapeUrl.ts`)
   - Parameters: URL, dynamic rendering, premium proxy, super proxy, markdown, wait time, country, AI query, AI extract rules
   - Operations: Get

2. **Google Search** (`googleSearch.ts`)
   - Parameters: Keyword, advance search, page, location, results count
   - Operations: Search

### Utils (`utils/`)
Utility functions and classes:
- **API Client** (`api.ts`) - Handles HTTP requests to ScrappingDog API
- **Node Description Builder** (`nodeDescription.ts`) - Dynamically builds the node description from resources

## Benefits of This Structure

1. **Modularity**: Each resource is self-contained and can be easily modified or extended
2. **Type Safety**: Strong TypeScript typing throughout the codebase
3. **Maintainability**: Clear separation of concerns makes the code easier to maintain
4. **Extensibility**: Adding new resources is straightforward - just create a new resource file
5. **Reusability**: Common utilities and types can be shared across resources
6. **Testing**: Each component can be tested independently

## Adding New Resources

To add a new resource:

1. Create a new file in `resources/` (e.g., `newResource.ts`)
2. Define the resource interface in `types/index.ts`
3. Add the resource to `resources/index.ts`
4. Update the main node file to handle the new resource
5. Update the node description builder if needed

## Example: Adding a New Resource

```typescript
// resources/newResource.ts
export const newResourceDefinition = {
  displayName: 'New Resource',
  value: 'newResource',
  // ... other properties
};

export function buildNewResourceParams(apiKey: string, params: NewResourceParams) {
  // Build API parameters
}
```

This structure makes the codebase much more organized and easier to work with, especially as the number of resources and parameters grows. 