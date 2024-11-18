import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "name must be at least 3 characters long!"),
  author: z.string().min(3, "author must be at least 3 characters long!"),
  price: z.number().int().positive(),
  isPublished: z.boolean(),
  tags: z.array(z.string()).min(1, "A course should have at least one tag"),
});

export default schema;
