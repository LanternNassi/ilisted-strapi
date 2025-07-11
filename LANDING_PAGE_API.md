# Landing Page API Endpoints

This document describes the custom API endpoints created for fetching landing pages with all their media and related information.

## Endpoints

### 1. Get All Landing Pages with Media

**Endpoint:** `GET /api/landing-pages/with-media`

**Description:** Returns all published landing pages with all their media files and nested components populated.

**Response Example:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z",
        "publishedAt": "2024-01-01T00:00:00.000Z",
        "heroSection": {
          "id": 1,
          "Title": "Welcome to Our Platform",
          "SubTitle": "Discover amazing features",
          "HeroBackground": {
            "id": 1,
            "name": "hero-bg.jpg",
            "url": "/uploads/hero-bg.jpg",
            "width": 1920,
            "height": 1080,
            "formats": {
              "thumbnail": { "url": "/uploads/thumbnail_hero-bg.jpg" },
              "large": { "url": "/uploads/large_hero-bg.jpg" }
            }
          }
        },
        "WhyChooseUs": {
          "id": 1,
          "heroImage": {
            "id": 2,
            "name": "choose-us.jpg",
            "url": "/uploads/choose-us.jpg"
          },
          "chooseUsActionPoints": [
            {
              "id": 1,
              "Title": "Feature 1",
              "body": "Description of feature 1"
            }
          ]
        },
        "BaliMarketNews": {
          "id": 1,
          "Title": "Market News",
          "SubTitle": "Latest updates",
          "News": [
            {
              "id": 1,
              "Area": "Bali",
              "Title": "Market Update",
              "Headline_image": {
                "id": 3,
                "name": "news-image.jpg",
                "url": "/uploads/news-image.jpg"
              }
            }
          ]
        },
        "FAQ": [
          {
            "id": 1,
            "Question": "What is this platform?",
            "Answer": "This is a comprehensive platform for..."
          }
        ]
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

### 2. Get Single Landing Page with Media

**Endpoint:** `GET /api/landing-pages/:id/with-media`

**Description:** Returns a specific landing page by ID with all its media files and nested components populated.

**Parameters:**
- `id` (path parameter): The ID of the landing page

**Response Example:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z",
      "publishedAt": "2024-01-01T00:00:00.000Z",
      "heroSection": {
        "id": 1,
        "Title": "Welcome to Our Platform",
        "SubTitle": "Discover amazing features",
        "HeroBackground": {
          "id": 1,
          "name": "hero-bg.jpg",
          "url": "/uploads/hero-bg.jpg",
          "width": 1920,
          "height": 1080,
          "formats": {
            "thumbnail": { "url": "/uploads/thumbnail_hero-bg.jpg" },
            "large": { "url": "/uploads/large_hero-bg.jpg" }
          }
        }
      },
      "WhyChooseUs": {
        "id": 1,
        "heroImage": {
          "id": 2,
          "name": "choose-us.jpg",
          "url": "/uploads/choose-us.jpg"
        },
        "chooseUsActionPoints": [
          {
            "id": 1,
            "Title": "Feature 1",
            "body": "Description of feature 1"
          }
        ]
      },
      "BaliMarketNews": {
        "id": 1,
        "Title": "Market News",
        "SubTitle": "Latest updates",
        "News": [
          {
            "id": 1,
            "Area": "Bali",
            "Title": "Market Update",
            "Headline_image": {
              "id": 3,
              "name": "news-image.jpg",
              "url": "/uploads/news-image.jpg"
            }
          }
        ]
      },
      "FAQ": [
        {
          "id": 1,
          "Question": "What is this platform?",
          "Answer": "This is a comprehensive platform for..."
        }
      ]
    }
  }
}
```

## Features

### Media Population
- All media fields are fully populated with URLs and formats
- Images include thumbnail and large format URLs
- Media metadata (width, height, file size) is included

### Component Population
- **Hero Section**: Includes background image with all formats
- **Why Choose Us**: Includes hero image and action points
- **Bali Market News**: Includes news items with headline images
- **FAQ**: Includes all questions and answers

### Filtering and Pagination
- Supports standard Strapi query parameters
- Only returns published content (`publicationState: 'live'`)
- Sorted by creation date (newest first)

### Error Handling
- Proper error responses for not found resources
- Validation error handling
- Detailed error messages

## Usage Examples

### Using cURL
```bash
# Get all landing pages with media
curl -X GET "http://localhost:1337/api/landing-pages/with-media"

# Get specific landing page with media
curl -X GET "http://localhost:1337/api/landing-pages/1/with-media"
```

### Using JavaScript/Fetch
```javascript
// Get all landing pages
const response = await fetch('/api/landing-pages/with-media');
const data = await response.json();

// Get specific landing page
const response = await fetch('/api/landing-pages/1/with-media');
const data = await response.json();
```

### Using Axios
```javascript
// Get all landing pages
const response = await axios.get('/api/landing-pages/with-media');

// Get specific landing page
const response = await axios.get('/api/landing-pages/1/with-media');
```

## Authentication

These endpoints are configured with `auth: false`, meaning they are publicly accessible without authentication. If you need to add authentication, you can modify the route configuration in `src/api/landing-page/routes/custom.ts`.

## Notes

- Only published landing pages are returned
- All media files are automatically populated with their URLs and formats
- The API follows Strapi's standard response format
- Error responses include detailed error messages for debugging 