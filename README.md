# Blog API

A RESTful Blog API built with Node.js, Express.js, MongoDB Atlas, and Mongoose. This API provides secure authentication, user profile management, blog post management, categories, comments, validation, and role-based authorization.

## Features

### Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Refresh Tokens
- Role-Based Access Control (Admin/User)
- Password Hashing with bcryptjs

### User Management
- View Profile
- Update Profile
- Upload Avatar Images

### Blog Posts
- Create Posts
- Get All Posts
- Get Single Post
- Update Posts
- Delete Posts
- Upload Post Images
- Search Posts by Title
- Filter Posts by Category

### Categories
- Create Categories
- Get Categories

### Comments
- Add Comments
- View Comments
- Delete Comments

### Validation & Security
- Joi Validation
- Rate Limiting
- Centralized Error Handling
- Protected Routes

### Documentation
- Swagger API Documentation

---

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT
- bcryptjs

### Validation
- Joi

### File Uploads
- Multer

### Security
- jwt

### Documentation
README.md

---

## Project Structure

```text
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authControllers.js
│   ├── userControllers.js
│   ├── postControllers.js
│   ├── commentControllers.js
│   └── categoryControllers.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── validationMiddleware.js
│   ├── uploadMiddleware.js
│   ├── errorMiddleware.js
│   └── rateLimiter.js
│
├── models/
│   ├── User.js
│   ├── Post.js
│   ├── Comment.js
│   └── Category.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── postRoutes.js
│   ├── commentRoutes.js
│   └── categoryRoutes.js
│
├── validation/
│   ├── authValidation.js
│   ├── postValidation.js
│   ├── commentValidation.js
│   └── categoryValidation.js
│
├── utils/
│   └── generateToken.js
│
├── app.js
│
index.js
.env
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/blog-api.git
cd blog-api
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

REFRESH_SECRET=your_refresh_secret
```

### Start Development Server

```bash
npm run dev
```

### Start Production Server

```bash
npm start
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|----------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| POST | /api/auth/refresh-token |

### Users

| Method | Endpoint |
|----------|----------|
| GET | /api/users/profile |
| PUT | /api/users/profile |

### Posts

| Method | Endpoint |
|----------|----------|
| POST | /api/posts |
| GET | /api/posts |
| GET | /api/posts/:id |
| PUT | /api/posts/:id |
| DELETE | /api/posts/:id |

### Categories

| Method | Endpoint |
|----------|----------|
| POST | /api/categories |
| GET | /api/categories |

### Comments

| Method | Endpoint |
|----------|----------|
| POST | /api/comments/:postId |
| GET | /api/comments/:postId |
| DELETE | /api/comments/delete/:id |

---

## Search & Filtering

### Search Posts

```http
GET /api/posts?search=nodejs
```

### Filter by Category

```http
GET /api/posts?category=categoryId
```

---

## Authentication

Protected routes require:

```http
Authorization: Bearer <access_token>
```

---

## Security Features

- JWT Authentication
- Refresh Tokens
- Password Hashing (bcryptjs)
- Joi Validation
- Rate Limiting
- Centralized Error Handling
- Protected Routes

---

## Future Improvements

- Pagination
- Cloudinary Image Storage
- Email Verification
- Password Reset
- Post Likes & Reactions
- Bookmarks
- Redis Caching
- Docker Support
- Unit Testing
- CI/CD Pipeline

---

## Author
Emerelauwaonu Caleb 

Backend Developer

### Skills Demonstrated
- REST API Development
- Authentication & Authorization
- MongoDB Data Modeling
- Request Validation
- Middleware Architecture
- Error Handling
- API Security

---

## License

MIT License