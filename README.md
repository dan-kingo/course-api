# Course Management API

A RESTful API built with Node.js, Express, TypeScript, and MongoDB for managing courses, authors, and user authentication.

## Features

- **User Management**: User registration and authentication with JWT tokens
- **Course Management**: CRUD operations for courses with author relationships
- **Author Management**: Create and retrieve author information
- **Authentication**: Secure JWT-based authentication system
- **Validation**: Request validation using Zod schemas
- **Security**: Password hashing with bcrypt
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod
- **Password Hashing**: bcrypt
- **Development**: tsx for TypeScript execution
- **Logging**: Morgan and debug
- **Utilities**: Lodash, date-fns

## Project Structure

```
├── config/                 # Configuration files
├── controllers/            # Route controllers
├── middlewares/           # Custom middleware
├── models/               # Mongoose models
├── routes/               # API routes
├── schemas/              # Zod validation schemas
├── logs/                 # Application logs
└── index.ts              # Application entry point
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd course-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Install MongoDB locally or use MongoDB Atlas
   - Ensure MongoDB is running on `mongodb://localhost/playground`

4. **Configure JWT Secret**
   Set the JWT secret key as an environment variable:
   ```bash
   export user_jwtKey="your-secret-jwt-key"
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Endpoints

### Authentication

#### Register User
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

#### Login
```http
POST /api/auth
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

### Authors

#### Create Author
```http
POST /api/authors
Content-Type: application/json

{
  "name": "Author Name",
  "bio": "Author biography",
  "website": "https://author-website.com"
}
```

#### Get All Authors
```http
GET /api/authors
```

### Courses

#### Get All Courses
```http
GET /api/courses
```

#### Get Course by ID
```http
GET /api/courses/:id
```

#### Create Course
```http
POST /api/courses
Content-Type: application/json

{
  "name": "Course Name",
  "author": "author_id",
  "price": 99,
  "isPublished": true,
  "tags": ["javascript", "web-development"]
}
```

#### Update Course
```http
PUT /api/courses/:id
Content-Type: application/json

{
  "name": "Updated Course Name"
}
```

#### Delete Course
```http
DELETE /api/courses/:id
```

## Data Models

### User
- `name`: String (5-50 characters)
- `email`: String (unique, valid email)
- `password`: String (hashed, 6+ characters with complexity requirements)

### Author
- `name`: String (3-50 characters)
- `bio`: String (10-255 characters)
- `website`: String (valid URL, 5-50 characters)

### Course
- `name`: String (5-255 characters)
- `author`: ObjectId (reference to Author)
- `price`: Number (minimum 5, required if published)
- `isPublished`: Boolean
- `tags`: Array of strings (at least one tag required)
- `date`: Date (auto-generated)

## Validation

The API uses Zod schemas for request validation:

- **User Registration**: Name, email format, password complexity
- **Author Creation**: Name length, bio length, valid website URL
- **Course Creation**: Name length, valid author ID, price validation, tags requirement

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: All requests are validated using Zod schemas
- **CORS**: Cross-origin resource sharing enabled

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `user_jwtKey` | JWT secret key for token signing | Yes |
| `PORT` | Server port (defaults to 3000) | No |

## Development

### Running in Development Mode
```bash
npm start
```

This uses `tsx watch` to automatically restart the server when files change.

### Debugging
The application uses the `debug` package. Enable debugging with:
```bash
DEBUG=app:* npm start
```

## Error Handling

The API returns appropriate HTTP status codes:
- `200`: Success
- `400`: Bad Request (validation errors, duplicate users)
- `404`: Not Found (resource doesn't exist)
- `500`: Internal Server Error

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License

## Notes

- Ensure MongoDB is running before starting the application
- The JWT secret key must be set as an environment variable
- All API endpoints expect JSON payloads where applicable
- Passwords must meet complexity requirements (uppercase, lowercase, number)