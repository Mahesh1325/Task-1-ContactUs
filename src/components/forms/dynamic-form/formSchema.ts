import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Name must be 3 chars"),
  email: z.string().email("Invalid email"),
  bio: z.string().min(10, "Bio too short"),
  city: z.string().min(1, "Select city"),
  dob: z.string(),
  time: z.string(),
  file: z.any(),
  tags: z.array(z.string()).min(1, "Select one tag"),
});
