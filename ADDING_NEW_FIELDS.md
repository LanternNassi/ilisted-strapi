# Adding New Fields to Landing Page API

This guide explains how to handle new fields when you add them to your Strapi content types.

## 🚀 **Automatic Solution (Recommended)**

The API now uses `populate: '*'` which automatically includes **ALL** fields and relations, including any new ones you add.

### **What This Means:**
- ✅ New fields are automatically included in API responses
- ✅ No code changes needed when adding fields
- ✅ All media files are automatically populated
- ✅ All nested components are included

### **Available Endpoints:**
1. **`GET /api/landing-pages/with-media`** - All fields automatically included
2. **`GET /api/landing-pages/:id/with-media`** - All fields automatically included

## 🎯 **Selective Solution (For Control)**

If you want more control over which fields are included, use the selective endpoint:

### **Endpoint:**
- **`GET /api/landing-pages/with-selective-media`** - Only specified fields included

### **How to Add New Fields:**

1. **Add the field in Strapi Admin Panel**
2. **Update the service file** (`src/api/landing-page/services/landing-page.ts`):

```typescript
// In the findWithSelectiveMedia method, add your new section:
populate: {
  heroSection: {
    populate: '*'
  },
  WhyChooseUs: {
    populate: '*'
  },
  BaliMarketNews: {
    populate: '*'
  },
  FAQ: {
    populate: '*'
  },
  // Add your new section here:
  yourNewSection: {
    populate: '*'
  }
}
```

## 📋 **Step-by-Step Process**

### **Scenario 1: Adding a New Section Component**

1. **Create the component in Strapi Admin:**
   - Go to Content-Type Builder
   - Create a new component (e.g., "Testimonials Section")
   - Add fields like title, testimonials array, etc.

2. **Add it to Landing Page:**
   - Edit the Landing Page content type
   - Add the new component as a field

3. **API Response (Automatic):**
   ```json
   {
     "data": [
       {
         "attributes": {
           "heroSection": { /* existing */ },
           "WhyChooseUs": { /* existing */ },
           "BaliMarketNews": { /* existing */ },
           "FAQ": { /* existing */ },
           "testimonialsSection": { /* NEW - automatically included! */ }
         }
       }
     ]
   }
   ```

### **Scenario 2: Adding Fields to Existing Components**

1. **Edit the component in Strapi Admin:**
   - Go to Content-Type Builder
   - Edit the existing component (e.g., "Hero Section")
   - Add new fields (e.g., "Call to Action Button")

2. **API Response (Automatic):**
   ```json
   {
     "heroSection": {
       "Title": "Welcome",
       "SubTitle": "Discover",
       "HeroBackground": { /* existing */ },
       "callToActionButton": "Get Started" /* NEW - automatically included! */
     }
   }
   ```

## 🔧 **Advanced Configuration**

### **Custom Population (If Needed)**

If you need very specific control, you can create a custom endpoint:

```typescript
// In services/landing-page.ts
async findWithCustomPopulation(params = {}) {
  const data = await strapi.entityService.findMany('api::landing-page.landing-page', {
    populate: {
      heroSection: {
        populate: {
          HeroBackground: true,
          Title: true,
          // Only specific fields you want
        }
      },
      // Only specific sections you want
    },
    publicationState: 'live',
    ...params
  });

  return { data, meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: data.length } } };
}
```

### **Performance Considerations**

- **`populate: '*'`** includes everything but may be slower with large datasets
- **Selective population** is faster but requires manual updates
- **Custom population** gives you the most control over performance

## 📊 **Comparison of Approaches**

| Approach | Pros | Cons | Use Case |
|----------|------|------|----------|
| **Automatic (`populate: '*'`)** | ✅ No code changes needed<br>✅ Always up-to-date<br>✅ Simple | ❌ May include unnecessary data<br>❌ Potentially slower | ✅ Development<br>✅ Small to medium datasets |
| **Selective** | ✅ Better performance<br>✅ Control over data | ❌ Manual updates required<br>❌ Risk of missing new fields | ✅ Production<br>✅ Large datasets |
| **Custom** | ✅ Maximum control<br>✅ Best performance | ❌ Most complex<br>❌ Requires maintenance | ✅ Specific requirements<br>✅ Performance-critical apps |

## 🎯 **Recommendation**

### **For Development:**
Use the automatic endpoints (`/with-media`) - they're simple and always include new fields.

### **For Production:**
1. Start with automatic endpoints
2. If performance becomes an issue, switch to selective endpoints
3. Monitor API response times and adjust accordingly

### **When Adding New Fields:**
1. Add the field in Strapi Admin
2. Test with the automatic endpoint
3. If using selective endpoints, update the service file
4. Deploy and test

## 🔍 **Testing New Fields**

```bash
# Test automatic inclusion
curl -X GET "http://localhost:1337/api/landing-pages/with-media"

# Test selective inclusion (if using)
curl -X GET "http://localhost:1337/api/landing-pages/with-selective-media"
```

The automatic approach ensures your API is always up-to-date with your content structure! 