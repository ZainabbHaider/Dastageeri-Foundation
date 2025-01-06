import { z } from 'zod';

const zakatCalculationSchema = z.object({
  totalAssets: z.number().nonnegative(),
  totalLiabilities: z.number().nonnegative(),
  zakatAmount: z.number().nonnegative()
});

export function validateZakatCalculation(data) {
  return zakatCalculationSchema.safeParse(data);
}