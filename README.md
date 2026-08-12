# Divinely Strange

Dark-theme ecommerce scaffold for handcrafted jewellery with a public storefront and admin dashboard.

## Stack

- Frontend: React, TypeScript, Tailwind CSS, GSAP, React Router
- Backend: Node.js, TypeScript, Express
- Database: MySQL via `mysql2`

## Structure

- `frontend`: storefront and admin interface
- `backend`: API, inventory routes, invoice generation, analytics endpoints

## Run

1. Install dependencies:

```bash
npm install
```

2. Start both apps:

```bash
npm run dev
```

3. Configure backend environment in `backend/.env`:

```bash
PORT=4000
CLIENT_ORIGIN=http://localhost:5173
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=divinely_strange
```

## Core Features

- Cinematic landing page with animated hero canvas
- Category-first catalog with tabs for earrings, necklaces, and rings
- Cart and invoice generation without user login
- Admin inventory table and sales analytics dashboard
- MySQL-ready backend with mock fallback data for first-run development
