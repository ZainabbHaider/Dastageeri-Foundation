import { z } from 'zod';

const donationSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().length(3),
  cause: z.string(),
  frequency: z.enum(['one-time', 'monthly'])
});

export function validateDonation(data) {
  return donationSchema.safeParse(data);
}