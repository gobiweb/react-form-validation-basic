import { z, type ZodType } from "zod";

// Define TypeScript type for the form data
export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

// Define Zod validation schema
export const formSchema: ZodType<FormData> = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(30),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(30),
    email: z.string().email("Invalid email address"),
    age: z
      .number()
      .min(18, "Age must be at least 18")
      .max(70, "Age cannot exceed 70"),
    password: z
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(20),
    confirmPassword: z
      .string()
      .min(5, "Confirm password must be at least 5 characters")
      .max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
