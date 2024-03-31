import { z } from 'zod';

/**
 * userSignInSchema is a Zod schema object that validates the user sign in data.
 * It checks that the username and password are strings and meet the minimum length requirements.
 */
export const userSignInSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
});

/**
 * UserSignInSchema is a type inferred from the userSignInSchema Zod schema object.
 * It represents the shape of the user sign in data.
 */
export type UserSignInSchema = z.infer<typeof userSignInSchema>;
