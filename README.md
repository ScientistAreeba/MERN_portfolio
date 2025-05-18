# MERN_portfolio

This is a full-stack portfolio management application that allows users to manage and display their educational background, skills, work experiences, and projects. The backend is built with **Node.js, Express, and MongoDB**, while the frontend is built using **React**.

## Features

- Add, edit, delete, and view:
  - 📚 Education details
  - 🛠️ Skills
  - 💼 Work experience
  - 💻 Projects

- MongoDB database integration
- Full CRUD operations
- React frontend with React Router navigation


## Technologies Used

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Postman
- nodemon

### Frontend:
- React
- Axios
- React Router DOM


## API endpoints

### Education

- `GET /api/education` - Get all education data
- `GET /api/education/:id` - Get a single education data
- `POST /api/education` - Create a new education data
- `PUT /api/education/:id` - Update an education data
- `DELETE /api/education/:id` - Delete an education data

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a single skill
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Work Experience

- `GET /api/experiences` - Get all experiences
- `GET /api/experiences/:id` - Get a single experience
- `POST /api/experiences` - Create a new experience
- `PUT /api/experiences/:id` - Update a experience
- `DELETE /api/experiences/:id` - Delete a experience

