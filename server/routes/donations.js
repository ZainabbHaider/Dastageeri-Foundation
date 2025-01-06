import express from 'express';
import { db } from '../index.js';
import { validateDonation } from '../validators/donations.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const validation = validateDonation(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.message });
    }

    const { amount, currency, cause, frequency } = req.body;

    const result = await db.run(
      'INSERT INTO donations (amount, currency, cause, frequency, status) VALUES (?, ?, ?, ?, ?)',
      [amount, currency, cause, frequency, 'pending']
    );

    res.status(201).json({
      id: result.lastID,
      message: 'Donation recorded successfully'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export const donationRoutes = router;