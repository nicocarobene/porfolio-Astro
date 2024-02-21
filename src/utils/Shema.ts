import { object, string } from 'zod';
export const createContact = object({
  name: string(),
  email: string().email(),
  message: string(),
});