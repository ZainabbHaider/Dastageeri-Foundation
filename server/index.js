import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import volunteerRoutes from './routes/volunteer.js'; // Import the volunteer router
import donate from './routes/donations.js'; // Import the donate router
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the volunteer routes
app.use('/volunteer', volunteerRoutes); // Base route for volunteer API
app.use('/donate', donate); // Base route for donations API
// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Volunteer API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
