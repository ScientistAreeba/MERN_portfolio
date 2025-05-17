const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


dotenv.config();

//db connection built
connectDB();


const app = express();

//Middleware through express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS added
app.use(cors({
  origin: 'http://localhost:3000', //react frontend URL
  credentials: true
}));

//routes
app.use('/api/education', require('./routes/educationRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/experiences', require('./routes/experienceRoutes'));


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio' });
});

//error handling middleware
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
