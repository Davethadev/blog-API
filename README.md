# 📝 Blog API

A RESTful API for managing a blog platform. This project supports user registration and login, creating and managing blog posts, and includes JWT-based authentication and role-based access control.

---

## 🚀 Features

- User authentication (Signup/Login)
- JSON Web Token (JWT) protected routes
- Create, Read, Update, Delete (CRUD) blog posts
- Role-based permissions (e.g., admin vs regular user)
- Request validation and error handling
- MongoDB for data persistence

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **Validation:** Express Validator
- **Environment Management:** dotenv

---

## 📁 Project Structure

```
├── controllers       # Route logic
├── models            # Mongoose schemas
├── routes            # Express route handlers
├── middleware        # Auth & error handling
├── utils             # Helper functions (e.g. token generation)
├── .env.example      # Example environment file
├── server.js         # App entry point
```

---

## 🧪 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Davethadev/blog-API.git
cd blog-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project and copy from `.env.example`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 4. Start the Server

```bash
npm run dev
```

Server runs on `http://localhost:5000`

---

## 📬 API Endpoints (Sample)

| Method | Endpoint             | Description            | Auth Required |
|--------|----------------------|------------------------|----------------|
| POST   | `/api/auth/signup`   | Register new user      | ❌              |
| POST   | `/api/auth/login`    | Login user & get token | ❌              |
| GET    | `/api/posts`         | Get all blog posts     | ✅              |
| POST   | `/api/posts`         | Create a blog post     | ✅              |
| PUT    | `/api/posts/:id`     | Update a post          | ✅              |
| DELETE | `/api/posts/:id`     | Delete a post          | ✅              |

> 🔐 Protected routes require a JWT token in the `Authorization` header.

---

## 🔒 Authentication Flow

- Users log in and receive a JWT token.
- The token must be sent in `Authorization: Bearer <token>` for protected routes.
- Middleware checks the token and grants access based on user role.

---

## 🧹 Future Improvements

- Swagger documentation
- Refresh token system

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

- **David Umanah** – [@Davethadev](https://github.com/Davethadev)
