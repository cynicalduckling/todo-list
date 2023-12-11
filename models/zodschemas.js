import { z } from "zod";

export const UsernameSchema = z
    .string()
    .trim()
    .min(3, "username should be 3 characters minimum")
    .max(10, "username should be 10 characters maximum")
    .toLowerCase()
    .refine((s) => !s.includes(" "), "avoid using spaces in your username");