import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { donationRoutes } from './routes/donations.js';
import { zakatRoutes } from './routes/zakat.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database setup
export let db;

async function setupDatabase() {
  db = await open({
    filename: './server/database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS donations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount DECIMAL(10,2) NOT NULL,
      currency TEXT NOT NULL,
      cause TEXT NOT NULL,
      frequency TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS zakat_calculations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      total_assets DECIMAL(10,2) NOT NULL,
      total_liabilities DECIMAL(10,2) NOT NULL,
      zakat_amount DECIMAL(10,2) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

setupDatabase().then(() => {
  // Routes
  app.use('/api/donations', donationRoutes);
  app.use('/api/zakat', zakatRoutes);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to setup database:', err);
  process.exit(1);
});