import { z } from 'zod';

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export function validateRegistration(data) {
  return registrationSchema.safeParse(data);
}

export function validateLogin(data) {
  return loginSchema.safeParse(data);
}