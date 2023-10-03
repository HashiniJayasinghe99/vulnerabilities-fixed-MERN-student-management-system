import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { router as AdminRoutes } from './routes/Admin.route.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet()); // Apply Helmet middleware
app.use(cookieParser());

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('MongoDB Connected');
});

app.get('/', (req, res) => {
  res.send('API running');
});

// Define your routes here...
app.use('/api/admins', AdminRoutes);
// app.use('/api/notices', require('./routes/Notice.route'));
// app.use('/api/students', require('./routes/Student.route'));
// app.use('/api/studentGroups', require('./routes/StudentGroup.route'));
// app.use('/api/studentProjects', require('./routes/StudentProject.route'));
// app.use('/api/staffMembers', require('./routes/Staff.route'));
// app.use('/api/hostaldetails', require('./routes/HostalService.route'));
// app.use('/api/transportdetails', require('./routes/TransportService.route'));
// app.use('/api/quiz', require('./routes/Quiz.route'));
// app.use('/api/marking', require('./routes/Marking.routes'));

app.listen(port, () => {
  console.log(`Server is starting on port ${port}`);
});
