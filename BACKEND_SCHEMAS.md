# Backend Schema Documentation for Mascon Lighting Website

This document contains all the database schemas required for the Mascon Lighting website backend. These schemas are based on the frontend implementation.

---

## Table of Contents

1. [Product Schema](#product-schema)
2. [Collection Schema](#collection-schema)
3. [Category Schema](#category-schema)
4. [Contact/Inquiry Schema](#contactinquiry-schema)

---

## Product Schema

**Collection Name:** `products`

### Fields

```javascript
{
  name: String,                    // Required - Product name (e.g., "ICEMOON")
  model: String,                   // Optional - Product model (e.g., "ML-1000")
  power: String,                   // Required - Power specification (e.g., "12W | 18W | 24W")
  slug: String,                    // Required - URL-friendly identifier (e.g., "icemoon", unique)
  type: String,                    // Required - Product type: "downlight", "panel", "hanging", "wall", "ceiling", "other"
  collection: ObjectId,            // Optional - Reference to Collection schema
  category: ObjectId,              // Optional - Reference to Category schema
  mainImage: String,               // Required - URL to main product image
  images: [String],                // Optional - Array of additional image URLs (thumbnails, different angles)
  heroImage: String,               // Optional - Hero image for product detail page
  specifications: [                // Product specifications organized by category
    {
      category: String,            // Required - One of: "Product Reference", "Construction & Material", "Optical System", "Electrical System", "Protection"
      specs: [
        {
          label: String,           // Required - Specification label (e.g., "Environment", "Installation")
          value: String            // Required - Specification value
        }
      ]
    }
  ],
  features: [                      // Quick feature icons/info
    {
      icon: String,                // Required - Icon identifier/component name
      label: String                // Required - Feature label (e.g., "5W", "230V AC", "Protection", "Efficiency", "Brightness")
    }
  ],
  catalogUrl: String,              // Optional - URL to downloadable catalog PDF
  isActive: Boolean,               // Default: true - Whether product is active/visible
  createdAt: Date,                 // Auto-generated
  updatedAt: Date                  // Auto-generated
}
```

### Indexes Required

- `slug` (unique)
- `type`
- `collection`
- `category`
- `isActive`
- Text index on: `name`, `model`, `type`

### Example

```json
{
  "name": "ICEMOON",
  "model": "ML-1000",
  "power": "12W | 18W | 24W",
  "slug": "icemoon-ml-1000-10w",
  "type": "downlight",
  "mainImage": "/images/products/icemoon-main.jpg",
  "images": [
    "/images/products/icemoon-1.jpg",
    "/images/products/icemoon-2.jpg"
  ],
  "heroImage": "/images/products/icemoon-hero.jpg",
  "specifications": [
    {
      "category": "Product Reference",
      "specs": [
        { "label": "Environment", "value": "Indoor" },
        { "label": "Installation", "value": "Recessed" }
      ]
    },
    {
      "category": "Optical System",
      "specs": [
        { "label": "Beam Angle", "value": "120°" },
        { "label": "CCT (Color Temperature)", "value": "3000K" }
      ]
    }
  ],
  "features": [
    { "icon": "power", "label": "5W" },
    { "icon": "plugin", "label": "230V AC" },
    { "icon": "shield", "label": "Protection" }
  ],
  "catalogUrl": "/catalogs/icemoon-catalog.pdf",
  "isActive": true
}
```

---

## Collection Schema

**Collection Name:** `collections`

### Fields

```javascript
{
  title: String,                   // Required - Collection title (e.g., "Serene Glow", "Icemoon Series")
  slug: String,                    // Required - URL-friendly identifier (unique)
  description: String,             // Required - Collection description
  image: String,                   // Required - URL to collection image
  heroImage: String,               // Optional - Hero image for collection detail page
  tags: [String],                  // Optional - Array of tag strings (e.g., "Decorative Lamps", "Handcrafted Lighting")
  displayOrder: Number,            // Default: 0 - Sort order for display
  isExclusive: Boolean,            // Default: false - Whether this is an exclusive collection
  isActive: Boolean,               // Default: true - Whether collection is active/visible
  createdAt: Date,                 // Auto-generated
  updatedAt: Date                  // Auto-generated
}
```

### Indexes Required

- `slug` (unique)
- `isExclusive`
- `isActive`
- `displayOrder`
- Text index on: `title`, `description`

### Example

```json
{
  "title": "Icemoon Series",
  "slug": "icemoon-series",
  "description": "Browse through our curated range of lamps.",
  "image": "/images/collections/icemoon-series.jpg",
  "heroImage": "/images/collections/icemoon-hero.jpg",
  "tags": ["Decorative Lamps", "Handcrafted Lighting", "Artistic Lamps"],
  "displayOrder": 3,
  "isExclusive": false,
  "isActive": true
}
```

---

## Category Schema

**Collection Name:** `categories`

### Fields

```javascript
{
  name: String,                    // Required - Category name (unique)
  slug: String,                    // Required - URL-friendly identifier (unique)
  description: String,             // Optional - Category description
  parentCategory: ObjectId,        // Optional - Reference to parent Category (for nested categories)
  categoryType: String,            // Required - One of: "productType", "tag", "filter"
  displayOrder: Number,            // Default: 0 - Sort order for display
  isActive: Boolean,               // Default: true - Whether category is active/visible
  createdAt: Date,                 // Auto-generated
  updatedAt: Date                  // Auto-generated
}
```

### Indexes Required

- `name` (unique)
- `slug` (unique)
- `categoryType`
- `isActive`

### Example

```json
{
  "name": "Decorative Lamps",
  "slug": "decorative-lamps",
  "description": "Artistic and decorative lighting solutions",
  "categoryType": "tag",
  "displayOrder": 1,
  "isActive": true
}
```

---

## Contact/Inquiry Schema

**Collection Name:** `contacts` or `inquiries`

### Fields

```javascript
{
  fullName: String,                // Required - Contact's full name
  email: String,                   // Required - Email address (should be validated)
  phone: String,                   // Optional - Phone number
  message: String,                 // Required - Message content
  status: String,                  // Default: "new" - One of: "new", "read", "replied", "archived"
  adminNotes: String,              // Optional - Internal admin notes
  repliedAt: Date,                 // Optional - When inquiry was replied to
  repliedBy: ObjectId,             // Optional - Reference to User/Admin who replied
  createdAt: Date,                 // Auto-generated
  updatedAt: Date                  // Auto-generated
}
```

### Indexes Required

- `status`
- `createdAt` (descending)
- `email`

### Example

```json
{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+91 1234567890",
  "message": "I would like to know more about your ICEMOON series...",
  "status": "new",
  "createdAt": "2025-01-15T10:30:00.000Z"
}
```

---

## Additional Notes

### Relationships

1. **Product → Collection**: Products can belong to a Collection (optional relationship)
2. **Product → Category**: Products can have a Category (optional relationship)
3. **Category → Category**: Categories can have parent categories (nested categories)

### Image Storage

- All image fields should store URLs (either to cloud storage like AWS S3, Cloudinary, or relative paths)
- Consider implementing image upload endpoints separately
- Recommended image formats: JPEG, PNG, WebP

### Slug Generation

- Slugs should be URL-friendly (lowercase, hyphens instead of spaces, no special characters)
- Slugs should be unique per collection
- Consider auto-generating slugs from titles/names

### Timestamps

- All schemas should include `createdAt` and `updatedAt` timestamps (auto-managed)
- Use ISO 8601 format for dates

### Status Fields

- Use `isActive` flags instead of deleting records (soft deletes)
- This allows for easy restoration and audit trails

### API Endpoints Recommendation

Based on the frontend, you'll likely need:

1. **Products**

   - `GET /api/products` - List all products (with filtering by collection, category, type)
   - `GET /api/products/:slug` - Get single product by slug
   - `GET /api/products/collection/:collectionId` - Get products in a collection

2. **Collections**

   - `GET /api/collections` - List all collections
   - `GET /api/collections/:slug` - Get single collection by slug
   - `GET /api/collections/exclusive` - Get exclusive collections

3. **Categories**

   - `GET /api/categories` - List all categories (with filtering by type)
   - `GET /api/categories/:slug` - Get single category

4. **Contact**

   - `POST /api/contact` - Submit contact inquiry
   - `GET /api/contact` - List all inquiries (admin only)
   - `PUT /api/contact/:id` - Update inquiry status (admin only)

---

## Database Recommendations

- **MongoDB** is recommended (flexible schema, good for content management)
- Use **Mongoose** ODM if using Node.js
- Consider adding **validation** at the schema level
- Implement **pagination** for list endpoints (products, collections, etc.)
- Add **search functionality** using text indexes or full-text search

---

**Last Updated:** 2025-01-15
