import express from 'express';
import { db } from '../index.js';
import { validateZakatCalculation } from '../validators/zakat.js';

const router = express.Router();

router.post('/calculate', async (req, res) => {
  try {
    const validation = validateZakatCalculation(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.message });
    }

    const { totalAssets, totalLiabilities, zakatAmount } = req.body;

    const result = await db.run(
      'INSERT INTO zakat_calculations (total_assets, total_liabilities, zakat_amount) VALUES (?, ?, ?)',
      [totalAssets, totalLiabilities, zakatAmount]
    );

    res.status(201).json({
      id: result.lastID,
      message: 'Zakat calculation saved successfully'
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export const zakatRoutes = router;