import { z } from "zod";

export const UsernameSchema = z
    .string()
    .trim()
    .min(3, "username should be 3 characters minimum")
    .max(10, "username should be 10 characters maximum")
    .toLowerCase()
    .refine((s) => !s.includes(" "), "avoid using spaces in your username");

export const TodoSchema = z.object({
    name: z.string()
        .trim()
        .min(3, "task name should be 3 characters minimum")
        .max(100, "task name should be 100 characters maximum"),
    due_date: z.coerce.date(),
    category: z.enum(["personal", "work"])
})