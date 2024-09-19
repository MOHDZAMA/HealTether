Sure, here’s the complete `README.md` file in one go for easy copying and pasting:

````markdown
# Full-Stack Application (Express.js, MongoDB, React, Redux)

## Overview

This project is a full-stack application demonstrating user authentication using **Express.js** and **MongoDB** on the backend and state management using **React** and **Redux** on the frontend.

### Technologies Used

- **Backend**:

  - **Express.js**: Framework for building the REST API.
  - **MongoDB**: NoSQL database for storing user data.
  - **Mongoose**: ODM for MongoDB.
  - **JWT**: Token-based authentication.
  - **bcrypt**: Password hashing.
  - **express-validator**: Input validation and sanitization.

- **Frontend**:
  - **React.js**: User interface library.
  - **Redux**: State management.
  - **Axios**: HTTP client for making API requests.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- Docker (optional, for containerization)

### Backend Setup

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory with the following contents:

   ```env
   MONGO_URI=mongodb://localhost:27017/user_db
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

5. The backend server should now be running at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend/` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend/` directory with the following contents:

   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. Start the frontend development server:

   ```bash
   npm start
   ```

5. The frontend application should now be running at `http://localhost:3000`.

### Docker Setup (Optional)

To run the application using Docker, follow these steps:

1. Ensure Docker is installed and running on your machine.

2. Create a `docker-compose.yml` file in the root directory with the following contents:

   ```yaml
   version: "3.8"
   services:
     backend:
       build: ./backend
       command: npm start
       ports:
         - "5000:5000"
       volumes:
         - ./backend:/app
       environment:
         - MONGO_URI=mongodb://mongo:27017/user_db
         - JWT_SECRET=your_jwt_secret
       depends_on:
         - mongo

     frontend:
       build: ./frontend
       ports:
         - "3000:3000"
       volumes:
         - ./frontend:/app
       environment:
         - REACT_APP_BACKEND_URL=http://localhost:5000

     mongo:
       image: mongo:latest
       ports:
         - "27017:27017"
       volumes:
         - mongo-data:/data/db

   volumes:
     mongo-data:
   ```

3. Build and start the Docker containers:

   ```bash
   docker-compose up --build
   ```

4. The backend will be accessible at `http://localhost:5000`, and the frontend will be accessible at `http://localhost:3000`.

### API Endpoints

- **POST /api/register**: Register a new user.

  - **Request Body**:
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "password"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **POST /api/login**: Log in a user.

  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "jwt_token"
    }
    ```

- **GET /api/auth/me**: Retrieve the authenticated user's details.
  - **Headers**: `Authorization: Bearer <jwt_token>`
  - **Response**:
    ```json
    {
      "email": "user@example.com"
    }
    ```

### Troubleshooting

- **Backend not starting**: Ensure that MongoDB is running and accessible at the URI specified in the `.env` file.
- **Frontend not connecting to backend**: Verify that `REACT_APP_BACKEND_URL` in the frontend `.env` file is correctly set to the backend URL.
- **JWT errors**: Make sure the `JWT_SECRET` in the backend `.env` file matches between your development and production environments.
