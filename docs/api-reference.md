# API Reference

Base URL: `http://localhost:5000/api`

## Authentication

### `POST /auth/login`

Authenticate admin and receive a JWT token.

**Body:**
```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "email": "admin@example.com",
    "name": "Admin",
    "role": "admin"
  }
}
```

### `GET /auth/verify`

Verify that the current JWT token is valid.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{ "success": true, "message": "Token is valid" }
```

---

## Leads

All lead endpoints (except `POST /`) require admin authentication.

### `POST /leads`

Submit a new lead from the public contact form.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "role": "Product Manager",
  "company": "Acme Inc",
  "message": "Interested in the program"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Application submitted successfully!",
  "lead": { "id": "...", "name": "John Doe", "email": "john@example.com", "status": "NEW" }
}
```

### `GET /leads`

Get all leads with optional filtering and pagination.

**Headers:** `Authorization: Bearer <token>`

**Query params:**
| Param       | Type   | Description                              |
| ----------- | ------ | ---------------------------------------- |
| `status`    | string | Filter by status (NEW, QUALIFIED, etc.)  |
| `search`    | string | Search name, email, phone, company, role |
| `page`      | number | Page number (default: 1)                 |
| `limit`     | number | Items per page (default: 50)             |
| `dateFilter`| string | Today, 7days, 30days, Custom, All        |
| `startDate` | string | Start date (ISO) for Custom filter       |
| `endDate`   | string | End date (ISO) for Custom filter         |

### `GET /leads/stats`

Get lead counts grouped by status.

**Headers:** `Authorization: Bearer <token>`

### `GET /leads/:id`

Get a single lead by ID.

**Headers:** `Authorization: Bearer <token>`

### `PUT /leads/:id/status`

Update lead funnel status with transition validation.

**Headers:** `Authorization: Bearer <token>`

**Body:**
```json
{
  "status": "QUALIFIED",
  "note": "Spoke on call, good fit"
}
```

**Valid transitions:**
- NEW → QUALIFIED, NOT_QUALIFIED
- QUALIFIED → OPPORTUNITY, NOT_QUALIFIED
- OPPORTUNITY → CONVERTED
- NOT_QUALIFIED → NEW (re-open)
- CONVERTED → (terminal)

### `PUT /leads/:id`

Update lead details (notes, zoom link, etc.).

**Headers:** `Authorization: Bearer <token>`

**Body:**
```json
{
  "notes": "Follow up next week",
  "zoomLink": "https://zoom.us/j/...",
  "zoomDate": "2025-02-15T10:00:00Z",
  "whatsappAdded": true,
  "paymentStatus": "RECEIVED"
}
```

### `DELETE /leads/:id`

Delete a lead.

**Headers:** `Authorization: Bearer <token>`
