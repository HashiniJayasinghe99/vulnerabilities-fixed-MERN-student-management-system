import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import { router as AdminRoutes } from './routes/Admin.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// Middleware
app.use(cors({
  origin: 'http://localhost:5000', // Replace with your allowed origin(s)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: false, // Disable unsafe-inline for scripts/styles if needed
}));

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('MongoDB Connected');
});

// CSRF Protection
const csrfProtection = csrf({ cookie: true });
app.use(cookieParser());
app.use(csrfProtection);

// Routes
app.get('/', (req, res) => {
  res.send('API running');
});

// Include CSRF token in response locals
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/api/admins', AdminRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is starting on port ${port}`);
});
