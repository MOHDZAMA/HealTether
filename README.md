# Full-Stack Application (Express.js, MongoDB, React, Redux)

## Overview

This project is a full-stack application that demonstrates user authentication using **Express.js** and **MongoDB** on the backend and state management using **React** and **Redux** on the frontend.

### Backend (Task 1)

- **Express.js**: Used to build a REST API for handling user registration and login.
- **MongoDB**: Stores user data with **Mongoose** models.
- **JWT**: Handles user authentication and token generation.
- **bcrypt**: Secures passwords by hashing before saving them to the database.
- **express-validator**: Validates and sanitizes incoming user input.

### Frontend (Task 2)

- **React.js**: User interface for interacting with the backend API.
- **Redux**: Manages global state, including user authentication state.
- **Axios**: Handles API requests to the backend.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- Docker (optional, for containerization)

### Backend Setup

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
