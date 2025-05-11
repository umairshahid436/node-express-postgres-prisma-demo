# Node.js REST API

A learning project demonstrating REST API development with Node.js, Express, TypeScript, and MongoDB.

## Features

- TypeScript for type safety
- Express middleware
- PostgreSQL - Relational database
- Prisma - ORM for database operations

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma


## Project Structure

```
src/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── types/          # TypeScript types
├── utils/          # Utility functions
└── server.ts       # App entry point
```

## API Endpoints



### Category

```
GET    /api/categories
POST   /api/categories
GET    /api/categories/:id
PUT    /api/products/:id
DELETE /api/categories/:id
```
### Products

```
GET    /api/products
POST   /api/products
GET    /api/products/:id
PUT    /api/products/:id
DELETE /api/products/:id
```

## Getting Started

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm start
```

