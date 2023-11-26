# E-Learning Platform

This is an e-learning platform designed to provide courses on various subjects. The platform allows users to sign up, enroll in courses, and access learning materials. It's built using the MERN (MongoDB, Express.js, React, Node.js) stack, incorporates Auth0 for authentication, and follows a CI/CD workflow for seamless development and deployment. Note that not all functionality have been deployed yet.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization using Auth0
- Course management (creation, enrollment, progress tracking)
- Responsive and intuitive user interface for an enhanced learning experience
- Continuous Integration/Continuous Deployment (CI/CD) pipeline for automated testing and deployment

## Technologies Used

- MongoDB: Document database for storing course content and user information
- Express.js: Web application framework for Node.js used for backend development
- React: Frontend library for building interactive user interfaces
- Node.js: JavaScript runtime for executing server-side code
- Auth0: Authentication and authorization platform
- CI/CD Workflow Tools (e.g., Jenkins, GitHub Actions): Automated testing and deployment

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/e-learning-platform.git
   cd e-learning-platform
   ```

2. **Install Dependencies**

   - Backend:

     ```bash
     cd backend
     npm install
     ```

   - Frontend:

     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**

   - Create `.env` files in the `backend` and `frontend` directories and add necessary environment variables like database connection strings, Auth0 credentials, etc.

4. **Start the Application**

   - Backend:

     ```bash
     cd backend
     npm start
     ```

   - Frontend:

     ```bash
     cd frontend
     npm start
     ```

5. Access the application at `http://localhost:3000` in your web browser.

## Usage

- **Signup/Login**: Users can sign up or log in to access courses.
- **Course Enrollment**: Browse available courses, enroll, and track progress.
- **Interact with Learning Materials**: Access course content, modules, and lessons.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
