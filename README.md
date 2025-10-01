# ScrapingDog Node for n8n

This is a custom n8n node that integrates with the ScrapingDog API, providing web scraping and search capabilities. The node has been converted to use n8n's declarative style for better maintainability and reliability.

## Features

- 🌐 **URL Scraping**: Extract content from any webpage
- 🔍 **Google Search**: Perform Google searches with advanced options
- �️ **Google Images**: Search Google Images with advanced filtering options
- �🔎 **Bing Search**: Search Bing with customizable filters
- 👥 **LinkedIn Profile**: Scrape LinkedIn profile data
- 💼 **LinkedIn Jobs**: Search and extract job listings
- 🛍️ **Amazon Search**: Search products on Amazon

## Directory Structure

```
nodes/ScrapingDog/
├── ScrapingDog.node.ts      # Main node implementation (Declarative Style)
├── ScrapingDog.node.json    # Node metadata
├── scrappingDog.svg         # Node icon
├── types/
│   └── index.ts             # TypeScript interfaces and types
├── resources/
│   ├── index.ts             # Resource exports
│   ├── scrapeUrl.ts         # Scrape URL resource
│   ├── googleSearch.ts      # Google Search resource
│   ├── googleImages.ts      # Google Images resource
│   ├── bingSearch.ts        # Bing Search resource
│   ├── linkedInProfile.ts   # LinkedIn Profile resource
│   ├── linkedInJob.ts       # LinkedIn Jobs resource
│   ├── amazonSearch.ts      # Amazon Search resource
│   └── staticResource.ts    # Static data (countries, etc.)
```

## Recent Updates

### Version 0.4.0 - Google Images API Integration
- 🖼️ **NEW: Google Images Search** - Added comprehensive Google Images API support
- **Advanced Image Filtering**: Size, type, color, usage rights, time period filters
- **Multi-language Support**: 13 different languages for search results
- **Safe Search Controls**: Strict, moderate, or off filtering options
- **Geographic Targeting**: Country-specific image search results

### Previous Updates
1. **Converted to Declarative Style**
   - Removed manual HTTP request handling
   - Added routing configuration for each resource
   - Improved error handling
   - Better parameter validation

2. **Resource Improvements**
   - Added proper parameter descriptions
   - Fixed boolean parameter descriptions to start with "Whether"
   - Sorted option lists alphabetically
   - Improved type safety

3. **API Integration**
   - Fixed API key handling in requests
   - Proper HTML content handling for scraping
   - Improved response processing

## Usage Examples

### 1. Scrape URL
```javascript
{
    "resource": "scrapeUrl",
    "operation": "get",
    "parameters": {
        "url": "https://example.com",
        "dynamic": false,
        "markdown": false,
        "premium": false,
        "superProxy": false,
        "additionalFields": {
            "aiQuery": "Extract all product names",
            "aiExtractRules": "Find prices and descriptions"
        }
    }
}
```

### 2. Google Search
```javascript
{
    "resource": "googleSearch",
    "operation": "search",
    "parameters": {
        "query": "n8n automation",
        "advance": true,
        "page": "1",
        "location": "US",
        "results": "10"
    }
}
```

### 3. Google Images
```javascript
{
    "resource": "googleImages",
    "operation": "search",
    "parameters": {
        "query": "sunset landscape",
        "results": "20",
        "country": "US",
        "language": "en",
        "imgsz": "l",
        "imageType": "photo",
        "imageColor": "bw",
        "licenses": "f",
        "tbs": "qdr:d",
        "safe": "1"
    }
}
```

## Resource Parameters

### Scrape URL
- `url` (Required): Target webpage URL
- `dynamic`: Whether to enable JavaScript rendering
- `premium`: Whether to use premium proxy
- `superProxy`: Whether to enable super proxy
- `markdown`: Whether to get response in markdown format
- `wait`: Wait time for dynamic rendering (ms)
- `country`: Geolocation for the request
- `aiQuery`: AI-powered data extraction query
- `aiExtractRules`: Custom extraction rules

### Google Search
- `query` (Required): Search keyword
- `advance`: Whether to enable advanced features
- `page`: Result page number (1-10)
- `location`: Search location/country
- `results`: Number of results (10-100)

### Google Images
- `query` (Required): Search keyword for images
- `results`: Number of results (10-100)
- `country`: Country for geotargeting (US, UK, CA, etc.)
- `language`: Search language (en, es, fr, de, etc.)
- `imgsz`: Filter by size (any, large, medium, icon)
- `imageType`: Filter by type (any, face, photo, clipart, lineart, animated)
- `imageColor`: Filter by color (any, color, gray, trans, red, orange, yellow, green, teal, blue, purple, pink, white, black, brown)
- `licenses`: Filter by usage rights (any, labeled-for-reuse, labeled-for-reuse-with-modification, etc.)
- `tbs`: Filter by time (any, hour, day, week, month, year)
- `safe`: Safe search level (strict, moderate, off)

### LinkedIn Profile
- `linkId` (Required): Profile ID or URL
- `private`: Whether the profile is private
- `type`: Profile or company

### LinkedIn Jobs
- `type`: job_listings or job_overview
- `field`: Job field/category
- `location`: Job location
- `job_type`: Contract, Full-Time, Part-Time, Temporary, Volunteer
- `exp_level`: Associate, Director, Entry Level, Internship, Mid Senior Level
- `work_type`: At Work, Remote, Hybrid

## API Response Examples

### Google Images Response
```json
{
  "time_taken": 685.692823,
  "ads": [],
  "images_results": [
    {
      "title": "Beautiful Sunset Landscape",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:...",
      "source": "example.com",
      "original": "https://example.com/images/sunset.jpg",
      "link": "https://example.com/sunset-photography",
      "original_height": 1080,
      "original_width": 1920,
      "original_size": "245KB",
      "know_more_link": "https://www.google.com/search/about-this-image?...",
      "is_product": false,
      "rank": 1
    }
  ]
}
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Build the node:
```bash
npm run build
```

3. Run with Docker:
```bash
make rebuild-and-logs
```

## Testing

The node includes proper error handling for:
- Invalid API key
- Rate limiting
- Invalid parameters
- Network errors
- Blocked requests

## License

MIT License - see LICENSE file for details 